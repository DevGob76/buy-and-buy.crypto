// Objet de traduction
const translations = {
    fr: {
        welcome: "Bienvenue sur BUY and BUY CRYPTO",
        appSubtitle: "Application de Répartition de Mise pour Crypto-monnaies",
        userAccess: "🔑 Accès Utilisateur",
        phoneNumber: "Numéro de Téléphone :",
        phoneNumberPlaceholder: "Votre numéro de téléphone",
        access: "Accéder",
        home: "🏠 Page d'Accueil",
        distribution: "📊 Répartition de Mise",
        distributionTitle: "Calculateur de Grille Crypto",
        calendar: "📅 Calendrier Crypto",
        loan: "💰 Prêt Trading Crypto",
        profit: "📈 Bilan Profit Trading Crypto",
        cryptoCurrency: "Crypto-monnaie :",
        initialPrice: "Prix Initial (USD) :",
        budget: "Budget (USD) :",
        stakeRate1: "Taux Mise 1 (%) :",
        stakeRate2: "Taux Mise 2 (%) :",
        stakeRate3: "Taux Mise 3 (%) :",
        stakeRate4: "Taux Mise 4 (%) :",
        gridInterval: "Intervalle de Grille (%) :",
        triggerDrop: "Déclenchement de Baisse (%) :",
        numBlocks: "Nombre de Blocs :",
        generateGrid: "Générer la Grille",
        archiveDate: "Date d'Archivage :",
        archiveDistribution: "Archiver Répartition",
        deleteArchive: "Supprimer Archive",
        calendarTitle: "📅 Calendrier Crypto",
        calendarSubtitle: "Calendrier Haussier et Baissier (12 Mois)",
        calendarStartDate: "Date de Début du Calendrier :",
        bullishCalendarTitle: "Calendrier 3 x 6 Mois Haussier",
        bullishCalendarDesc: "Périodes de 6 mois consécutifs avec tendance haussière prononcée",
        daysInput: "Veuillez insérer entre 90 jour et 120 :",
        cryptoPrice: "Mettez point Crypto :",
        ref: "REF",
        probableDate: "DATE PROBABLE",
        degressiveRate: "Tx Dégressif",
        bullishPoint: "Point Haussier Crypto",
        loanTitle: "💰 Prêt Trading Crypto",
        collateralBudget: "Budget de Garantie (USDT) :",
        recommendedLoanRatio: "Ratio Taux d'Emprunt Conseillé (%) :",
        recommendedLoanAmount: "Montant à Emprunter Conseillé (USDT) :",
        debtRatio: "Debt Ratio (%) :",
        dailyInterestRate: "Taux d'Intérêt du Prêt par Jour (%) :",
        loanDuration: "Durée du Prêt (Jours) :",
        totalInterest: "Total Intérêt à Payer (%) :",
        totalRepayment: "Total à Rembourser (USDT) :",
        archiveLoan: "Archiver Prêt Trading",
        selectArchive: "Sélectionner une Archive :",
        selectDate: "-- Sélectionner une date --",
        deleteLoanArchive: "Supprimer Archive",
        archiveData: "Données de l'archive sélectionnée",
        profitTitle: "📈 Bilan Profit Trading Crypto",
        totalProfit: "Total Profit (USDT) :",
        profitRate: "Taux Profit (%) :",
        initialCapital: "Capital Initial (USDT) :",
        deleteData: "Supprimer Données Saisies",
        profitTableRef: "N°",
        profitTableStartDate: "Date Début",
        profitTableEndDate: "Date Fin",
        profitTableStartBudget: "Budget Début (USDT)",
        profitTableEndBudget: "Budget Fin (USDT)",
        profitTableProfit: "Profit (USDT)",
        profitTableProfitRate: "Taux Profit (%)",
        addLine: "Ajouter une Ligne",
        adminCode: "Code Secret Administrateur",
        secretCode: "Code Secret :",
        enterSecretCode: "Entrez le code secret",
        adminAccess: "Accéder",
        adminSettings: "⚙️ Paramètres Administrateur",
        addUser: "Ajouter un Utilisateur",
        fullName: "Nom et Prénom :",
        userNamePlaceholder: "Nom de l'utilisateur",
        phone: "Numéro de Téléphone :",
        addUserBtn: "Ajouter Utilisateur",
        info: "Information",
        message: "Message",
        close: "Fermer"
    },
    en: {
        welcome: "Welcome to BUY and BUY CRYPTO",
        appSubtitle: "Stake Distribution Application for Cryptocurrencies",
        userAccess: "🔑 User Access",
        phoneNumber: "Phone Number:",
        phoneNumberPlaceholder: "Your phone number",
        access: "Access",
        home: "🏠 Home Page",
        distribution: "📊 Stake Distribution",
        distributionTitle: "Crypto Grid Calculator",
        calendar: "📅 Crypto Calendar",
        loan: "💰 Crypto Trading Loan",
        profit: "📈 Crypto Trading Profit Summary",
        cryptoCurrency: "Cryptocurrency:",
        initialPrice: "Initial Price (USD):",
        budget: "Budget (USD):",
        stakeRate1: "Stake Rate 1 (%):",
        stakeRate2: "Stake Rate 2 (%):",
        stakeRate3: "Stake Rate 3 (%):",
        stakeRate4: "Stake Rate 4 (%):",
        gridInterval: "Grid Interval (%):",
        triggerDrop: "Drop Trigger (%):",
        numBlocks: "Number of Blocks:",
        generateGrid: "Generate Grid",
        archiveDate: "Archive Date:",
        archiveDistribution: "Archive Distribution",
        deleteArchive: "Delete Archive",
        calendarTitle: "📅 Crypto Calendar",
        calendarSubtitle: "Bullish and Bearish Calendar (12 Months)",
        calendarStartDate: "Calendar Start Date:",
        bullishCalendarTitle: "3 x 6 Months Bullish Calendar",
        bullishCalendarDesc: "Periods of 6 consecutive months with a pronounced bullish trend",
        daysInput: "Please insert between 90 days and 120:",
        cryptoPrice: "Set Crypto Point:",
        ref: "REF",
        probableDate: "PROBABLE DATE",
        degressiveRate: "Degressive Rate",
        bullishPoint: "Bullish Crypto Point",
        loanTitle: "💰 Crypto Trading Loan",
        collateralBudget: "Collateral Budget (USDT):",
        recommendedLoanRatio: "Recommended Loan Ratio (%):",
        recommendedLoanAmount: "Recommended Loan Amount (USDT):",
        debtRatio: "Debt Ratio (%):",
        dailyInterestRate: "Daily Loan Interest Rate (%):",
        loanDuration: "Loan Duration (Days):",
        totalInterest: "Total Interest to Pay (%):",
        totalRepayment: "Total Repayment (USDT):",
        archiveLoan: "Archive Trading Loan",
        selectArchive: "Select an Archive:",
        selectDate: "-- Select a date --",
        deleteLoanArchive: "Delete Archive",
        archiveData: "Data of the selected archive",
        profitTitle: "📈 Crypto Trading Profit Summary",
        totalProfit: "Total Profit (USDT):",
        profitRate: "Profit Rate (%):",
        initialCapital: "Initial Capital (USDT):",
        deleteData: "Delete Entered Data",
        profitTableRef: "#",
        profitTableStartDate: "Start Date",
        profitTableEndDate: "End Date",
        profitTableStartBudget: "Start Budget (USDT)",
        profitTableEndBudget: "End Budget (USDT)",
        profitTableProfit: "Profit (USDT)",
        profitTableProfitRate: "Profit Rate (%)",
        addLine: "Add a Line",
        adminCode: "Admin Secret Code",
        secretCode: "Secret Code:",
        enterSecretCode: "Enter the secret code",
        adminAccess: "Access",
        adminSettings: "⚙️ Admin Settings",
        addUser: "Add a User",
        fullName: "Full Name:",
        userNamePlaceholder: "User's name",
        phone: "Phone Number:",
        addUserBtn: "Add User",
        info: "Information",
        message: "Message",
        close: "Close"
    },
    es: {
        welcome: "Bienvenido a BUY and BUY CRYPTO",
        appSubtitle: "Aplicación de Distribución de Apuestas para Criptomonedas",
        userAccess: "🔑 Acceso de Usuario",
        phoneNumber: "Número de Teléfono:",
        phoneNumberPlaceholder: "Su número de teléfono",
        access: "Acceder",
        home: "🏠 Página de Inicio",
        distribution: "📊 Distribución de Apuestas",
        distributionTitle: "Calculadora de Cuadrícula de Criptomonedas",
        calendar: "📅 Calendario Crypto",
        loan: "💰 Préstamo para Trading de Crypto",
        profit: "📈 Resumen de Ganancias de Trading de Crypto",
        cryptoCurrency: "Criptomoneda:",
        initialPrice: "Precio Inicial (USD):",
        budget: "Presupuesto (USD):",
        stakeRate1: "Tasa de Apuesta 1 (%):",
        stakeRate2: "Tasa de Apuesta 2 (%):",
        stakeRate3: "Tasa de Apuesta 3 (%):",
        stakeRate4: "Tasa de Apuesta 4 (%):",
        gridInterval: "Intervalo de Cuadrícula (%):",
        triggerDrop: "Disparo de Caída (%):",
        numBlocks: "Número de Bloques:",
        generateGrid: "Generar Cuadrícula",
        archiveDate: "Fecha de Archivo:",
        archiveDistribution: "Archivar Distribución",
        deleteArchive: "Eliminar Archivo",
        calendarTitle: "📅 Calendario Crypto",
        calendarSubtitle: "Calendario Alcista y Bajista (12 Meses)",
        calendarStartDate: "Fecha de Inicio del Calendario:",
        bullishCalendarTitle: "Calendario Alcista 3 x 6 Meses",
        bullishCalendarDesc: "Períodos de 6 meses consecutivos con una tendencia alcista pronunciada",
        daysInput: "Por favor inserte entre 90 días y 120:",
        cryptoPrice: "Establecer Punto Crypto:",
        ref: "REF",
        probableDate: "FECHA PROBABLE",
        degressiveRate: "Tasa Degresiva",
        bullishPoint: "Punto Alcista Crypto",
        loanTitle: "💰 Préstamo para Trading de Crypto",
        collateralBudget: "Presupuesto de Garantía (USDT):",
        recommendedLoanRatio: "Ratio de Préstamo Recomendado (%):",
        recommendedLoanAmount: "Monto de Préstamo Recomendado (USDT):",
        debtRatio: "Ratio de Deuda (%):",
        dailyInterestRate: "Tasa de Interés Diaria del Préstamo (%):",
        loanDuration: "Duración del Préstamo (Días):",
        totalInterest: "Total de Intereses a Pagar (%):",
        totalRepayment: "Total a Reembolsar (USDT):",
        archiveLoan: "Archivar Préstamo para Trading",
        selectArchive: "Seleccionar un Archivo:",
        selectDate: "-- Seleccionar una fecha --",
        deleteLoanArchive: "Eliminar Archivo",
        archiveData: "Datos del archivo seleccionado",
        profitTitle: "📈 Resumen de Ganancias de Trading de Crypto",
        totalProfit: "Ganancia Total (USDT):",
        profitRate: "Tasa de Ganancia (%):",
        initialCapital: "Capital Inicial (USDT):",
        deleteData: "Eliminar Datos Ingresados",
        profitTableRef: "N°",
        profitTableStartDate: "Fecha de Inicio",
        profitTableEndDate: "Fecha de Fin",
        profitTableStartBudget: "Presupuesto Inicial (USDT)",
        profitTableEndBudget: "Presupuesto Final (USDT)",
        profitTableProfit: "Ganancia (USDT)",
        profitTableProfitRate: "Tasa de Ganancia (%)",
        addLine: "Agregar una Línea",
        adminCode: "Código Secreto de Administrador",
        secretCode: "Código Secreto:",
        enterSecretCode: "Ingrese el código secreto",
        adminAccess: "Acceder",
        adminSettings: "⚙️ Configuraciones de Administrador",
        addUser: "Agregar un Usuario",
        fullName: "Nombre Completo:",
        userNamePlaceholder: "Nombre del usuario",
        phone: "Número de Teléfono:",
        addUserBtn: "Agregar Usuario",
        info: "Información",
        message: "Mensaje",
        close: "Cerrar"
    },
    de: {
        welcome: "Willkommen bei BUY and BUY CRYPTO",
        appSubtitle: "Einsatzverteilungsanwendung für Kryptowährungen",
        userAccess: "🔑 Benutzerzugriff",
        phoneNumber: "Telefonnummer:",
        phoneNumberPlaceholder: "Ihre Telefonnummer",
        access: "Zugang",
        home: "🏠 Startseite",
        distribution: "📊 Einsatzverteilung",
        distributionTitle: "Krypto-Gitter-Rechner",
        calendar: "📅 Krypto-Kalender",
        loan: "💰 Krypto-Handelsdarlehen",
        profit: "📈 Krypto-Handelsgewinnübersicht",
        cryptoCurrency: "Kryptowährung:",
        initialPrice: "Anfangspreis (USD):",
        budget: "Budget (USD):",
        stakeRate1: "Einsatzrate 1 (%):",
        stakeRate2: "Einsatzrate 2 (%):",
        stakeRate3: "Einsatzrate 3 (%):",
        stakeRate4: "Einsatzrate 4 (%):",
        gridInterval: "Gitterintervall (%):",
        triggerDrop: "Auslöser für Rückgang (%):",
        numBlocks: "Anzahl der Blöcke:",
        generateGrid: "Gitter generieren",
        archiveDate: "Archivierungsdatum:",
        archiveDistribution: "Verteilung archivieren",
        deleteArchive: "Archiv löschen",
        calendarTitle: "📅 Krypto-Kalender",
        calendarSubtitle: "Haussier- und Bärenkalender (12 Monate)",
        calendarStartDate: "Kalenderstartdatum:",
        bullishCalendarTitle: "3 x 6 Monate Haussier-Kalender",
        bullishCalendarDesc: "Perioden von 6 aufeinanderfolgenden Monaten mit ausgeprägtem Aufwärtstrend",
        daysInput: "Bitte zwischen 90 Tage und 120 eingeben:",
        cryptoPrice: "Krypto-Punkt setzen:",
        ref: "REF",
        probableDate: "WAHRSCHEINLICHES DATUM",
        degressiveRate: "Degressive Rate",
        bullishPoint: "Haussier Krypto-Punkt",
        loanTitle: "💰 Krypto-Handelsdarlehen",
        collateralBudget: "Sicherheitsbudget (USDT):",
        recommendedLoanRatio: "Empfohlenes Darlehensverhältnis (%):",
        recommendedLoanAmount: "Empfohlener Darlehensbetrag (USDT):",
        debtRatio: "Schuldenverhältnis (%):",
        dailyInterestRate: "Täglicher Darlehenszinssatz (%):",
        loanDuration: "Laufzeit des Darlehens (Tage):",
        totalInterest: "Gesamtzinsen zu zahlen (%):",
        totalRepayment: "Gesamtbetrag zur Rückzahlung (USDT):",
        archiveLoan: "Handelsdarlehen archivieren",
        selectArchive: "Ein Archiv auswählen:",
        selectDate: "-- Ein Datum auswählen --",
        deleteLoanArchive: "Archiv löschen",
        archiveData: "Daten des ausgewählten Archivs",
        profitTitle: "📈 Krypto-Handelsgewinnübersicht",
        totalProfit: "Gesamtgewinn (USDT):",
        profitRate: "Gewinnrate (%):",
        initialCapital: "Anfangskapital (USDT):",
        deleteData: "Eingegebene Daten löschen",
        profitTableRef: "Nr.",
        profitTableStartDate: "Startdatum",
        profitTableEndDate: "Enddatum",
        profitTableStartBudget: "Startbudget (USDT)",
        profitTableEndBudget: "Endbudget (USDT)",
        profitTableProfit: "Gewinn (USDT)",
        profitTableProfitRate: "Gewinnrate (%)",
        addLine: "Eine Zeile hinzufügen",
        adminCode: "Administrator-Geheimcode",
        secretCode: "Geheimcode:",
        enterSecretCode: "Geben Sie den Geheimcode ein",
        adminAccess: "Zugang",
        adminSettings: "⚙️ Administrator-Einstellungen",
        addUser: "Benutzer hinzufügen",
        fullName: "Vor- und Nachname:",
        userNamePlaceholder: "Name des Benutzers",
        phone: "Telefonnummer:",
        addUserBtn: "Benutzer hinzufügen",
        info: "Information",
        message: "Nachricht",
        close: "Schließen"
    }
};

