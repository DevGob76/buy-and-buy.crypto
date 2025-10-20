const translations = {
    fr: {
        welcome: "Bienvenue sur BUY and BUY CRYPTO",
        userAccess: "🔑 Accès Utilisateur",
        phoneNumber: "Numéro de Téléphone",
        access: "Accéder",
        home: "🏠 Page d'Accueil",
        distributionSpot: "📊 Répartition Spot",
        distributionFuture: "🎯 Répartition Future",
        calendar: "📅 Calendrier Crypto",
        loan: "💰 Prêt Trading Crypto",
        profit: "📈 Bilan Profit Trading Crypto"
    },
    en: {
        welcome: "Welcome to BUY and BUY CRYPTO",
        userAccess: "🔑 User Access",
        phoneNumber: "Phone Number",
        access: "Access",
        home: "🏠 Home Page",
        distributionSpot: "📊 Spot Distribution",
        distributionFuture: "🎯 Future Distribution",
        calendar: "📅 Crypto Calendar",
        loan: "💰 Crypto Trading Loan",
        profit: "📈 Crypto Trading Profit Summary"
    },
    es: {
        welcome: "Bienvenido a BUY and BUY CRYPTO",
        userAccess: "🔑 Acceso de Usuario",
        phoneNumber: "Número de Teléfono",
        access: "Acceder",
        home: "🏠 Página de Inicio",
        distributionSpot: "📊 Distribución Spot",
        distributionFuture: "🎯 Distribución Future",
        calendar: "📅 Calendario Crypto",
        loan: "💰 Préstamo para Trading de Crypto",
        profit: "📈 Resumen de Ganancias de Trading de Crypto"
    },
    de: {
        welcome: "Willkommen bei BUY and BUY CRYPTO",
        userAccess: "🔑 Benutzerzugriff",
        phoneNumber: "Telefonnummer",
        access: "Zugang",
        home: "🏠 Startseite",
        distributionSpot: "📊 Spot-Verteilung",
        distributionFuture: "🎯 Future-Verteilung",
        calendar: "📅 Krypto-Kalender",
        loan: "💰 Krypto-Handelsdarlehen",
        profit: "📈 Krypto-Handelsgewinnübersicht"
    }
};

let currentUser = null;
const adminSecretCode = "Gob19*20";
const CRYPTO_LIST = [
    { name: 'Bitcoin', symbol: 'BTC', id: 'bitcoin' },
    { name: 'Ethereum', symbol: 'ETH', id: 'ethereum' },
    { name: 'Cardano', symbol: 'ADA', id: 'cardano' },
    { name: 'Solana', symbol: 'SOL', id: 'solana' },
    { name: 'Ripple', symbol: 'XRP', id: 'ripple' },
    { name: 'Dogecoin', symbol: 'DOGE', id: 'dogecoin' },
    { name: 'Polkadot', symbol: 'DOT', id: 'polkadot-new' },
    { name: 'Avalanche', symbol: 'AVAX', id: 'avalanche-2' },
    { name: 'Polygon', symbol: 'MATIC', id: 'matic-network' },
    { name: 'Litecoin', symbol: 'LTC', id: 'litecoin' },
    { name: 'LISTE XSTOCKS', symbol: 'XSTOCKS', id: 'xstocks' },
    { name: 'CRCLX', symbol: 'CRCLX/USDT', id: 'crclx' },
    { name: 'AAPLX', symbol: 'AAPLX/USDT', id: 'aaplx' },
    { name: 'COINX', symbol: 'COINX/USDT', id: 'coinx' },
    { name: 'TSLAX', symbol: 'TSLAX/USDT', id: 'tslax' },
    { name: 'NVDAX', symbol: 'NVDAX/USDT', id: 'nvda' },
    { name: 'AMZNX', symbol: 'AMZNX/USDT', id: 'amznx' },
    { name: 'MSTRX', symbol: 'MSTRX/USDT', id: 'mstrx' },
    { name: 'HOODX', symbol: 'HOODX/USDT', id: 'hoodx' },
    { name: 'GOOGLX', symbol: 'GOOGLX/USDT', id: 'googlx' },
    { name: 'QQQX', symbol: 'QQQX/USDT', id: 'qqqx' },
    { name: 'SPYX', symbol: 'SPYX/USDT', id: 'spy' },
    { name: 'METAX', symbol: 'METAX/USDT', id: 'meta' }
];

