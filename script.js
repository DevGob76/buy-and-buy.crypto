// Objet de traduction
const translations = {
    fr: {
        welcome: "Bienvenue sur BUY and BUY CRYPTO",
        appDescription: "Application de Répartition de Mise pour Crypto-monnaies",
        userAccess: "🔑 Accès Utilisateur",
        phoneNumber: "Numéro de Téléphone :",
        yourPhoneNumber: "Votre numéro de téléphone",
        access: "Accéder",
        home: "🏠 Page d'Accueil",
        distribution: "📊 Répartition de Mise",
        calendar: "📅 Calendrier Crypto",
        loan: "💰 Prêt Trading Crypto",
        profit: "📈 Bilan Profit Trading Crypto",
        cryptoCalculator: "Calculateur de Grille Crypto",
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
        selectArchive: "Sélectionner une Archive :",
        downloadPDF: "Télécharger en PDF",
        deleteArchive: "Supprimer Archive",
        archiveData: "Données de l'archive sélectionnée",
        selectDate: "-- Sélectionner une date --",
        calendarTitle: "📅 Calendrier Crypto",
        bullishBearishCalendar: "Calendrier Haussier et Baissier (12 Mois)",
        calendarStartDate: "Date de Début du Calendrier :",
        bullishCalendar3x6: "Calendrier 3 x 6 Mois Haussier",
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
        deleteLoanArchive: "Supprimer Archive",
        profitTitle: "📈 Bilan Profit Trading Crypto",
        totalProfit: "Total Profit (USDT) :",
        profitRate: "Taux Profit (%) :",
        initialCapital: "Capital Initial (USDT) :",
        deleteData: "Supprimer Données Saisies",
        profitTable: {
            no: "N°",
            startDate: "Date Début",
            endDate: "Date Fin",
            startBudget: "Budget Début (USDT)",
            endBudget: "Budget Fin (USDT)",
            profit: "Profit (USDT)",
            profitRate: "Taux Profit (%)",
        },
        addLine: "Ajouter une Ligne",
        adminCode: "Code Secret Administrateur",
        secretCode: "Code Secret :",
        enterSecretCode: "Entrez le code secret",
        adminAccess: "Accéder",
        adminSettings: "⚙️ Paramètres Administrateur",
        addUser: "Ajouter un Utilisateur",
        fullName: "Nom et Prénom :",
        userName: "Nom de l'utilisateur",
        phone: "Numéro de Téléphone :",
        addUserBtn: "Ajouter Utilisateur",
        info: "Information",
        message: "Message",
        close: "Fermer"
    },
    en: {
        welcome: "Welcome to BUY and BUY CRYPTO",
        appDescription: "Stake Distribution Application for Cryptocurrencies",
        userAccess: "🔑 User Access",
        phoneNumber: "Phone Number:",
        yourPhoneNumber: "Your phone number",
        access: "Access",
        home: "🏠 Home Page",
        distribution: "📊 Stake Distribution",
        calendar: "📅 Crypto Calendar",
        loan: "💰 Crypto Trading Loan",
        profit: "📈 Crypto Trading Profit Summary",
        cryptoCalculator: "Crypto Grid Calculator",
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
        selectArchive: "Select an Archive:",
        downloadPDF: "Download as PDF",
        deleteArchive: "Delete Archive",
        archiveData: "Data of the selected archive",
        selectDate: "-- Select a date --",
        calendarTitle: "📅 Crypto Calendar",
        bullishBearishCalendar: "Bullish and Bearish Calendar (12 Months)",
        calendarStartDate: "Calendar Start Date:",
        bullishCalendar3x6: "3 x 6 Months Bullish Calendar",
        bullishCalendarDesc: "Periods of 6 consecutive months with a strong bullish trend",
        daysInput: "Please insert between 90 and 120 days:",
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
        deleteLoanArchive: "Delete Archive",
        profitTitle: "📈 Crypto Trading Profit Summary",
        totalProfit: "Total Profit (USDT):",
        profitRate: "Profit Rate (%):",
        initialCapital: "Initial Capital (USDT):",
        deleteData: "Delete Entered Data",
        profitTable: {
            no: "No.",
            startDate: "Start Date",
            endDate: "End Date",
            startBudget: "Start Budget (USDT)",
            endBudget: "End Budget (USDT)",
            profit: "Profit (USDT)",
            profitRate: "Profit Rate (%)",
        },
        addLine: "Add a Line",
        adminCode: "Admin Secret Code",
        secretCode: "Secret Code:",
        enterSecretCode: "Enter the secret code",
        adminAccess: "Access",
        adminSettings: "⚙️ Admin Settings",
        addUser: "Add a User",
        fullName: "Full Name:",
        userName: "User's name",
        phone: "Phone Number:",
        addUserBtn: "Add User",
        info: "Information",
        message: "Message",
        close: "Close"
    },
    es: {
        welcome: "Bienvenido a BUY and BUY CRYPTO",
        appDescription: "Aplicación de Distribución de Apuestas para Criptomonedas",
        userAccess: "🔑 Acceso de Usuario",
        phoneNumber: "Número de Teléfono:",
        yourPhoneNumber: "Su número de teléfono",
        access: "Acceder",
        home: "🏠 Página de Inicio",
        distribution: "📊 Distribución de Apuestas",
        calendar: "📅 Calendario Crypto",
        loan: "💰 Préstamo para Trading de Crypto",
        profit: "📈 Resumen de Ganancias de Trading de Crypto",
        cryptoCalculator: "Calculadora de Cuadrícula Cripto",
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
        selectArchive: "Seleccionar un Archivo:",
        downloadPDF: "Descargar como PDF",
        deleteArchive: "Eliminar Archivo",
        archiveData: "Datos del archivo seleccionado",
        selectDate: "-- Seleccionar una fecha --",
        calendarTitle: "📅 Calendario Crypto",
        bullishBearishCalendar: "Calendario Alcista y Bajista (12 Meses)",
        calendarStartDate: "Fecha de Inicio del Calendario:",
        bullishCalendar3x6: "Calendario Alcista 3 x 6 Meses",
        bullishCalendarDesc: "Períodos de 6 meses consecutivos con una fuerte tendencia alcista",
        daysInput: "Por favor inserte entre 90 y 120 días:",
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
        deleteLoanArchive: "Eliminar Archivo",
        profitTitle: "📈 Resumen de Ganancias de Trading de Crypto",
        totalProfit: "Ganancia Total (USDT):",
        profitRate: "Tasa de Ganancia (%):",
        initialCapital: "Capital Inicial (USDT):",
        deleteData: "Eliminar Datos Ingresados",
        profitTable: {
            no: "Nº",
            startDate: "Fecha de Inicio",
            endDate: "Fecha de Fin",
            startBudget: "Presupuesto Inicial (USDT)",
            endBudget: "Presupuesto Final (USDT)",
            profit: "Ganancia (USDT)",
            profitRate: "Tasa de Ganancia (%)",
        },
        addLine: "Agregar una Línea",
        adminCode: "Código Secreto de Administrador",
        secretCode: "Código Secreto:",
        enterSecretCode: "Ingrese el código secreto",
        adminAccess: "Acceder",
        adminSettings: "⚙️ Configuraciones de Administrador",
        addUser: "Agregar un Usuario",
        fullName: "Nombre Completo:",
        userName: "Nombre del usuario",
        phone: "Número de Teléfono:",
        addUserBtn: "Agregar Usuario",
        info: "Información",
        message: "Mensaje",
        close: "Cerrar"
    },
    de: {
        welcome: "Willkommen bei BUY and BUY CRYPTO",
        appDescription: "Einsatzverteilungsanwendung für Kryptowährungen",
        userAccess: "🔑 Benutzerzugriff",
        phoneNumber: "Telefonnummer:",
        yourPhoneNumber: "Ihre Telefonnummer",
        access: "Zugang",
        home: "🏠 Startseite",
        distribution: "📊 Einsatzverteilung",
        calendar: "📅 Krypto-Kalender",
        loan: "💰 Krypto-Handelsdarlehen",
        profit: "📈 Krypto-Handelsgewinnübersicht",
        cryptoCalculator: "Krypto-Gitter-Rechner",
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
        selectArchive: "Ein Archiv auswählen:",
        downloadPDF: "Als PDF herunterladen",
        deleteArchive: "Archiv löschen",
        archiveData: "Daten des ausgewählten Archivs",
        selectDate: "-- Ein Datum auswählen --",
        calendarTitle: "📅 Krypto-Kalender",
        bullishBearishCalendar: "Haussier- und Bärenkalender (12 Monate)",
        calendarStartDate: "Kalenderstartdatum:",
        bullishCalendar3x6: "3 x 6 Monate Haussier-Kalender",
        bullishCalendarDesc: "Perioden von 6 aufeinanderfolgenden Monaten mit starkem Aufwärtstrend",
        daysInput: "Bitte zwischen 90 und 120 Tagen eingeben:",
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
        deleteLoanArchive: "Archiv löschen",
        profitTitle: "📈 Krypto-Handelsgewinnübersicht",
        totalProfit: "Gesamtgewinn (USDT):",
        profitRate: "Gewinnrate (%):",
        initialCapital: "Anfangskapital (USDT):",
        deleteData: "Eingegebene Daten löschen",
        profitTable: {
            no: "Nr.",
            startDate: "Startdatum",
            endDate: "Enddatum",
            startBudget: "Startbudget (USDT)",
            endBudget: "Endbudget (USDT)",
            profit: "Gewinn (USDT)",
            profitRate: "Gewinnrate (%)",
        },
        addLine: "Eine Zeile hinzufügen",
        adminCode: "Administrator-Geheimcode",
        secretCode: "Geheimcode:",
        enterSecretCode: "Geben Sie den Geheimcode ein",
        adminAccess: "Zugang",
        adminSettings: "⚙️ Administrator-Einstellungen",
        addUser: "Benutzer hinzufügen",
        fullName: "Vor- und Nachname:",
        userName: "Benutzername",
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
let profitData = JSON.parse(localStorage.getItem('profitData')) || { initialCapital: 300, rows: [] };
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

// Remplit la liste déroulante des cryptos
function populateCryptoDropdown() {
    const select = document.getElementById('crypto-select');
    CRYPTO_LIST.forEach(crypto => {
        const option = document.createElement('option');
        option.value = crypto.id;
        option.textContent = `${crypto.name} (${crypto.symbol})`;
        select.appendChild(option);
    });
}

// Récupère le prix de la crypto sélectionnée
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

// Met à jour les montants des mises
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

// Génère la grille de répartition
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

// Affiche la grille sous forme de tableau
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

// Remplit la liste déroulante des archives
function populateArchiveSelect() {
    const select = document.getElementById('archive-select');
    select.innerHTML = `<option value="">${translations[document.getElementById('language-select').value]?.selectDate || '-- Sélectionner une date --'}</option>`;
    archives.forEach((archive, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = archive.date;
        select.appendChild(option);
    });
}

// Affiche le contenu de l'archive sélectionnée (optimisée)
function displaySelectedArchive() {
    const select = document.getElementById('archive-select');
    const selectedIndex = select.value;
    const downloadPdfBtn = document.getElementById('download-pdf-btn');

    if (selectedIndex === "") {
        document.getElementById('archive-display').classList.add('hidden');
        downloadPdfBtn.style.display = 'none';
        return;
    }

    const archive = archives[selectedIndex];
    document.getElementById('archive-content').innerHTML = archive.content;
    document.getElementById('archive-display').classList.remove('hidden');
    downloadPdfBtn.style.display = 'inline-block';
}

// Archive la répartition actuelle
function archiveRepartition() {
    const date = document.getElementById('archive-date').value;
    if (!date) {
        showMessagePopup('Erreur', 'Veuillez sélectionner une date d\'archivage.');
        return;
    }
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
    localStorage.setItem('cryptoArchives', JSON.stringify(archives));
    populateArchiveSelect();
    showMessagePopup('Archive Réussie', 'La répartition a été archivée avec succès.');
}

// Supprime une archive ou toutes les archives
function deleteArchive() {
    const select = document.getElementById('archive-select');
    const selectedIndex = select.value;
    if (selectedIndex !== "") {
        archives.splice(selectedIndex, 1);
        localStorage.setItem('cryptoArchives', JSON.stringify(archives));
        populateArchiveSelect();
        showMessagePopup('Archive Supprimée', 'L\'archive sélectionnée a été supprimée.');
    } else {
        archives = [];
        localStorage.setItem('cryptoArchives', JSON.stringify(archives));
        populateArchiveSelect();
        showMessagePopup('Archives Supprimées', 'Toutes les archives ont été supprimées.');
    }
    document.getElementById('archive-display').classList.add('hidden');
    document.getElementById('download-pdf-btn').style.display = 'none';
}

// NOUVELLE : Fonction pour télécharger l'archive en PDF
async function downloadArchiveAsPDF() {
    const { jsPDF } = window.jspdf;
    const archiveContent = document.getElementById('archive-content');

    if (!archiveContent || archiveContent.innerHTML.trim() === '') {
        showMessagePopup('Erreur', 'Aucune archive sélectionnée ou l\'archive est vide.');
        return;
    }

    // Utilisation de html2canvas pour capturer le contenu
    const canvas = await html2canvas(archiveContent, {
        scale: 2,
        logging: false,
        useCORS: true,
    });

    // Création du PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
        position = -heightLeft;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }

    pdf.save(`repartition_archive_${new Date().toISOString().slice(0, 10)}.pdf`);
}

// Génère le calendrier haussiers/baissiers
function generateCalendar() {
    const startDateInput = document.getElementById('calendar-start-date').value;
    if (!startDateInput) {
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
        bearishStart.setDate(bearishStart.getDate() + 1); // Correction: starts day after bullish ends
        const bearishEnd = new Date(bearishStart);
        bearishEnd.setDate(bearishStart.getDate() + 6); // Correction: also lasts 7 days
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

// Met à jour les dates du calendrier 3x6 mois
function updateDates() {
    const daysInput = parseInt(document.getElementById('days-input').value) || 90;
    const cryptoPrice = parseFloat(document.getElementById('crypto-price').value) || 95000;
    const date1Input = document.getElementById('date1');
    if (!date1Input.value) {
        showMessagePopup("Erreur", "Veuillez sélectionner une date de début.");
        return;
    }
    const date1 = new Date(date1Input.value);
    
    const dateInputs = ['date2', 'date3', 'date4', 'date5', 'date6'];
    let currentDate = date1;

    dateInputs.forEach(id => {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + daysInput);
        document.getElementById(id).valueAsDate = nextDate;
        currentDate = nextDate;
    });

    updateCryptoPrices(cryptoPrice);
}

// Met à jour les prix crypto du calendrier 3x6 mois
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
        <div>${price2.toFixed(2)}</div>
    `;
    cryptoPriceColumn.rowSpan = 3;

    cryptoPriceColumn2.innerHTML = `
        <div>${price2.toFixed(2)}</div>
        <div>${price3.toFixed(2)}</div>
        <div>${(price3 * (1+rate)).toFixed(2)}</div>
    `;
    cryptoPriceColumn2.rowSpan = 3;
}

// Met à jour le montant du prêt
function updateLoanAmount() {
    const collateralBudget = parseFloat(document.getElementById('collateral-budget').value) || 0;
    const loanRatio = parseFloat(document.getElementById('loan-ratio').value) || 0;
    const loanAmount = collateralBudget * (loanRatio / 100);
    document.getElementById('loan-amount').value = loanAmount.toFixed(2);
    updateDebtRatio();
}

// Met à jour le ratio de dette
function updateDebtRatio() {
    const collateralBudget = parseFloat(document.getElementById('collateral-budget').value) || 0;
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const debtRatio = collateralBudget > 0 ? (loanAmount / (collateralBudget)) * 100 : 0;
    document.getElementById('debt-ratio').value = debtRatio.toFixed(2);
}

// Met à jour le total des intérêts
function updateTotalInterest() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) || 0;
    const loanDuration = parseFloat(document.getElementById('loan-duration').value) || 0;
    const totalInterest = loanAmount * (interestRate / 100) * loanDuration;
    document.getElementById('total-interest').value = totalInterest.toFixed(4);
    updateTotalRepayment();
}

// Met à jour le total à rembourser
function updateTotalRepayment() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value) || 0;
    const totalInterest = parseFloat(document.getElementById('total-interest').value) || 0;
    const totalRepayment = loanAmount + totalInterest;
    document.getElementById('total-repayment').value = totalRepayment.toFixed(4);
}

// Met à jour tous les calculs du prêt
function updateAllCalculations() {
    updateLoanAmount();
    updateTotalInterest();
}

// Archive un prêt trading
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

// Supprime les archives de prêt
function deleteLoanArchive() {
    loanArchives = [];
    localStorage.setItem('loanArchives', JSON.stringify(loanArchives));
    populateLoanArchiveSelect();
    showMessagePopup('Archives Supprimées', 'Toutes les archives de prêt ont été supprimées avec succès.');
}

// Remplit la liste déroulante des archives de prêt
function populateLoanArchiveSelect() {
    const select = document.getElementById('loan-archive-select');
    select.innerHTML = `<option value="">${translations[document.getElementById('language-select').value]?.selectDate || '-- Sélectionner une date --'}</option>`;
    loanArchives.forEach((archive, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = archive.date;
        select.appendChild(option);
    });
}

// Affiche l'archive de prêt sélectionnée
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

// Ajoute une nouvelle ligne au bilan profit
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

// Met à jour les calculs de profit
function updateProfitCalculations() {
    let totalProfit = 0;
    const initialCapital = parseFloat(document.getElementById('initial-capital').value) || 300;
    const rows = document.querySelectorAll('#profit-table-body tr');
    rows.forEach(row => {
        const startBudgetInput = row.cells[3].querySelector('input');
        const endBudgetInput = row.cells[4].querySelector('input');
        const startBudget = parseFloat(startBudgetInput.value) || 0;
        const endBudget = parseFloat(endBudgetInput.value) || 0;
        const profit = endBudget - startBudget;
        const profitRate = startBudget !== 0 ? (profit / startBudget) * 100 : 0;
        row.cells[5].querySelector('input').value = profit.toFixed(2);
        row.cells[6].querySelector('input').value = profitRate.toFixed(2);
        totalProfit += profit;
    });
    document.getElementById('total-profit').value = totalProfit.toFixed(2);
    updateProfitRate(initialCapital);
}

// Met à jour le taux de profit
function updateProfitRate() {
    const initialCapital = parseFloat(document.getElementById('initial-capital').value) || 300;
    const totalProfit = parseFloat(document.getElementById('total-profit').value) || 0;
    const profitRate = initialCapital !== 0 ? (totalProfit / initialCapital) * 100 : 0;
    document.getElementById('profit-rate').value = profitRate.toFixed(2);
}

// Sauvegarde les données du bilan profit
function saveProfitData() {
    const rows = [];
    document.querySelectorAll('#profit-table-body tr').forEach(row => {
        const rowData = {
            startDate: row.cells[1].querySelector('input').value,
            endDate: row.cells[2].querySelector('input').value,
            startBudget: row.cells[3].querySelector('input').value,
            endBudget: row.cells[4].querySelector('input').value,
        };
        rows.push(rowData);
    });
    profitData.rows = rows;
    profitData.initialCapital = document.getElementById('initial-capital').value;
    localStorage.setItem('profitData', JSON.stringify(profitData));
}

// Charge les données du bilan profit
function loadProfitData() {
    if (profitData && profitData.rows.length > 0) {
        const tableBody = document.getElementById('profit-table-body');
        tableBody.innerHTML = '';
        profitData.rows.forEach((rowData, index) => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td><input type="date" value="${rowData.startDate || ''}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="date" value="${rowData.endDate || ''}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="number" value="${rowData.startBudget || 0}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="number" value="${rowData.endBudget || 0}" onchange="saveProfitData(); updateProfitCalculations()"></td>
                <td><input type="number" readonly></td>
                <td><input type="number" readonly></td>
            `;
            tableBody.appendChild(newRow);
        });
        document.getElementById('initial-capital').value = profitData.initialCapital || 300;
        updateProfitCalculations();
    }
}