// Variables globales
let users = JSON.parse(localStorage.getItem('cryptoUsers')) || [
    { name: "John Gobolo", phone: "2250586214172" }
];
let archives = JSON.parse(localStorage.getItem('cryptoArchives')) || [];
let loanArchives = JSON.parse(localStorage.getItem('loanArchives')) || [];
let profitData = JSON.parse(localStorage.getItem('profitData')) || [];
let isAuthenticated = false;
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

function populateCryptoDropdown() {
    const select = document.getElementById('crypto-select');
    CRYPTO_LIST.forEach(crypto => {
        const option = document.createElement('option');
        option.value = crypto.id;
        option.textContent = `${crypto.name} (${crypto.symbol})`;
        select.appendChild(option);
    });
}

async function fetchCryptoPrice(cryptoId) {
    const loader = document.getElementById('price-loader');
    const priceInput = document.getElementById('initial-price');
    try {
        loader.style.display = 'block';
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data[cryptoId] && data[cryptoId].usd) {
            priceInput.value = data[cryptoId].usd;
            priceInput.dispatchEvent(new Event('input'));
        }
    } catch (error) {
        console.error('Failed to fetch crypto price:', error);
    } finally {
        loader.style.display = 'none';
    }
}

function updateStakeAmounts() {
    const budget = parseFloat(document.getElementById('budget').value) || 0;
    for (let i = 1; i <= 4; i++) {
        const rate = parseFloat(document.getElementById(`rate-${i}`).value) || 0;
        const amount = budget * (rate / 100);
        const amountElem = document.getElementById(`stake-amount-${i}`);
        if (amountElem) {
            amountElem.textContent = `Mise: $${amount.toFixed(2)}`;
        }
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
        resultsContainer.innerHTML = `<p style="color: red; text-align: center;">Veuillez entrer des valeurs numériques valides et positives pour tous les champs.</p>`;
        return;
    }
    let currentTriggerPrice = initialPrice * (1 - triggerDrop);
    const blocks = [];
    const stakes = newStakesRates.map(rate => budget * rate);
    for (let i = 0; i < numBlocks; i++) {
        const block = {
            blockNumber: i + 1,
            subBlocks: []
        };
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
            currentTriggerPrice = lowerPrice * (1-triggerDrop);
        }
        blocks.push(block);
    }
    renderTable(blocks, resultsContainer);
}