function getUserKey(prefix) {
    return `user_${currentUser}_${prefix}`;
}
function loadUserData(key, defaultValue = []) {
    return JSON.parse(localStorage.getItem(getUserKey(key))) || defaultValue;
}
function saveUserData(key, data) {
    localStorage.setItem(getUserKey(key), JSON.stringify(data));
}

let archives = [];
let futureArchives = [];
let loanArchives = [];
let profitData = { initialCapital: 300, rows: [] };

function populateCryptoDropdown() {
    const select = document.getElementById('crypto-select');
    const selectFuture = document.getElementById('crypto-select-future');
    CRYPTO_LIST.forEach(crypto => {
        const option = document.createElement('option');
        option.value = crypto.id;
        option.textContent = `${crypto.name} (${crypto.symbol})`;
        select.appendChild(option);
        const optionFuture = option.cloneNode(true);
        selectFuture.appendChild(optionFuture);
    });
}

async function fetchCryptoPrice(cryptoId, isFuture = false) {
    const loader = document.getElementById(isFuture ? 'price-loader-future' : 'price-loader');
    const priceInput = document.getElementById(isFuture ? 'initial-price-future' : 'initial-price');
    try {
        loader.style.display = 'block';
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr_change=true`);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();
        if (data[cryptoId] && data[cryptoId].usd) {
            priceInput.value = data[cryptoId].usd;
            priceInput.dispatchEvent(new Event('input'));
            if (isFuture && data[cryptoId].usd_24h_change !== undefined) {
                updateTrendIndicator(data[cryptoId].usd_24h_change);
            }
        }
    } catch (error) {
        console.error('Failed to fetch price:', error);
    } finally {
        loader.style.display = 'none';
    }
}

function updateTrendIndicator(change24h) {
    const indicator = document.getElementById('trend-indicator-future');
    if (change24h > 2) {
        indicator.className = 'trend-indicator trend-bullish';
        indicator.innerHTML = '<span>Tendance de la semaine : Haussière</span><span>↑</span>';
    } else if (change24h < -2) {
        indicator.className = 'trend-indicator trend-bearish';
        indicator.innerHTML = '<span>Tendance de la semaine : Baissière</span><span>↓</span>';
    } else {
        indicator.className = 'trend-indicator trend-neutral';
        indicator.innerHTML = '<span>Tendance de la semaine : Neutre</span><span>⇅</span>';
    }
}

function updateStakeAmounts() {
    const budget = parseFloat(document.getElementById('budget').value) || 0;
    for (let i = 1; i <= 4; i++) {
        const rate = parseFloat(document.getElementById(`rate-${i}`).value) || 0;
        const amount = budget * (rate / 100);
        document.getElementById(`stake-amount-${i}`).textContent = `Mise: ${amount.toFixed(2)}`;
    }
}

function updateStakeAmountsFuture() {
    const budget = parseFloat(document.getElementById('budget-future').value) || 0;
    const leverage = parseFloat(document.getElementById('leverage-future').value) || 1;
    for (let i = 1; i <= 3; i++) {
        const rate = parseFloat(document.getElementById(`rate-future-${i}`).value) || 0;
        const amount = budget * (rate / 100);
        const realAmount = amount * leverage;
        document.getElementById(`stake-amount-future-${i}`).textContent = `Mise: ${amount.toFixed(2)}`;
        document.getElementById(`real-stake-${i}`).value = realAmount.toFixed(2);
    }
}

function generateGrid() {
    const initialPrice = parseFloat(document.getElementById('initial-price').value);
    const gridInterval = parseFloat(document.getElementById('grid-interval').value) / 100;
    const triggerDrop = parseFloat(document.getElementById('trigger-drop').value) / 100;
    const numBlocks = parseInt(document.getElementById('num-blocks').value, 10);
    const resultsContainer = document.getElementById('grid-results-container');
    const budget = parseFloat(document.getElementById('budget').value);
    const rate1 = parseFloat(document.getElementById('rate-1').value) / 100;
    const rate2 = parseFloat(document.getElementById('rate-2').value) / 100;
    const rate3 = parseFloat(document.getElementById('rate-3').value) / 100;
    const rate4 = parseFloat(document.getElementById('rate-4').value) / 100;
    const newStakesRates = [rate1, rate2, rate3, rate4];
    const allInputs = [initialPrice, gridInterval, triggerDrop, numBlocks, budget, ...newStakesRates];
    if (allInputs.some(input => isNaN(input) || input < 0) || numBlocks < 1) {
        resultsContainer.innerHTML = `<p style="color: red; text-align: center;">Veuillez entrer des valeurs numériques valides.</p>`;
        return;
    }
    let currentTriggerPrice = initialPrice * (1 - triggerDrop);
    const blocks = [];
    const stakes = newStakesRates.map(rate => budget * rate);
    for (let i = 0; i < numBlocks; i++) {
        const block = { blockNumber: i + 1, subBlocks: [] };
        let priceForBlock = (i === 0) ? initialPrice : blocks[i-1].subBlocks[3].lowerPrice;
        currentTriggerPrice = priceForBlock * (1 - triggerDrop);
        for (let j = 0; j < 4; j++) {
            const lowerPrice = currentTriggerPrice * (1 - gridInterval);
            const upperPrice = currentTriggerPrice * (1 + gridInterval);
            block.subBlocks.push({
                triggerPrice: currentTriggerPrice,
                lowerPrice: lowerPrice,
                upperPrice: upperPrice,
                stake: stakes[j]
            });
            currentTriggerPrice = lowerPrice * (1 - triggerDrop);
        }
        blocks.push(block);
    }
    renderTable(blocks, resultsContainer);
}

function generateFutureGrid() {
    const marketPrice = parseFloat(document.getElementById('initial-price-future').value);
    const gridInterval = parseFloat(document.getElementById('grid-interval-future').value) / 100;
    const budget = parseFloat(document.getElementById('budget-future').value);
    const rate1 = parseFloat(document.getElementById('rate-future-1').value) / 100;
    const rate2 = parseFloat(document.getElementById('rate-future-2').value) / 100;
    const rate3 = parseFloat(document.getElementById('rate-future-3').value) / 100;
    const leverage = parseFloat(document.getElementById('leverage-future').value) || 1;
    const resultsContainer = document.getElementById('grid-results-container-future');
    const allInputs = [marketPrice, gridInterval, budget, rate1, rate2, rate3, leverage];
    if (allInputs.some(input => isNaN(input) || input < 0)) {
        resultsContainer.innerHTML = `<p style="color: red; text-align: center;">Veuillez entrer des valeurs numériques valides.</p>`;
        return;
    }
    const stakes = [
        budget * rate1,
        budget * rate2,
        budget * rate3
    ];
    const interval = gridInterval;
    const positions = [
        {
            type: 'BUY STOP',
            entryPrice: marketPrice,
            lowerPrice: marketPrice * (1 - interval),
            upperPrice: marketPrice * (1 + interval),
            stake: stakes[0],
            realStake: stakes[0] * leverage
        },
        {
            type: 'SELL STOP',
            entryPrice: marketPrice,
            lowerPrice: marketPrice * (1 + interval),
            upperPrice: marketPrice * (1 - interval),
            stake: stakes[1],
            realStake: stakes[1] * leverage
        },
        {
            type: 'BUY STOP',
            entryPrice: marketPrice,
            lowerPrice: marketPrice * (1 - interval),
            upperPrice: marketPrice * (1 + interval),
            stake: stakes[2],
            realStake: stakes[2] * leverage
        }
    ];
    renderFutureTable(positions, resultsContainer);
}

function renderTable(blocks, container) {
    container.innerHTML = '';
    blocks.forEach(block => {
        const table = document.createElement('table');
        table.classList.add('results-table');
        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.colSpan = 4;
        headerCell.textContent = `Bloc ${block.blockNumber}`;
        headerCell.classList.add('block-header');
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);
        const tbody = document.createElement('tbody');
        block.subBlocks.forEach((subBlock, index) => {
            const row = document.createElement('tr');
            const triggerCell = document.createElement('td');
            triggerCell.innerHTML = `Déclenchement: <br><b>${subBlock.triggerPrice.toFixed(4)}</b>`;
            row.appendChild(triggerCell);
            const lowerCell = document.createElement('td');
            lowerCell.innerHTML = `Achat (Limite Basse): <br><b>${subBlock.lowerPrice.toFixed(4)}</b>`;
            row.appendChild(lowerCell);
            const upperCell = document.createElement('td');
            upperCell.innerHTML = `Vente (Limite Haute): <br><b>${subBlock.upperPrice.toFixed(4)}</b>`;
            row.appendChild(upperCell);
            const stakeCell = document.createElement('td');
            stakeCell.innerHTML = `Mise: <br><b>${subBlock.stake.toFixed(2)}</b>`;
            stakeCell.classList.add('currency');
            row.appendChild(stakeCell);
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        container.appendChild(table);
    });
}

function renderFutureTable(positions, container) {
    container.innerHTML = '';
    const table = document.createElement('table');
    table.classList.add('results-table');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th colspan="6" class="block-header">Bloc de Trading Future - 3 Positions</th>
    `;
    table.appendChild(headerRow);
    const subHeaderRow = document.createElement('tr');
    subHeaderRow.innerHTML = `
        <th>Position</th>
        <th>Type</th>
        <th>Prix d'Entrée</th>
        <th>Prix Inférieur</th>
        <th>Prix Supérieur</th>
        <th>Mise / Mise Réelle</th>
    `;
    table.appendChild(subHeaderRow);
    const tbody = document.createElement('tbody');
    positions.forEach((pos, index) => {
        const row = document.createElement('tr');
        const badgeClass = pos.type === 'BUY STOP' ? 'buy-stop' : 'sell-stop';
        row.innerHTML = `
            <td><b>Position ${index + 1}</b></td>
            <td><span class="position-badge ${badgeClass}">${pos.type}</span></td>
            <td><b>${pos.entryPrice.toFixed(4)}</b></td>
            <td><b>${pos.lowerPrice.toFixed(4)}</b></td>
            <td><b>${pos.upperPrice.toFixed(4)}</b></td>
            <td>${pos.stake.toFixed(2)} / <b style="color: #8b5cf6;">${pos.realStake.toFixed(2)}</b></td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}

function populateArchiveSelect() {
    const select = document.getElementById('archive-select');
    select.innerHTML = '<option value="">-- Sélectionner une date --</option>';
    archives.forEach((archive, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = archive.date;
        select.appendChild(option);
    });
}

function populateFutureArchiveSelect() {
    const select = document.getElementById('archive-select-future');
    select.innerHTML = '<option value="">-- Sélectionner une date --</option>';
    futureArchives.forEach((archive, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = archive.date;
        select.appendChild(option);
    });
}

function displaySelectedArchive() {
    const select = document.getElementById('archive-select');
    const selectedIndex = select.value;
    const btn = document.getElementById('download-pdf-btn');
    if (selectedIndex === "") {
        document.getElementById('archive-display').classList.add('hidden');
        btn.style.display = 'none';
        return;
    }
    const archive = archives[selectedIndex];
    document.getElementById('archive-content').innerHTML = archive.content;
    document.getElementById('archive-display').classList.remove('hidden');
    btn.style.display = 'block';
}

function displaySelectedFutureArchive() {
    const select = document.getElementById('archive-select-future');
    const selectedIndex = select.value;
    if (selectedIndex === "") {
        document.getElementById('archive-display-future').classList.add('hidden');
        return;
    }
    const archive = futureArchives[selectedIndex];
    document.getElementById('archive-content-future').innerHTML = archive.content;
    document.getElementById('archive-display-future').classList.remove('hidden');
}

function archiveRepartition() {
    const date = document.getElementById('archive-date').value;
    if (!date) return showMessagePopup('Erreur', 'Veuillez sélectionner une date.');
    const archive = {
        date,
        content: document.getElementById('grid-results-container').innerHTML,
        params: {
            crypto: document.getElementById('crypto-select').value,
            initialPrice: document.getElementById('initial-price').value,
            budget: document.getElementById('budget').value,
            rate1: document.getElementById('rate-1').value,
            rate2: document.getElementById('rate-2').value,
            rate3: document.getElementById('rate-3').value,
            rate4: document.getElementById('rate-4').value,
            gridInterval: document.getElementById('grid-interval').value,
            triggerDrop: document.getElementById('trigger-drop').value,
            numBlocks: document.getElementById('num-blocks').value
        }
    };
    archives.push(archive);
    saveUserData('cryptoArchives', archives);
    populateArchiveSelect();
    showMessagePopup('Succès', 'Archivé avec succès.');
}

function archiveFutureRepartition() {
    const date = document.getElementById('archive-date-future').value;
    if (!date) return showMessagePopup('Erreur', 'Veuillez sélectionner une date.');
    const archive = {
        date,
        content: document.getElementById('grid-results-container-future').innerHTML,
        params: {
            crypto: document.getElementById('crypto-select-future').value,
            initialPrice: document.getElementById('initial-price-future').value,
            budget: document.getElementById('budget-future').value,
            rate1: document.getElementById('rate-future-1').value,
            rate2: document.getElementById('rate-future-2').value,
            rate3: document.getElementById('rate-future-3').value,
            gridInterval: document.getElementById('grid-interval-future').value,
            leverage: document.getElementById('leverage-future').value
        }
    };
    futureArchives.push(archive);
    saveUserData('cryptoFutureArchives', futureArchives);
    populateFutureArchiveSelect();
    showMessagePopup('Succès', 'Archivé avec succès.');
}

function deleteArchive() {
    const select = document.getElementById('archive-select');
    const selectedIndex = select.value;
    if (selectedIndex !== "") {
        archives.splice(selectedIndex, 1);
        saveUserData('cryptoArchives', archives);
        populateArchiveSelect();
        showMessagePopup('Supprimé', 'Archive supprimée.');
    } else {
        archives = [];
        saveUserData('cryptoArchives', archives);
        populateArchiveSelect();
        showMessagePopup('Tout supprimé', 'Toutes les archives supprimées.');
    }
    document.getElementById('archive-display').classList.add('hidden');
    document.getElementById('download-pdf-btn').style.display = 'none';
}

function deleteFutureArchive() {
    const select = document.getElementById('archive-select-future');
    const selectedIndex = select.value;
    if (selectedIndex !== "") {
        futureArchives.splice(selectedIndex, 1);
    } else {
        futureArchives = [];
    }
    saveUserData('cryptoFutureArchives', futureArchives);
    populateFutureArchiveSelect();
    document.getElementById('archive-display-future').classList.add('hidden');
    showMessagePopup('Supprimé', 'Archive supprimée.');
}

async function downloadArchiveAsPDF() {
    const { jsPDF } = window.jspdf;
    const content = document.getElementById('archive-content');
    if (!content) return showMessagePopup('Erreur', 'Aucune archive sélectionnée.');
    const canvas = await html2canvas(content, { scale: 2 });
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`archive_${new Date().toISOString().slice(0,10)}.pdf`);
}

function updateLoanAmount() {
    const collateralBudget = parseFloat(document.getElementById('collateral-budget').value) || 0;
    const loanRatio = parseFloat(document.getElementById('loan-ratio').value) || 0;
    const loanAmount = collateralBudget * (loanRatio / 100);
    document.getElementById('loan-amount').value = loanAmount.toFixed(2);
    updateDebtRatio();
}

function updateDebtRatio() {
    const collateralBudget = parseFloat(document.getElementById('collateral-budget').value) || 0;
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const debtRatio = (loanAmount / (collateralBudget + loanAmount)) * 100;
    document.getElementById('debt-ratio').value = debtRatio.toFixed(2);
}

function updateTotalInterest() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) || 0;
    const loanDuration = parseFloat(document.getElementById('loan-duration').value) || 0;
    const totalInterest = loanAmount * (interestRate / 100) * loanDuration;
    document.getElementById('total-interest').value = totalInterest.toFixed(4);
    updateTotalRepayment();
}

function updateTotalRepayment() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const totalInterest = parseFloat(document.getElementById('total-interest').value) || 0;
    const totalRepayment = loanAmount + totalInterest;
    document.getElementById('total-repayment').value = totalRepayment.toFixed(4);
}

function updateAllCalculations() {
    updateLoanAmount();
    updateTotalInterest();
}

function archiveLoan() {
    const date = document.getElementById('loan-archive-date').value;
    if (!date) return showMessagePopup('Erreur', 'Veuillez sélectionner une date.');
    const loanData = {
        date,
        collateralBudget: document.getElementById('collateral-budget').value,
        loanRatio: document.getElementById('loan-ratio').value,
        loanAmount: document.getElementById('loan-amount').value,
        debtRatio: document.getElementById('debt-ratio').value,
        interestRate: document.getElementById('interest-rate').value,
        loanDuration: document.getElementById('loan-duration').value,
        totalInterest: document.getElementById('total-interest').value,
        totalRepayment: document.getElementById('total-repayment').value
    };
    loanArchives.push(loanData);
    saveUserData('loanArchives', loanArchives);
    populateLoanArchiveSelect();
    showMessagePopup('Succès', 'Prêt archivé.');
}

function deleteLoanArchive() {
    loanArchives = [];
    saveUserData('loanArchives', loanArchives);
    populateLoanArchiveSelect();
    showMessagePopup('Supprimé', 'Toutes les archives de prêt supprimées.');
}

function populateLoanArchiveSelect() {
    const select = document.getElementById('loan-archive-select');
    select.innerHTML = '<option value="">-- Sélectionner une date --</option>';
    loanArchives.forEach((archive, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = archive.date;
        select.appendChild(option);
    });
}

function displaySelectedLoanArchive() {
    const select = document.getElementById('loan-archive-select');
    const selectedIndex = select.value;
    if (selectedIndex === "") {
        document.getElementById('loan-archive-display').classList.add('hidden');
        return;
    }
    const archive = loanArchives[selectedIndex];
    document.getElementById('display-collateral-budget').value = archive.collateralBudget;
    document.getElementById('display-loan-ratio').value = archive.loanRatio;
    document.getElementById('display-loan-amount').value = archive.loanAmount;
    document.getElementById('display-debt-ratio').value = archive.debtRatio;
    document.getElementById('display-interest-rate').value = archive.interestRate;
    document.getElementById('display-loan-duration').value = archive.loanDuration;
    document.getElementById('display-total-interest').value = archive.totalInterest;
    document.getElementById('display-total-repayment').value = archive.totalRepayment;
    document.getElementById('loan-archive-display').classList.remove('hidden');
}

function addNewRow() {
    const tableBody = document.getElementById('profit-table-body');
    const rowCount = tableBody.rows.length;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount + 1}</td>
        <td><input type="date" onchange="saveProfitData()"></td>
        <td><input type="date" onchange="saveProfitData()"></td>
        <td><input type="number" value="300" onchange="saveProfitData(); updateProfitCalculations()"></td>
        <td><input type="number" value="450" onchange="saveProfitData(); updateProfitCalculations()"></td>
        <td><input type="number" readonly></td>
        <td><input type="number" readonly></td>
    `;
    tableBody.appendChild(newRow);
    updateProfitCalculations();
}

function updateProfitCalculations() {
    let totalProfit = 0;
    const initialCapital = parseFloat(document.getElementById('initial-capital').value) || 0;
    const rows = document.querySelectorAll('#profit-table-body tr');
    rows.forEach(row => {
        const startBudget = parseFloat(row.cells[3].querySelector('input').value) || 0;
        const endBudget = parseFloat(row.cells[4].querySelector('input').value) || 0;
        const profit = endBudget - startBudget;
        const profitRate = (profit / startBudget) * 100;
        row.cells[5].querySelector('input').value = profit.toFixed(2);
        row.cells[6].querySelector('input').value = profitRate.toFixed(2);
        totalProfit += profit;
    });
    document.getElementById('total-profit').value = totalProfit.toFixed(2);
    updateProfitRate(initialCapital);
}

function updateProfitRate(initialCapital) {
    const totalProfit = parseFloat(document.getElementById('total-profit').value) || 0;
    const profitRate = (totalProfit / initialCapital) * 100;
    document.getElementById('profit-rate').value = profitRate.toFixed(2);
}

function saveProfitData() {
    const rows = [];
    document.querySelectorAll('#profit-table-body tr').forEach(row => {
        rows.push({
            startDate: row.cells[1].querySelector('input').value,
            endDate: row.cells[2].querySelector('input').value,
            startBudget: row.cells[3].querySelector('input').value,
            endBudget: row.cells[4].querySelector('input').value
        });
    });
    profitData.rows = rows;
    profitData.initialCapital = document.getElementById('initial-capital').value;
    saveUserData('profitData', profitData);
}

function loadProfitData() {
    if (profitData.rows.length > 0) {
        const tableBody = document.getElementById('profit-table-body');
        tableBody.innerHTML = '';
        profitData.rows.forEach((rowData, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td><input type="date" value="${rowData.startDate}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="date" value="${rowData.endDate}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="number" value="${rowData.startBudget}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="number" value="${rowData.endBudget}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="number" readonly></td>
                <td><input type="number" readonly></td>
            `;
            tableBody.appendChild(newRow);
        });
        document.getElementById('initial-capital').value = profitData.initialCapital;
        updateProfitCalculations();
    }
}

function clearAdjustableCells() {
    document.getElementById('profit-table-body').innerHTML = '';
    document.getElementById('initial-capital').value = 300;
    document.getElementById('total-profit').value = '0.00';
    document.getElementById('profit-rate').value = '0.00';
    profitData = { initialCapital: 300, rows: [] };
    saveUserData('profitData', profitData);
    showMessagePopup('Effacé', 'Données supprimées.');
}

function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    const t = translations[lang];
    document.getElementById('btn-home').textContent = t.home;
    document.getElementById('btn-repartition').textContent = t.distributionSpot;
    document.getElementById('btn-repartition-future').textContent = t.distributionFuture;
    document.getElementById('btn-calendar').textContent = t.calendar;
    document.getElementById('btn-loan').textContent = t.loan;
    document.getElementById('btn-profit').textContent = t.profit;
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    event?.currentTarget?.classList.add('active');
}

function checkAccess(pageId) {
    if (currentUser) showPage(pageId);
    else showMessagePopup('Accès refusé', 'Veuillez vous connecter.');
}

function validateAccess() {
    const phone = document.getElementById('user-phone').value.trim();
    if (!phone) return showMessagePopup('Erreur', 'Numéro requis.');
    const users = JSON.parse(localStorage.getItem('cryptoUsers')) || [];
    const userExists = users.some(u => u.phone === phone);
    if (!userExists) return showMessagePopup('Erreur', 'Numéro non enregistré.');
    currentUser = phone;
    archives = loadUserData('cryptoArchives', []);
    futureArchives = loadUserData('cryptoFutureArchives', []);
    loanArchives = loadUserData('loanArchives', []);
    profitData = loadUserData('profitData', { initialCapital: 300, rows: [] });
    populateArchiveSelect();
    populateFutureArchiveSelect();
    populateLoanArchiveSelect();
    loadProfitData();
    updateStakeAmounts();
    updateStakeAmountsFuture();
    showMessagePopup('Accès autorisé', 'Bienvenue !');
}

function showAdminSecretPopup() {
    document.getElementById('secret-code-popup').style.display = 'block';
}

function checkAdminAccess() {
    const code = document.getElementById('admin-secret').value;
    if (code === adminSecretCode) {
        document.getElementById('secret-code-popup').style.display = 'none';
        showPage('parametres');
        updateAdminUserList();
    } else {
        showMessagePopup('Accès refusé', 'Code incorrect.');
    }
}

function addUser() {
    const name = document.getElementById('admin-user-name').value.trim();
    const phone = document.getElementById('admin-user-phone').value.trim();
    if (!name || !phone) return showMessagePopup('Erreur', 'Remplissez tous les champs.');
    const users = JSON.parse(localStorage.getItem('cryptoUsers')) || [];
    if (users.some(u => u.phone === phone)) return showMessagePopup('Erreur', 'Utilisateur déjà existant.');
    users.push({ name, phone });
    localStorage.setItem('cryptoUsers', JSON.stringify(users));
    showMessagePopup('Succès', 'Utilisateur ajouté.');
    updateAdminUserList();
}

function deleteUser(phone) {
    let users = JSON.parse(localStorage.getItem('cryptoUsers')) || [];
    users = users.filter(u => u.phone !== phone);
    localStorage.setItem('cryptoUsers', JSON.stringify(users));
    updateAdminUserList();
    showMessagePopup('Supprimé', 'Utilisateur supprimé.');
}

function updateAdminUserList() {
    const list = document.getElementById('admin-user-list');
    list.innerHTML = '';
    const users = JSON.parse(localStorage.getItem('cryptoUsers')) || [];
    users.forEach(u => {
        const item = document.createElement('div');
        item.className = 'user-item';
        item.innerHTML = `<span>${u.name} (${u.phone})</span><button onclick="deleteUser('${u.phone}')">Supprimer</button>`;
        list.appendChild(item);
    });
}

function showMessagePopup(title, message) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-message').textContent = message;
    document.getElementById('message-popup').style.display = 'block';
}

function closeMessagePopup() {
    document.getElementById('message-popup').style.display = 'none';
}

function generateCalendar() {
    const startDate = new Date(document.getElementById('calendar-start-date').value);
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';
    const months = [];
    for (let i = 0; i < 12; i++) {
        const month = new Date(startDate);
        month.setMonth(startDate.getMonth() + i);
        const isBullish = Math.random() > 0.5;
        const cell = document.createElement('div');
        cell.className = `calendar-cell ${isBullish ? 'bullish' : 'bearish'}`;
        cell.innerHTML = `
            <strong>${month.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}</strong>
            <br>${isBullish ? 'Haussier 🟢' : 'Baissier 🔴'}<br>
            <small>${isBullish ? 'Gain probable' : 'Risque de perte'}</small>
        `;
        grid.appendChild(cell);
        months.push({ date: month, bullish: isBullish });
    }
}

function updateBullishCalendar() {
    const days = parseInt(document.getElementById('days-input').value) || 90;
    const basePrice = parseFloat(document.getElementById('crypto-price').value) || 95000;
    const date1 = new Date(document.getElementById('date1').value);
    if (isNaN(date1.getTime()) || days < 90 || days > 120) return;
    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    const date2 = addDays(date1, days);
    const date3 = addDays(date2, days);
    const date4 = addDays(date3, days);
    const date5 = addDays(date4, days);
    const date6 = addDays(date5, days);
    document.getElementById('date2').valueAsDate = date2;
    document.getElementById('date3').valueAsDate = date3;
    document.getElementById('date4').valueAsDate = date4;
    document.getElementById('date5').valueAsDate = date5;
    document.getElementById('date6').valueAsDate = date6;
    const rate = 1.22;
    const price1 = basePrice * rate;
    const price2 = price1 * rate;
    const price3 = price2 * rate;
    document.getElementById('price1').textContent = price1.toFixed(2);
    document.getElementById('price2').textContent = price2.toFixed(2);
    document.getElementById('price3').textContent = price3.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    populateCryptoDropdown();
    const select = document.getElementById('crypto-select');
    select.addEventListener('change', () => fetchCryptoPrice(select.value, false));
    const selectFuture = document.getElementById('crypto-select-future');
    selectFuture.addEventListener('change', () => fetchCryptoPrice(selectFuture.value, true));
    document.getElementById('generate-grid-btn').addEventListener('click', generateGrid);
    const inputs = document.querySelectorAll('#repartition input');
    inputs.forEach(input => input.addEventListener('input', updateStakeAmounts));
    const inputsFuture = document.querySelectorAll('#repartition-future input');
    inputsFuture.forEach(input => input.addEventListener('input', updateStakeAmountsFuture));
    const today = new Date();
    document.getElementById('calendar-start-date').valueAsDate = today;
    document.getElementById('archive-date').valueAsDate = today;
    document.getElementById('archive-date-future').valueAsDate = today;
    document.getElementById('loan-archive-date').valueAsDate = today;
    generateCalendar();
    updateAllCalculations();
    document.getElementById('crypto-price').addEventListener('input', updateBullishCalendar);
    document.getElementById('days-input').addEventListener('input', updateBullishCalendar);
    document.getElementById('date1').addEventListener('change', updateBullishCalendar);
    const savedLang = localStorage.getItem('appLanguage') || 'fr';
    document.getElementById('language-select').value = savedLang;
    changeLanguage();
    document.getElementById('language-select').addEventListener('change', function () {
        localStorage.setItem('appLanguage', this.value);
        changeLanguage();
    });
});