// Efface les données saisies
function clearAdjustableCells() {
    const tableBody = document.getElementById('profit-table-body');
    tableBody.innerHTML = '';
    document.getElementById('initial-capital').value = 300;
    document.getElementById('total-profit').value = '';
    document.getElementById('profit-rate').value = '';
    profitData = { initialCapital: 300, rows: [] };
    localStorage.setItem('profitData', JSON.stringify(profitData));
    showMessagePopup('Données Effacées', 'Toutes les données saisies ont été supprimées.');
}

// Change la langue de l'interface
function changeLanguage() {
    const lang = document.getElementById('language-select').value;
    const t = translations[lang];

    const elements = {
        // Header
        '.header h1': 'welcome',
        '.header p': 'appDescription',
        '.nav-buttons .nav-btn:nth-child(1)': 'home',
        '.nav-buttons .nav-btn:nth-child(2)': 'distribution',
        '.nav-buttons .nav-btn:nth-child(3)': 'calendar',
        '.nav-buttons .nav-btn:nth-child(4)': 'loan',
        '.nav-buttons .nav-btn:nth-child(5)': 'profit',
        // Accueil
        '#accueil h2': 'welcome',
        '#accueil .auth-form h3': 'userAccess',
        '#accueil .form-group label': 'phoneNumber',
        '#accueil .btn': 'access',
        // Répartition
        '#repartition h2': 'cryptoCalculator',
        '#repartition .input-group:nth-of-type(1) label': 'cryptoCurrency',
        '#repartition .input-group:nth-of-type(2) label': 'initialPrice',
        '#repartition .budget-section .input-group:nth-of-type(1) label': 'budget',
        '#repartition .rates-container .input-group:nth-of-type(1) label': 'stakeRate1',
        '#repartition .rates-container .input-group:nth-of-type(2) label': 'stakeRate2',
        '#repartition .rates-container .input-group:nth-of-type(3) label': 'stakeRate3',
        '#repartition .rates-container .input-group:nth-of-type(4) label': 'stakeRate4',
        '#repartition .input-group:nth-of-type(4) label': 'gridInterval',
        '#repartition .input-group:nth-of-type(5) label': 'triggerDrop',
        '#repartition .input-group:nth-of-type(6) label': 'numBlocks',
        '#generate-grid-btn': 'generateGrid',
        '#repartition .archive-actions .input-group:nth-of-type(1) label': 'archiveDate',
        '#repartition .archive-actions button:nth-of-type(1)': 'archiveDistribution',
        '#repartition .archive-actions .input-group:nth-of-type(2) label': 'selectArchive',
        '#download-pdf-btn': 'downloadPDF',
        '#repartition .archive-actions button:nth-of-type(3)': 'deleteArchive',
        '#archive-display h3': 'archiveData',
        // Calendrier
        '#calendrier h2': 'calendarTitle',
        '#calendrier .calendar-section:nth-of-type(1) .calendar-title': 'bullishBearishCalendar',
        '#calendrier .calendar-section:nth-of-type(1) .input-group label': 'calendarStartDate',
        '#calendrier .calendar-section:nth-of-type(2) .calendar-title': 'bullishCalendar3x6',
        '#calendrier .calendar-section:nth-of-type(2) p': 'bullishCalendarDesc',
        '#calendrier .calendar-section:nth-of-type(2) .input-group:nth-of-type(1) label': 'daysInput',
        '#calendrier .calendar-section:nth-of-type(2) .input-group:nth-of-type(2) label': 'cryptoPrice',
        '#bullish-calendar th:nth-child(1)': 'ref',
        '#bullish-calendar th:nth-child(2)': 'probableDate',
        '#bullish-calendar th:nth-child(3)': 'degressiveRate',
        '#bullish-calendar th:nth-child(4)': 'bullishPoint',
        // Prêt
        '#pret-trading h2': 'loanTitle',
        '#pret-trading .trading-grid .trading-cell:nth-child(1) label': 'collateralBudget',
        '#pret-trading .trading-grid .trading-cell:nth-child(2) label': 'recommendedLoanRatio',
        '#pret-trading .trading-grid .trading-cell:nth-child(3) label': 'recommendedLoanAmount',
        '#pret-trading .trading-grid .trading-cell:nth-child(4) label': 'debtRatio',
        '#pret-trading .trading-grid .trading-cell:nth-child(5) label': 'dailyInterestRate',
        '#pret-trading .trading-grid .trading-cell:nth-child(6) label': 'loanDuration',
        '#pret-trading .trading-grid .trading-cell:nth-child(7) label': 'totalInterest',
        '#pret-trading .trading-grid .trading-cell:nth-child(8) label': 'totalRepayment',
        '#pret-trading .archive-actions .input-group:nth-of-type(1) label': 'archiveDate',
        '#pret-trading .archive-actions button:nth-of-type(1)': 'archiveLoan',
        '#pret-trading .archive-actions .input-group:nth-of-type(2) label': 'selectArchive',
        '#pret-trading .archive-actions button:nth-of-type(2)': 'deleteLoanArchive',
        // Bilan
        '#bilan-profit h2': 'profitTitle',
        '#bilan-profit .trading-grid .trading-cell:nth-child(1) label': 'totalProfit',
        '#bilan-profit .trading-grid .trading-cell:nth-child(2) label': 'profitRate',
        '#bilan-profit .trading-grid .trading-cell:nth-child(3) label': 'initialCapital',
        '#bilan-profit .trading-grid .trading-cell:nth-child(3) button': 'deleteData',
        '#bilan-profit .profit-table th:nth-child(1)': 'profitTable.no',
        '#bilan-profit .profit-table th:nth-child(2)': 'profitTable.startDate',
        '#bilan-profit .profit-table th:nth-child(3)': 'profitTable.endDate',
        '#bilan-profit .profit-table th:nth-child(4)': 'profitTable.startBudget',
        '#bilan-profit .profit-table th:nth-child(5)': 'profitTable.endBudget',
        '#bilan-profit .profit-table th:nth-child(6)': 'profitTable.profit',
        '#bilan-profit .profit-table th:nth-child(7)': 'profitTable.profitRate',
        '#bilan-profit > button.btn': 'addLine',
        // Admin
        '#secret-code-popup h3': 'adminCode',
        '#secret-code-popup .form-group label': 'secretCode',
        '#secret-code-popup button': 'adminAccess',
        '#parametres h2': 'adminSettings',
        '#parametres .auth-form h3': 'addUser',
        '#parametres .form-group:nth-of-type(1) label': 'fullName',
        '#parametres .form-group:nth-of-type(2) label': 'phone',
        '#parametres .auth-form button': 'addUserBtn',
        // Popups
        '#message-popup #popup-title': 'info',
        '#message-popup button': 'close',
    };

    for (const selector in elements) {
        const element = document.querySelector(selector);
        if (element) {
            const key = elements[selector];
            // Handle nested keys like 'profitTable.no'
            const text = key.split('.').reduce((obj, k) => obj && obj[k], t);
            if (text) {
                element.textContent = text;
            }
        }
    }
    
    // Placeholders
    document.querySelector('#user-phone').placeholder = t.yourPhoneNumber;
    document.querySelector('#admin-secret').placeholder = t.enterSecretCode;
    document.querySelector('#admin-user-name').placeholder = t.userName;
    document.querySelector('#admin-user-phone').placeholder = t.yourPhoneNumber;
    
    // Dropdowns
    document.querySelector('#archive-select option').textContent = t.selectDate;
    document.querySelector('#loan-archive-select option').textContent = t.selectDate;

    // The message itself is set dynamically
    // document.querySelector('#popup-message').textContent = t.message;
}