function renderTable(blocks, container) {
    container.innerHTML = '';
    blocks.forEach(block => {
        const table = document.createElement('table');
        table.classList.add('results-table');
        const tableHead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headerCell = document.createElement('th');
        headerCell.colSpan = 4;
        headerCell.textContent = `Bloc ${block.blockNumber}`;
        headerCell.classList.add('block-header');
        headerRow.appendChild(headerCell);
        tableHead.appendChild(headerRow);
        table.appendChild(tableHead);
        const tableBody = document.createElement('tbody');
        block.subBlocks.forEach((subBlock, index) => {
            const row = document.createElement('tr');
            const triggerCell = document.createElement('td');
            triggerCell.innerHTML = `Déclenchement: <br><b>$${subBlock.triggerPrice.toFixed(4)}</b>`;
            row.appendChild(triggerCell);
            const lowerCell = document.createElement('td');
            lowerCell.innerHTML = `Achat (Limite Basse): <br><b>$${subBlock.lowerPrice.toFixed(4)}</b>`;
            row.appendChild(lowerCell);
            const upperCell = document.createElement('td');
            upperCell.innerHTML = `Vente (Limite Haute): <br><b>$${subBlock.upperPrice.toFixed(4)}</b>`;
            row.appendChild(upperCell);
            const stakeCell = document.createElement('td');
            stakeCell.innerHTML = `Mise: <br><b>$${subBlock.stake.toFixed(2)}</b>`;
            stakeCell.classList.add('currency');
            row.appendChild(stakeCell);
            tableBody.appendChild(row);
        });
        table.appendChild(tableBody);
        container.appendChild(table);
    });
}

function archiveRepartition() {
    const date = document.getElementById('archive-date').value;
    if (!date) {
        showMessagePopup('Erreur', 'Veuillez sélectionner une date d\'archivage.');
        return;
    }
    const archive = {
        date,
        content: document.getElementById('grid-results-container').innerHTML
    };
    archives.push(archive);
    localStorage.setItem('cryptoArchives', JSON.stringify(archives));
    showMessagePopup('Archive Réussie', 'La répartition a été archivée avec succès.');
}

function deleteArchive() {
    archives = [];
    localStorage.setItem('cryptoArchives', JSON.stringify(archives));
    showMessagePopup('Archives Supprimées', 'Toutes les archives ont été supprimées avec succès.');
}

function generateCalendar() {
    const startDateInput = document.getElementById('calendar-start-date').value;
    if (!startDateInput) {
        alert("Veuillez sélectionner une date de début.");
        return;
    }
    const startDate = new Date(startDateInput);
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';
    for (let month = 0; month < 12; month++) {
        const monthStart = new Date(startDate);
        monthStart.setMonth(startDate.getMonth() + month);
        const bullishStart = new Date(monthStart);
        const bullishEnd = new Date(bullishStart);
        bullishEnd.setDate(bullishStart.getDate() + 6);
        const bearishStart = new Date(bullishEnd);
        const bearishEnd = new Date(bullishStart);
        bearishEnd.setDate(bullishStart.getDate() + 13);
        const monthDiv = document.createElement('div');
        monthDiv.className = 'calendar-month';
        const monthTitle = document.createElement('h3');
        monthTitle.textContent = `Mois ${month + 1}`;
        monthDiv.appendChild(monthTitle);
        const bullishDiv = document.createElement('div');
        bullishDiv.className = 'calendar-cell bullish';
        bullishDiv.innerHTML = `
            <div>Date Haussière Début: ${bullishStart.toLocaleDateString()}</div>
            <div>Date Haussière Fin: ${bullishEnd.toLocaleDateString()}</div>
        `;
        monthDiv.appendChild(bullishDiv);
        const bearishDiv = document.createElement('div');
        bearishDiv.className = 'calendar-cell bearish';
        bearishDiv.innerHTML = `
            <div>Date Baissière Début: ${bearishStart.toLocaleDateString()}</div>
            <div>Date Baissière Fin: ${bearishEnd.toLocaleDateString()}</div>
        `;
        monthDiv.appendChild(bearishDiv);
        calendarGrid.appendChild(monthDiv);
    }
}