// Affiche une page
function showPage(pageId, event) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    const pageToShow = document.getElementById(pageId);
    if(pageToShow) pageToShow.classList.add('active');
    
    // The settings button does not have an `event`
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Vérifie l'accès à une page
function checkAccess(pageId, event) {
    if (isAuthenticated) {
        showPage(pageId, event);
    } else {
        showMessagePopup('Accès Refusé', 'Veuillez entrer votre numéro de téléphone pour accéder à cette page.');
    }
}

// Valide l'accès utilisateur
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

// Affiche le popup du code secret admin
function showAdminSecretPopup() {
    document.getElementById('secret-code-popup').style.display = 'block';
}

// Vérifie le code secret admin
function checkAdminAccess() {
    const secretCode = document.getElementById('admin-secret').value;
    if (secretCode === adminSecretCode) {
        document.getElementById('secret-code-popup').style.display = 'none';
        showPage('parametres', null); // no event to pass
    } else {
        showMessagePopup('Accès Refusé', 'Code secret incorrect.');
    }
}

// Ajoute un utilisateur
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

// Met à jour la liste des utilisateurs admin
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

// Supprime un utilisateur
function deleteUser(phone) {
    users = users.filter(user => user.phone !== phone);
    localStorage.setItem('cryptoUsers', JSON.stringify(users));
    updateAdminUserList();
    showMessagePopup('Utilisateur Supprimé', 'L\'utilisateur a été supprimé avec succès.');
}

// Affiche un message popup
function showMessagePopup(title, message) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-message').textContent = message;
    document.getElementById('message-popup').style.display = 'block';
}

// Ferme le message popup
function closeMessagePopup() {
    document.getElementById('message-popup').style.display = 'none';
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    populateCryptoDropdown();
    const cryptoSelect = document.getElementById('crypto-select');
    cryptoSelect.addEventListener('change', (e) => {
        fetchCryptoPrice(e.target.value);
    });
    const inputs = document.querySelectorAll('#repartition input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', updateStakeAmounts);
    });
    document.getElementById('generate-grid-btn').addEventListener('click', generateGrid);
    
    // Initialisation avec la date du jour
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('calendar-start-date').value = today;
    document.getElementById('archive-date').value = today;
    document.getElementById('loan-archive-date').value = today;

    generateCalendar();
    if(cryptoSelect.value) {
      fetchCryptoPrice(cryptoSelect.value);
    }
    updateStakeAmounts();
    updateAdminUserList();
    populateArchiveSelect();
    populateLoanArchiveSelect();
    loadProfitData();
    changeLanguage(); // Apply default language
    updateAllCalculations();
});