function updateDates() {
    const daysInput = parseInt(document.getElementById('days-input').value) || 90;
    const cryptoPrice = parseFloat(document.getElementById('crypto-price').value) || 95000;
    const date1Input = document.getElementById('date1');
    const date1 = new Date(date1Input.value);
    if (!date1Input.value) {
        alert("Veuillez sélectionner une date de début.");
        return;
    }
    const date2Input = document.getElementById('date2');
    const date3Input = document.getElementById('date3');
    const date4Input = document.getElementById('date4');
    const date5Input = document.getElementById('date5');
    const date6Input = document.getElementById('date6');
    const date2 = new Date(date1);
    date2.setDate(date1.getDate() + daysInput);
    date2Input.valueAsDate = date2;
    const date3 = new Date(date2);
    date3.setDate(date2.getDate() + daysInput);
    date3Input.valueAsDate = date3;
    const date4 = new Date(date3);
    date4.setDate(date3.getDate() + daysInput);
    date4Input.valueAsDate = date4;
    const date5 = new Date(date4);
    date5.setDate(date4.getDate() + daysInput);
    date5Input.valueAsDate = date5;
    const date6 = new Date(date5);
    date6.setDate(date5.getDate() + daysInput);
    date6Input.valueAsDate = date6;
    updateCryptoPrices(cryptoPrice);
}

function updateCryptoPrices(initialPrice) {
    const rate = 0.22;
    const cryptoPriceColumn = document.getElementById('crypto-price-column');
    const cryptoPriceColumn2 = document.getElementById('crypto-price-column2');
    const price1 = initialPrice * (1 + rate);
    const price2 = price1 * (1 + rate);
    const price3 = price2 * (1 + rate);
    cryptoPriceColumn.innerHTML = `
        <div>${initialPrice.toFixed(2)}</div>
        <div>${price1.toFixed(2)}</div>
    `;
    cryptoPriceColumn2.innerHTML = `
        <div>${price2.toFixed(2)}</div>
        <div>${price3.toFixed(2)}</div>
    `;
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
    if (!date) {
        showMessagePopup('Erreur', 'Veuillez sélectionner une date d\'archivage.');
        return;
    }
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
    localStorage.setItem('loanArchives', JSON.stringify(loanArchives));
    populateLoanArchiveSelect();
    showMessagePopup('Archive Réussie', 'Le prêt trading a été archivé avec succès.');
}

function deleteLoanArchive() {
    loanArchives = [];
    localStorage.setItem('loanArchives', JSON.stringify(loanArchives));
    populateLoanArchiveSelect();
    showMessagePopup('Archives Supprimées', 'Toutes les archives de prêt ont été supprimées avec succès.');
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

function displaySelectedArchive() {
    const select = document.getElementById('loan-archive-select');
    const selectedIndex = select.value;
    if (selectedIndex === "") {
        document.getElementById('archive-display').classList.add('hidden');
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
    document.getElementById('archive-display').classList.remove('hidden');
}

function addNewRow() {
    const tableBody = document.getElementById('profit-table-body');
    const rowCount = tableBody.rows.length;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rowCount + 1}</td>
        <td><input type="date" onchange="updateProfitCalculations()"></td>
        <td><input type="date" onchange="updateProfitCalculations()"></td>
        <td><input type="number" value="300" onchange="updateProfitCalculations()"></td>
        <td><input type="number" value="450" onchange="updateProfitCalculations()"></td>
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

function clearAdjustableCells() {
    const rows = document.querySelectorAll('#profit-table-body tr');
    rows.forEach(row => {
        const inputs = row.querySelectorAll('input:not([readonly])');
        inputs.forEach(input => {
            input.value = '';
        });
    });
    document.getElementById('total-profit').value = '0.00';
    document.getElementById('profit-rate').value = '0.00';
}

function changeLanguage() {
    const language = document.getElementById('language-select').value;
    const translation = translations[language];

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            element.textContent = translation[key];
        }
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translation[key]) {
            element.placeholder = translation[key];
        }
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.classList.add('active');
    }

    // Find the button that corresponds to the pageId and activate it.
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        // Updated logic to be more robust
        if (btn.getAttribute('onclick').includes(`'${pageId}'`)) {
            btn.classList.add('active');
        }
    });
}

function checkAccess(pageId) {
    if (isAuthenticated) {
        showPage(pageId);
    } else {
        showMessagePopup('Accès Refusé', 'Veuillez entrer votre numéro de téléphone pour accéder à cette page.');
    }
}

function validateAccess() {
    const phone = document.getElementById('user-phone').value;
    if (!phone) {
        showMessagePopup('Erreur', 'Veuillez saisir votre numéro de téléphone.');
        return;
    }
    const userExists = users.some(user => user.phone === phone);
    if (!userExists) {
        showMessagePopup('Accès Refusé', 'Ce numéro de téléphone n\'est pas enregistré.');
        return;
    }
    isAuthenticated = true;
    showMessagePopup('Accès Autorisé', 'Vous avez accès aux autres pages du site.');
}

function showAdminSecretPopup() {
    document.getElementById('secret-code-popup').style.display = 'block';
}

function checkAdminAccess() {
    const secretCode = document.getElementById('admin-secret').value;
    if (secretCode === adminSecretCode) {
        document.getElementById('secret-code-popup').style.display = 'none';
        showPage('parametres');
    } else {
        showMessagePopup('Accès Refusé', 'Code secret incorrect.');
    }
}

function addUser() {
    const name = document.getElementById('admin-user-name').value;
    const phone = document.getElementById('admin-user-phone').value;
    if (!name || !phone) {
        showMessagePopup('Erreur', 'Veuillez remplir tous les champs obligatoires.');
        return;
    }
    const newUser = { name, phone };
    users.push(newUser);
    localStorage.setItem('cryptoUsers', JSON.stringify(users));
    showMessagePopup('Utilisateur Ajouté', 'L\'utilisateur a été ajouté avec succès !');
    updateAdminUserList();
}

function updateAdminUserList() {
    const userListElement = document.getElementById('admin-user-list');
    userListElement.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <span>${user.name} (${user.phone})</span>
            <button onclick="deleteUser('${user.phone}')">Supprimer</button>
        `;
        userListElement.appendChild(userItem);
    });
}

function deleteUser(phone) {
    users = users.filter(user => user.phone !== phone);
    localStorage.setItem('cryptoUsers', JSON.stringify(users));
    updateAdminUserList();
    showMessagePopup('Utilisateur Supprimé', 'L\'utilisateur a été supprimé avec succès.');
}

function showMessagePopup(title, message) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-message').textContent = message;
    document.getElementById('message-popup').style.display = 'block';
}

function closeMessagePopup() {
    document.getElementById('message-popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    populateCryptoDropdown();
    const cryptoSelect = document.getElementById('crypto-select');
    if (cryptoSelect) {
        cryptoSelect.addEventListener('change', (e) => {
            fetchCryptoPrice(e.target.value);
        });
        fetchCryptoPrice(cryptoSelect.value);
    }
    
    const repartitionInputs = document.querySelectorAll('#repartition input');
    repartitionInputs.forEach(input => {
        input.addEventListener('input', () => {
            updateStakeAmounts();
            if (document.getElementById('grid-results-container').innerHTML) {
                generateGrid();
            }
        });
    });

    const generateGridBtn = document.getElementById('generate-grid-btn');
    if(generateGridBtn) {
        generateGridBtn.addEventListener('click', generateGrid);
    }
    
    // Initialize calendar with today's date
    const today = new Date();
    const calendarStartDate = document.getElementById('calendar-start-date');
    if (calendarStartDate) {
        calendarStartDate.valueAsDate = today;
        generateCalendar();
    }
    const loanArchiveDate = document.getElementById('loan-archive-date');
    if (loanArchiveDate) {
        loanArchiveDate.valueAsDate = today;
    }

    updateStakeAmounts();
    updateAdminUserList();
    populateLoanArchiveSelect();
    updateAllCalculations();
});