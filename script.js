document.addEventListener('DOMContentLoaded', () => {
    const adminSecretCode = "1234"; // Code secret pour l'accès administrateur
    let currentUser = null; // Utilisateur actuellement connecté
    let translations = {}; // Objet pour les traductions

    // Liste des cryptos disponibles avec leurs symboles
    const CRYPTO_LIST = [
        { name: 'Bitcoin', symbol: 'BTC/USDT', id: 'bitcoin' },
        { name: 'Ethereum', symbol: 'ETH/USDT', id: 'ethereum' },
        { name: 'Binance Coin', symbol: 'BNB/USDT', id: 'binancecoin' },
        { name: 'Solana', symbol: 'SOL/USDT', id: 'solana' },
        { name: 'Ripple', symbol: 'XRP/USDT', id: 'ripple' },
        { name: 'Cardano', symbol: 'ADA/USDT', id: 'cardano' },
        { name: 'Dogecoin', symbol: 'DOGE/USDT', id: 'dogecoin' },
        { name: 'Polkadot', symbol: 'DOT/USDT', id: 'polkadot' },
        { name: 'Shiba Inu', symbol: 'SHIB/USDT', id: 'shiba-inu' },
        { name: 'Litecoin', symbol: 'LTC/USDT', id: 'litecoin' },
        { name: 'Chainlink', symbol: 'LINK/USDT', id: 'chainlink' },
        { name: 'Avalanche', symbol: 'AVAX/USDT', id: 'avalanche' },
        { name: 'Polygon', symbol: 'MATIC/USDT', id: 'polygon' },
        { name: 'Cosmos', symbol: 'ATOM/USDT', id: 'cosmos' },
        { name: 'Decentraland', symbol: 'MANA/USDT', id: 'decentraland' },
        { name: 'The Sandbox', symbol: 'SAND/USDT', id: 'the-sandbox' },
        { name: 'Axie Infinity', symbol: 'AXS/USDT', id: 'axie-infinity' },
        { name: 'Near Protocol', symbol: 'NEAR/USDT', id: 'near' },
        { name: 'TRON', symbol: 'TRX/USDT', id: 'tron' },
        { name: 'Fantom', symbol: 'FTM/USDT', id: 'fantom' },
        { name: 'Qtum', symbol: 'QTUM/USDT', id: 'qtum' },
        { name: 'Ethereum Classic', symbol: 'ETC/USDT', id: 'ethereum-classic' },
        { name: 'IOTA', symbol: 'MIOTA/USDT', id: 'iota' },
        { name: 'Zcash', symbol: 'ZEC/USDT', id: 'zcash' },
        { name: 'Dash', symbol: 'DASH/USDT', id: 'dash' },
        { name: 'Monero', symbol: 'XMR/USDT', id: 'monero' },
        { name: 'Neo', symbol: 'NEO/USDT', id: 'neo' },
        { name: 'EOS', symbol: 'EOS/USDT', id: 'eos' },
        { name: 'Tezos', symbol: 'XTZ/USDT', id: 'tezos' },
        { name: 'Vechain', symbol: 'VET/USDT', id: 'vechain' },
        { name: 'Elrond', symbol: 'EGLD/USDT', id: 'elrond' },
        { name: 'Filecoin', symbol: 'FIL/USDT', id: 'filecoin' },
        { name: 'Theta', symbol: 'THETA/USDT', id: 'theta-token' },
        { name: 'Kusama', symbol: 'KSM/USDT', id: 'kusama' },
        { name: 'Maker', symbol: 'MKR/USDT', id: 'maker' },
        { name: 'Aave', symbol: 'AAVE/USDT', id: 'aave' },
        { name: 'Compound', symbol: 'COMP/USDT', id: 'compound' },
        { name: 'SushiSwap', symbol: 'SUSHI/USDT', id: 'sushiswap' },
        { name: 'Uniswap', symbol: 'UNI/USDT', id: 'uniswap' },
        { name: 'Yearn.finance', symbol: 'YFI/USDT', id: 'yearn-finance' },
        { name: 'PancakeSwap', symbol: 'CAKE/USDT', id: 'pancakeswap' },
        { name: 'Synthetix', symbol: 'SNX/USDT', id: 'synthetix-network-token' },
        { name: 'Curve DAO Token', symbol: 'CRV/USDT', id: 'curve-dao-token' },
        { name: 'Dai', symbol: 'DAI/USDT', id: 'dai' },
        { name: 'TrueUSD', symbol: 'TUSD/USDT', id: 'true-usd' },
        { name: 'USD Coin', symbol: 'USDC/USDT', id: 'usd-coin' },
        { name: 'Tether', symbol: 'USDT/USDT', id: 'tether' },
        { name: 'Binance USD', symbol: 'BUSD/USDT', id: 'binance-usd' },
        { name: 'Wrapped Bitcoin', symbol: 'WBTC/USDT', id: 'wrapped-bitcoin' },
        { name: 'Wrapped Ethereum', symbol: 'WETH/USDT', id: 'weth' },
        { name: 'Fantom', symbol: 'FTM/USDT', id: 'fantom' },
        { name: 'Harmony', symbol: 'ONE/USDT', id: 'harmony' },
        { name: 'Zilliqa', symbol: 'ZIL/USDT', id: 'zilliqa' },
        { name: 'Enjin Coin', symbol: 'ENJ/USDT', id: 'enjincoin' },
        { name: 'Chiliz', symbol: 'CHZ/USDT', id: 'chiliz' },
        { name: 'Basic Attention Token', symbol: 'BAT/USDT', id: 'basic-attention-token' },
        { name: 'OMG Network', symbol: 'OMG/USDT', id: 'omg-network' },
        { name: 'Ren', symbol: 'REN/USDT', id: 'ren' },
        { name: '0x', symbol: 'ZRX/USDT', id: '0x' },
        { name: 'Kyber Network Crystal', symbol: 'KNC/USDT', id: 'kyber-network-crystal' },
        { name: 'Band Protocol', symbol: 'BAND/USDT', id: 'band-protocol' },
        { name: 'Balancer', symbol: 'BAL/USDT', id: 'balancer' },
        { name: 'Ocean Protocol', symbol: 'OCEAN/USDT', id: 'ocean-protocol' },
        { name: 'Fetch.ai', symbol: 'FET/USDT', id: 'fetch-ai' },
        { name: 'Reserve Rights', symbol: 'RSR/USDT', id: 'reserve-rights-token' },
        { name: 'Kava', symbol: 'KAVA/USDT', id: 'kava' },
        { name: 'Orchid', symbol: 'OXT/USDT', id: 'orchid-protocol' },
        { name: 'StormX', symbol: 'STMX/USDT', id: 'storm' },
        { name: 'Nervos Network', symbol: 'CKB/USDT', id: 'nervos-network' },
        { name: 'Arweave', symbol: 'AR/USDT', id: 'arweave' },
        { name: 'Livepeer', symbol: 'LPT/USDT', id: 'livepeer' },
        { name: 'Golem', symbol: 'GLM/USDT', id: 'golem' },
        { name: 'Perpetual Protocol', symbol: 'PERP/USDT', id: 'perpetual-protocol' },
        { name: 'Conflux', symbol: 'CFX/USDT', id: 'conflux-token' },
        { name: 'Mdex', symbol: 'MDX/USDT', id: 'mdex' },
        { name: 'Injective Protocol', symbol: 'INJ/USDT', id: 'injective-protocol' },
        { name: 'Render Token', symbol: 'RNDR/USDT', id: 'render-token' },
        { name: 'The Graph', symbol: 'GRT/USDT', id: 'the-graph' },
        { name: 'Origin Protocol', symbol: 'OGN/USDT', id: 'origin-protocol' },
        { name: 'WOO Network', symbol: 'WOO/USDT', id: 'woo-network' },
        { name: 'Immutable X', symbol: 'IMX/USDT', id: 'immutable-x' },
        { name: 'Magic', symbol: 'MAGIC/USDT', id: 'magic' },
        { name: 'Gala', symbol: 'GALA/USDT', id: 'gala' },
        { name: 'LooksRare', symbol: 'LOOKS/USDT', id: 'looksrare' },
        { name: 'STEPN', symbol: 'GMT/USDT', id: 'stepn' },
        { name: 'Aptos', symbol: 'APT/USDT', id: 'aptos' },
        { name: 'Sui', symbol: 'SUI/USDT', id: 'sui' },
        { name: 'Pepe', symbol: 'PEPE/USDT', id: 'pepe' },
        { name: 'FLOKI', symbol: 'FLOKI/USDT', id: 'floki' },
        { name: 'Milady Meme Coin', symbol: 'LADYS/USDT', id: 'milady-meme-coin' },
        { name: 'Bonk', symbol: 'BONK/USDT', id: 'bonk' },
        { name: 'Dogwifhat', symbol: 'WIF/USDT', id: 'dogwifhat' },
        { name: 'Book of Meme', symbol: 'BOME/USDT', id: 'book-of-meme' },
        { name: 'Cat in a dogs world', symbol: 'MEW/USDT', id: 'cat-in-a-dogs-world' },
        { name: 'Wen', symbol: 'WEN/USDT', id: 'wen' },
        { name: 'Jupiter', symbol: 'JUP/USDT', id: 'jupiter' },
        { name: 'Pyth Network', symbol: 'PYTH/USDT', id: 'pyth-network' },
        { name: 'Celestia', symbol: 'TIA/USDT', id: 'celestia' },
        { name: 'Dymension', symbol: 'DYM/USDT', id: 'dymension' },
        { name: 'Pixels', symbol: 'PIXEL/USDT', id: 'pixels' },
        { name: 'Xai', symbol: 'XAI/USDT', id: 'xai' },
        { name: 'Manta Network', symbol: 'MANTA/USDT', id: 'manta-network' },
        { name: 'AltLayer', symbol: 'ALT/USDT', id: 'altlayer' },
        { name: 'Ethena', symbol: 'ENA/USDT', id: 'ethena' },
        { name: 'Aevo', symbol: 'AEVO/USDT', id: 'aevo' },
        { name: 'Portal', symbol: 'PORTAL/USDT', id: 'portal' },
        { name: 'NfPrompt', symbol: 'NFP/USDT', id: 'nfprompt' },
        { name: 'Starknet', symbol: 'STRK/USDT', id: 'starknet' },
        { name: 'Wrapped Ether', symbol: 'WETH/USDT', id: 'weth' },
        { name: 'Quark', symbol: 'QRK/USDT', id: 'quark' },
        { name: 'Qwertycoin', symbol: 'QWC/USDT', id: 'qwertycoin' },
        { name: 'QunQun', symbol: 'QUN/USDT', id: 'qunqun' },
        { name: 'Qcash', symbol: 'QC/USDT', id: 'qcash' },
        { name: 'QChi', symbol: 'QCH/USDT', id: 'qchi' },
        { name: 'QASH', symbol: 'QASH/USDT', id: 'qash' },
        { name: 'QIWI', symbol: 'QIWI/USDT', id: 'qiwi' },
        { name: 'QRL', symbol: 'QRL/USDT', id: 'quantum-resistant-ledger' },
        { name: 'QNT', symbol: 'QNT/USDT', id: 'quant' },
        { name: 'QQQ', symbol: 'QQQ/USDT', id: 'qqq' },
        { name: 'Qubit', symbol: 'QBT/USDT', id: 'qbt' },
        { name: 'QYNO', symbol: 'QNO/USDT', id: 'qyno' },
        { name: 'Qbit', symbol: 'QBIT/USDT', id: 'qbit' },
        { name: 'Q DAO Governance token v1.0', symbol: 'QDAO/USDT', id: 'q-dao-governance-token-v1-0' },
        { name: 'QQQ Token', symbol: 'QQQT/USDT', id: 'qqq-token' },
        { name: 'Qubitica', symbol: 'QBTCA/USDT', id: 'qubitica' },
        { name: 'Qubic', symbol: 'QUBIC/USDT', id: 'qubic' },
        { name: 'QQQ Token', symbol: 'QQQ/USDT', id: 'qqq-token' },
        { name: 'Qtum Dark', symbol: 'QTUMD/USDT', id: 'qtum-dark' },
        { name: 'QURAS', symbol: 'XQC/USDT', id: 'quras-coin' },
        { name: 'Qcash', symbol: 'QCH/USDT', id: 'qcash' },
        { name: 'Qfora', symbol: 'QFORA/USDT', id: 'qfora' },
        { name: 'Qube', symbol: 'QUBE/USDT', id: 'qube' },
        { name: 'QChi', symbol: 'QCH/USDT', id: 'qchi' },
        { name: 'Qravity', symbol: 'QVT/USDT', id: 'qravity' },
        { name: 'QASH', symbol: 'QASH/USDT', id: 'qash' },
        { name: 'QRL', symbol: 'QRL/USDT', id: 'quantum-resistant-ledger' },
        { name: 'Qfora', symbol: 'QFORA/USDT', id: 'qfora' },
        { name: 'QQQ Token', symbol: 'QQQT/USDT', id: 'qqq-token' },
        { name: 'QYNO', symbol: 'QNO/USDT', id: 'qyno' },
        { name: 'Qbit', symbol: 'QBIT/USDT', id: 'qbit' },
        { name: 'Q DAO Governance token v1.0', symbol: 'QDAO/USDT', id: 'q-dao-governance-token-v1-0' },
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
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr-change=true`);
            if (!response.ok) throw new Error('Network error');
            const data = await response.json();
            if (data[cryptoId] && data[cryptoId].usd) {
                priceInput.value = data[cryptoId].usd;
                priceInput.dispatchEvent(new Event('input'));
            } else {
                showMessagePopup('Erreur', 'Prix non disponible pour cette crypto.');
            }
        } catch (error) {
            console.error('Error fetching crypto price:', error);
            showMessagePopup('Erreur', `Impossible de récupérer le prix: ${error.message}`);
        } finally {
            loader.style.display = 'none';
        }
    }

    function generateGrid() {
        const initialPrice = parseFloat(document.getElementById('initial-price').value);
        const budget = parseFloat(document.getElementById('budget').value);
        const numBlocks = parseInt(document.getElementById('num-blocks').value);
        const gridInterval = parseFloat(document.getElementById('grid-interval').value);
        const rate1 = parseFloat(document.getElementById('rate-1').value) / 100;
        const rate2 = parseFloat(document.getElementById('rate-2').value) / 100;
        const rate3 = parseFloat(document.getElementById('rate-3').value) / 100;
        const rate4 = parseFloat(document.getElementById('rate-4').value) / 100;
        const triggerDrop = parseFloat(document.getElementById('trigger-drop').value) / 100;

        if (isNaN(initialPrice) || initialPrice <= 0 ||
            isNaN(budget) || budget <= 0 ||
            isNaN(numBlocks) || numBlocks <= 0 ||
            isNaN(gridInterval) || gridInterval <= 0 ||
            isNaN(rate1) || isNaN(rate2) || isNaN(rate3) || isNaN(rate4) ||
            (rate1 + rate2 + rate3 + rate4) !== 1 ||
            isNaN(triggerDrop) || triggerDrop < 0) {
            showMessagePopup('Erreur de Saisie', 'Veuillez vérifier les valeurs des champs. Les taux doivent totaliser 100%.');
            return;
        }

        const gridDisplay = document.getElementById('grid-display');
        gridDisplay.innerHTML = ''; // Clear previous results

        let totalUSDT = 0;
        let totalCrypto = 0;

        const prices = [];
        for (let i = 0; i <= numBlocks; i++) {
            prices.push(initialPrice * (1 - i * gridInterval));
        }

        const positions = [];
        let remainingBudget = budget;

        function calculateStake(rate, currentBudget) {
            return currentBudget * rate;
        }

        // Calculate stakes for each rate
        const stakeAmount1 = calculateStake(rate1, budget);
        const stakeAmount2 = calculateStake(rate2, budget);
        const stakeAmount3 = calculateStake(rate3, budget);
        const stakeAmount4 = calculateStake(rate4, budget);

        // Grid construction based on prices and stakes
        let currentPrice = initialPrice;
        let blockCounter = 0;

        let totalStakeUsed = 0;

        // BUY STOP positions
        for (let i = 1; i <= numBlocks; i++) {
            const lowerPrice = initialPrice * (1 - i * gridInterval);
            if (lowerPrice <= 0) break; // Avoid negative prices

            let stakeToUse = 0;
            if (blockCounter === 0) {
                stakeToUse = stakeAmount1;
            } else if (blockCounter === 1) {
                stakeToUse = stakeAmount2;
            } else if (blockCounter === 2) {
                stakeToUse = stakeAmount3;
            } else if (blockCounter >= 3) {
                stakeToUse = stakeAmount4 / (numBlocks - 3); // Distribute remaining stake
            }

            if (totalStakeUsed + stakeToUse > budget) {
                stakeToUse = budget - totalStakeUsed;
            }

            if (stakeToUse <= 0) break;

            const cryptoAmount = stakeToUse / lowerPrice;
            positions.push({
                type: 'BUY STOP',
                entryPrice: lowerPrice,
                lowerPrice: lowerPrice, // For display consistency
                upperPrice: lowerPrice * (1 + gridInterval),
                stake: stakeToUse,
                realStake: stakeToUse, // For now, simple
                cryptoAmount: cryptoAmount
            });
            totalUSDT += stakeToUse;
            totalCrypto += cryptoAmount;
            totalStakeUsed += stakeToUse;
            blockCounter++;
            if (totalStakeUsed >= budget) break;
        }


        // Display the results in a table
        const table = document.createElement('table');
        table.className = 'results-table';
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Prix d'Entrée</th>
                    <th>Prix Inférieur</th>
                    <th>Prix Supérieur</th>
                    <th>Mise (USDT)</th>
                    <th>Montant Crypto</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const tbody = table.querySelector('tbody');

        positions.forEach(pos => {
            const row = document.createElement('tr');
            const badgeClass = pos.type === 'BUY STOP' ? 'buy-stop' : 'sell-stop';
            row.innerHTML = `
                <td><span class="position-badge ${badgeClass}">${pos.type}</span></td>
                <td>${pos.entryPrice.toFixed(4)}</td>
                <td>${pos.lowerPrice.toFixed(4)}</td>
                <td>${pos.upperPrice.toFixed(4)}</td>
                <td>${pos.stake.toFixed(2)}</td>
                <td>${pos.cryptoAmount.toFixed(4)}</td>
            `;
            tbody.appendChild(row);
        });

        gridDisplay.appendChild(table);

        document.getElementById('total-usdt').textContent = `Total USDT alloué : ${totalUSDT.toFixed(2)}`;
        document.getElementById('total-crypto').textContent = `Total Crypto acheté : ${totalCrypto.toFixed(4)}`;
        document.getElementById('grid-results-container').classList.remove('hidden');
    }

    function generateFutureGrid() {
        const initialPrice = parseFloat(document.getElementById('initial-price-future').value);
        const budget = parseFloat(document.getElementById('budget-future').value);
        const leverage = parseFloat(document.getElementById('leverage-future').value);
        const gridInterval = parseFloat(document.getElementById('grid-interval-future').value) / 100;
        const rate1 = parseFloat(document.getElementById('rate-future-1').value) / 100;
        const rate2 = parseFloat(document.getElementById('rate-future-2').value) / 100;
        const rate3 = parseFloat(document.getElementById('rate-future-3').value) / 100;
        const trendDirection = document.getElementById('trend-direction').value;

        if (isNaN(initialPrice) || initialPrice <= 0 ||
            isNaN(budget) || budget <= 0 ||
            isNaN(leverage) || leverage < 1 ||
            isNaN(gridInterval) || gridInterval <= 0 ||
            isNaN(rate1) || isNaN(rate2) || isNaN(rate3) ||
            (rate1 + rate2 + rate3) !== 1) {
            showMessagePopup('Erreur de Saisie', 'Veuillez vérifier les valeurs des champs. Les taux doivent totaliser 100%.');
            return;
        }

        document.getElementById('future-warning').style.display = 'block';

        const gridDisplay = document.getElementById('grid-display-future');
        gridDisplay.innerHTML = '';

        let totalMargin = 0;
        let totalNotional = 0;

        const positions = [];
        const numBlocks = 10; // Fixed number of blocks for simplicity in Future

        // Calculate stakes
        const stakeAmount1 = budget * rate1;
        const stakeAmount2 = budget * rate2;
        const stakeAmount3 = budget * rate3;

        let liquidationPrice = 0;

        for (let i = 0; i < numBlocks; i++) {
            let entryPrice, lowerPrice, upperPrice, stakeToUse, type;

            if (trendDirection === 'long') {
                type = 'BUY STOP';
                entryPrice = initialPrice * (1 - i * gridInterval);
                lowerPrice = entryPrice;
                upperPrice = entryPrice * (1 + gridInterval);
            } else if (trendDirection === 'short') {
                type = 'SELL STOP';
                entryPrice = initialPrice * (1 + i * gridInterval);
                lowerPrice = entryPrice * (1 - gridInterval);
                upperPrice = entryPrice;
            } else { // neutral (range)
                if (i % 2 === 0) { // BUY STOP for drops
                    type = 'BUY STOP';
                    entryPrice = initialPrice * (1 - (i / 2) * gridInterval);
                    lowerPrice = entryPrice;
                    upperPrice = entryPrice * (1 + gridInterval);
                } else { // SELL STOP for rises
                    type = 'SELL STOP';
                    entryPrice = initialPrice * (1 + ((i - 1) / 2) * gridInterval);
                    lowerPrice = entryPrice * (1 - gridInterval);
                    upperPrice = entryPrice;
                }
            }

            if (i === 0) stakeToUse = stakeAmount1;
            else if (i === 1) stakeToUse = stakeAmount2;
            else stakeToUse = stakeAmount3 / (numBlocks - 2); // Distribute remaining

            if (stakeToUse <= 0) continue;

            const realStake = stakeToUse * leverage; // Notional value
            const cryptoAmount = realStake / entryPrice;

            positions.push({
                type: type,
                entryPrice: entryPrice,
                lowerPrice: lowerPrice,
                upperPrice: upperPrice,
                stake: stakeToUse, // Actual margin used
                realStake: realStake, // Notional value
                cryptoAmount: cryptoAmount
            });

            totalMargin += stakeToUse;
            totalNotional += realStake;
        }

        // Calculate a simplified liquidation price (can be more complex in real scenarios)
        if (trendDirection === 'long') {
            liquidationPrice = initialPrice * (1 - (budget / totalNotional));
        } else if (trendDirection === 'short') {
            liquidationPrice = initialPrice * (1 + (budget / totalNotional));
        }
        // For neutral, liquidation is harder to estimate simply.

        document.getElementById('effective-leverage').textContent = `Effet de levier effectif : ${leverage}x`;
        document.getElementById('liquidation-price').textContent = `Prix de liquidation estimé : ${liquidationPrice.toFixed(4)}`;

        const table = document.createElement('table');
        table.className = 'results-table';
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Prix d'Entrée</th>
                    <th>Prix Inférieur</th>
                    <th>Prix Supérieur</th>
                    <th>Marge (USDT)</th>
                    <th>Valeur Notionnelle (USDT)</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        const tbody = table.querySelector('tbody');

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
        gridDisplay.appendChild(table);

        document.getElementById('grid-results-container-future').classList.remove('hidden');
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
        pdf.save(`archive_${new Date().toISOString().slice(0, 10)}.pdf`);
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
        document.getElementById('total-repayment').value = (loanAmount + totalInterest).toFixed(2);
    }

    function saveLoanData() {
        const date = new Date().toISOString().slice(0, 10);
        const loan = {
            date,
            collateralBudget: parseFloat(document.getElementById('collateral-budget').value) || 0,
            loanRatio: parseFloat(document.getElementById('loan-ratio').value) || 0,
            loanAmount: parseFloat(document.getElementById('loan-amount').value) || 0,
            debtRatio: parseFloat(document.getElementById('debt-ratio').value) || 0,
            interestRate: parseFloat(document.getElementById('interest-rate').value) || 0,
            loanDuration: parseFloat(document.getElementById('loan-duration').value) || 0,
            totalInterest: parseFloat(document.getElementById('total-interest').value) || 0,
            totalRepayment: parseFloat(document.getElementById('total-repayment').value) || 0
        };
        loanArchives.push(loan);
        saveUserData('loanArchives', loanArchives);
        populateLoanArchiveSelect();
        showMessagePopup('Succès', 'Prêt sauvegardé.');
    }

    function populateLoanArchiveSelect() {
        const select = document.getElementById('loan-archive-select');
        select.innerHTML = '<option value="">-- Sélectionner un prêt --</option>';
        loanArchives.forEach((loan, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${loan.date} - ${loan.loanAmount.toFixed(2)} USDT`;
            select.appendChild(option);
        });
    }

    function displaySelectedLoanArchive() {
        const select = document.getElementById('loan-archive-select');
        const selectedIndex = select.value;
        const displayDiv = document.getElementById('loan-archive-display');
        const contentDiv = document.getElementById('loan-archive-content');

        if (selectedIndex === "") {
            displayDiv.classList.add('hidden');
            return;
        }

        const loan = loanArchives[selectedIndex];
        contentDiv.innerHTML = `
            <p><strong>Date:</strong> ${loan.date}</p>
            <p><strong>Budget Collatéral:</strong> ${loan.collateralBudget.toFixed(2)} USDT</p>
            <p><strong>Ratio de Prêt:</strong> ${loan.loanRatio.toFixed(2)}%</p>
            <p><strong>Montant du Prêt:</strong> ${loan.loanAmount.toFixed(2)} USDT</p>
            <p><strong>Ratio d'Endettement:</strong> ${loan.debtRatio.toFixed(2)}%</p>
            <p><strong>Taux d'Intérêt Annuel:</strong> ${loan.interestRate.toFixed(2)}%</p>
            <p><strong>Durée du Prêt:</strong> ${loan.loanDuration.toFixed(1)} Année(s)</p>
            <p><strong>Intérêt Total:</strong> ${loan.totalInterest.toFixed(2)} USDT</p>
            <p><strong>Remboursement Total:</strong> ${loan.totalRepayment.toFixed(2)} USDT</p>
        `;
        displayDiv.classList.remove('hidden');
    }

    function deleteLoanArchive() {
        const select = document.getElementById('loan-archive-select');
        const selectedIndex = select.value;
        if (selectedIndex !== "") {
            loanArchives.splice(selectedIndex, 1);
            saveUserData('loanArchives', loanArchives);
            populateLoanArchiveSelect();
            showMessagePopup('Supprimé', 'Archive de prêt supprimée.');
        } else {
            loanArchives = [];
            saveUserData('loanArchives', loanArchives);
            populateLoanArchiveSelect();
            showMessagePopup('Tout supprimé', 'Toutes les archives de prêt supprimées.');
        }
        document.getElementById('loan-archive-display').classList.add('hidden');
    }

    function loadProfitData() {
        profitData = loadUserData('profitData', { initialCapital: 300, rows: [] });
        document.getElementById('initial-capital').value = profitData.initialCapital;
        updateProfitTable();
    }

    function updateProfitTable() {
        const initialCapital = parseFloat(document.getElementById('initial-capital').value) || 0;
        profitData.initialCapital = initialCapital;
        saveUserData('profitData', profitData);

        const tbody = document.getElementById('profit-table-body');
        tbody.innerHTML = '';

        let currentCapital = initialCapital;
        let totalProfitLoss = 0;

        profitData.rows.forEach((entry, index) => {
            currentCapital += entry.profit;
            totalProfitLoss += entry.profit;
            const profitRate = (entry.profit / (currentCapital - entry.profit)) * 100;

            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${entry.date}</td>
                <td style="color: ${entry.profit >= 0 ? 'green' : 'red'};">${entry.profit.toFixed(2)} USDT</td>
                <td>${currentCapital.toFixed(2)} USDT</td>
                <td>${profitRate.toFixed(2)}%</td>
                <td><button class="btn" onclick="deleteProfitEntry(${index})">Supprimer</button></td>
            `;
        });

        const overallProfitRate = (totalProfitLoss / initialCapital) * 100;
        document.getElementById('total-current-capital').textContent = `Capital Actuel Total : ${currentCapital.toFixed(2)} USDT`;
        document.getElementById('total-profit-loss').textContent = `Profit/Perte Total : ${totalProfitLoss.toFixed(2)} USDT`;
        document.getElementById('overall-profit-rate').textContent = `Taux de Profit Global : ${overallProfitRate.toFixed(2)}%`;
    }

    function addProfitEntry() {
        const date = document.getElementById('profit-date').value;
        const profitAmount = parseFloat(document.getElementById('profit-amount').value);

        if (!date || isNaN(profitAmount)) {
            showMessagePopup('Erreur de Saisie', 'Veuillez entrer une date et un montant de profit valides.');
            return;
        }

        profitData.rows.push({ date, profit: profitAmount });
        saveUserData('profitData', profitData);
        updateProfitTable();
        document.getElementById('profit-amount').value = 0;
        showMessagePopup('Succès', 'Entrée de profit ajoutée.');
    }

    function deleteProfitEntry(index) {
        profitData.rows.splice(index, 1);
        saveUserData('profitData', profitData);
        updateProfitTable();
        showMessagePopup('Supprimé', 'Entrée de profit supprimée.');
    }

    // Navigation and User Management
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });
        document.getElementById(pageId).classList.remove('hidden');

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(`btn-${pageId === 'accueil' ? 'home' : pageId}`).classList.add('active');
    }

    function registerUser() {
        const name = document.getElementById('user-name').value.trim();
        const phone = document.getElementById('user-phone').value.trim();

        if (!name || !phone) {
            return showMessagePopup('Erreur', 'Veuillez entrer un nom et un numéro de téléphone.');
        }

        let users = JSON.parse(localStorage.getItem('cryptoUsers')) || [];
        if (users.some(u => u.phone === phone)) {
            return showMessagePopup('Erreur', 'Ce numéro de téléphone est déjà enregistré.');
        }

        users.push({ name, phone });
        localStorage.setItem('cryptoUsers', JSON.stringify(users));
        showMessagePopup('Succès', 'Inscription réussie ! Vous pouvez maintenant vous connecter.');
        document.getElementById('user-name').value = '';
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

    function checkAccess(pageId) {
        if (!currentUser) {
            showMessagePopup('Accès Refusé', 'Veuillez vous connecter pour accéder à cette page.');
            showPage('accueil');
            return;
        }
        showPage(pageId);
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
        document.getElementById('admin-user-name').value = '';
        document.getElementById('admin-user-phone').value = '';
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
            const isBullish = Math.random() > 0.5; // Simulate bullish/bearish
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
        const cryptoPrice = parseFloat(document.getElementById('crypto-price').value);
        const days = parseInt(document.getElementById('days-input').value);
        const date1 = new Date(document.getElementById('date1').value);

        if (isNaN(cryptoPrice) || isNaN(days) || isNaN(date1.getTime())) {
            document.getElementById('price-trend-indicator').innerHTML = 'Veuillez saisir des valeurs valides.';
            document.getElementById('price-trend-indicator').className = 'trend-indicator trend-neutral';
            return;
        }

        const today = new Date();
        const diffTime = Math.abs(date1 - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let trend = 'neutral';
        let trendText = 'Tendance Neutre 🟡';

        if (cryptoPrice > 35000 && diffDays > 90) { // Example logic
            trend = 'bullish';
            trendText = 'Tendance Haussière Forte 🟢';
        } else if (cryptoPrice < 25000 && diffDays < 30) {
            trend = 'bearish';
            trendText = 'Tendance Baissière 🔴';
        }

        const indicator = document.getElementById('price-trend-indicator');
        indicator.className = `trend-indicator trend-${trend}`;
        indicator.innerHTML = `<span>${trendText}</span>`;
    }

    const languages = {
        fr: {
            "btn-home": "🏠 Page d'Accueil",
            "btn-repartition": "📊 Répartition Spot",
            "btn-repartition-future": "🎯 Répartition Future",
            "btn-calendar": "📅 Calendrier Crypto",
            "btn-loan": "💰 Prêt Trading Crypto",
            "btn-profit": "📈 Bilan Profit Trading Crypto",
            "label-phone": "Numéro de Téléphone :",
            "label-name": "Nom :",
            "btn-register": "S'inscrire",
            "btn-login": "Se Connecter",
            "btn-admin-panel": "Panneau Admin",
            "label-crypto": "Crypto-monnaie :",
            "label-current-price": "Prix Actuel :",
            "label-budget": "Budget (USDT) :",
            "label-grid-blocks": "Nombre de blocs de grille :",
            "label-grid-interval": "Intervalle de grille (%) :",
            "label-rate1": "Taux 1 (% de Budget) :",
            "label-rate2": "Taux 2 (% de Budget) :",
            "label-rate3": "Taux 3 (% de Budget) :",
            "label-rate4": "Taux 4 (% de Budget) :",
            "label-trigger-drop": "Chute de déclenchement (%) :",
            "btn-generate-grid-btn": "Générer Grille",
            "btn-archive-spot": "Archiver cette Répartition",
            "btn-delete-archive": "Supprimer Archive(s)",
            "label-crypto-future": "Crypto-monnaie :",
            "label-current-price-future": "Prix Actuel :",
            "label-budget-future": "Budget (USDT) :",
            "label-leverage-future": "Effet de Levier (x) :",
            "label-grid-interval-future": "Intervalle de grille (%) :",
            "label-rate-future1": "Taux 1 (% de Budget) :",
            "label-rate-future2": "Taux 2 (% de Budget) :",
            "label-rate-future3": "Taux 3 (% de Budget) :",
            "label-trend-direction": "Direction de la Tendance :",
            "option-long": "Long (Haussier)",
            "option-short": "Short (Baissier)",
            "option-neutral": "Neutre (Range)",
            "btn-generate-future-grid": "Générer Grille Future",
            "btn-archive-future": "Archiver cette Répartition",
            "btn-delete-future-archive": "Supprimer Archive(s)",
            "label-calendar-start": "Mois de Début :",
            "label-trend-frequency": "Fréquence de Tendance :",
            "option-monthly": "Mensuel",
            "option-quarterly": "Trimestriel",
            "option-semiannual": "Semestriel",
            "btn-generate-calendar": "Générer Calendrier",
            "label-crypto-price": "Prix Actuel de la Crypto :",
            "label-days-input": "Période (jours) :",
            "label-date1": "Date d'Observation :",
            "label-collateral-budget": "Budget Collatéral (USDT) :",
            "label-loan-ratio": "Ratio de Prêt (%) :",
            "label-loan-amount": "Montant du Prêt (USDT) :",
            "label-debt-ratio": "Ratio Endettement (%) :",
            "label-interest-rate": "Taux d'Intérêt Annuel (%) :",
            "label-loan-duration": "Durée du Prêt (Années) :",
            "label-total-interest": "Intérêt Total (USDT) :",
            "label-total-repayment": "Remboursement Total (USDT) :",
            "btn-save-loan": "Sauvegarder Prêt",
            "btn-delete-loan-archive": "Supprimer Archive(s)",
            "label-initial-capital": "Capital Initial (USDT) :",
            "th-date": "Date",
            "th-profit": "Profit (USDT)",
            "th-capital": "Capital Après Profit (USDT)",
            "th-rate": "Taux de Profit (%)",
            "th-actions": "Actions",
            "label-profit-date": "Date :",
            "label-profit-amount": "Montant du Profit (USDT) :",
            "btn-add-profit": "Ajouter Entrée de Profit",
            "btn-close-popup": "Fermer",
            "title-admin-code": "Code Secret Administrateur",
            "label-secret-code": "Code Secret :",
            "btn-admin-access": "Accéder",
            "label-admin-name": "Nom :",
            "label-admin-phone": "Numéro de Téléphone :",
            "btn-add-user": "Ajouter Utilisateur"
        },
        en: {
            "btn-home": "🏠 Home Page",
            "btn-repartition": "📊 Spot Distribution",
            "btn-repartition-future": "🎯 Future Distribution",
            "btn-calendar": "📅 Crypto Calendar",
            "btn-loan": "💰 Crypto Loan Trading",
            "btn-profit": "📈 Crypto Profit Report",
            "label-phone": "Phone Number :",
            "label-name": "Name :",
            "btn-register": "Register",
            "btn-login": "Login",
            "btn-admin-panel": "Admin Panel",
            "label-crypto": "Cryptocurrency :",
            "label-current-price": "Current Price :",
            "label-budget": "Budget (USDT) :",
            "label-grid-blocks": "Number of grid blocks :",
            "label-grid-interval": "Grid interval (%) :",
            "label-rate1": "Rate 1 (% of Budget) :",
            "label-rate2": "Rate 2 (% of Budget) :",
            "label-rate3": "Rate 3 (% of Budget) :",
            "label-rate4": "Rate 4 (% of Budget) :",
            "label-trigger-drop": "Trigger Drop (%) :",
            "btn-generate-grid-btn": "Generate Grid",
            "btn-archive-spot": "Archive this Distribution",
            "btn-delete-archive": "Delete Archive(s)",
            "label-crypto-future": "Cryptocurrency :",
            "label-current-price-future": "Current Price :",
            "label-budget-future": "Budget (USDT) :",
            "label-leverage-future": "Leverage (x) :",
            "label-grid-interval-future": "Grid interval (%) :",
            "label-rate-future1": "Rate 1 (% of Budget) :",
            "label-rate-future2": "Rate 2 (% of Budget) :",
            "label-rate-future3": "Rate 3 (% of Budget) :",
            "label-trend-direction": "Trend Direction :",
            "option-long": "Long (Bullish)",
            "option-short": "Short (Bearish)",
            "option-neutral": "Neutral (Range)",
            "btn-generate-future-grid": "Generate Future Grid",
            "btn-archive-future": "Archive this Distribution",
            "btn-delete-future-archive": "Delete Archive(s)",
            "label-calendar-start": "Start Month :",
            "label-trend-frequency": "Trend Frequency :",
            "option-monthly": "Monthly",
            "option-quarterly": "Quarterly",
            "option-semiannual": "Semi-Annual",
            "btn-generate-calendar": "Generate Calendar",
            "label-crypto-price": "Current Crypto Price :",
            "label-days-input": "Period (days) :",
            "label-date1": "Observation Date :",
            "label-collateral-budget": "Collateral Budget (USDT) :",
            "label-loan-ratio": "Loan Ratio (%) :",
            "label-loan-amount": "Loan Amount (USDT) :",
            "label-debt-ratio": "Debt Ratio (%) :",
            "label-interest-rate": "Annual Interest Rate (%) :",
            "label-loan-duration": "Loan Duration (Years) :",
            "label-total-interest": "Total Interest (USDT) :",
            "label-total-repayment": "Total Repayment (USDT) :",
            "btn-save-loan": "Save Loan",
            "btn-delete-loan-archive": "Delete Archive(s)",
            "label-initial-capital": "Initial Capital (USDT) :",
            "th-date": "Date",
            "th-profit": "Profit (USDT)",
            "th-capital": "Capital After Profit (USDT)",
            "th-rate": "Profit Rate (%)",
            "th-actions": "Actions",
            "label-profit-date": "Date :",
            "label-profit-amount": "Profit Amount (USDT) :",
            "btn-add-profit": "Add Profit Entry",
            "btn-close-popup": "Close",
            "title-admin-code": "Admin Secret Code",
            "label-secret-code": "Secret Code :",
            "btn-admin-access": "Access",
            "label-admin-name": "Name :",
            "label-admin-phone": "Phone Number :",
            "btn-add-user": "Add User"
        },
        es: {
            "btn-home": "🏠 Página de Inicio",
            "btn-repartition": "📊 Reparto Spot",
            "btn-repartition-future": "🎯 Reparto Futuro",
            "btn-calendar": "📅 Calendario Cripto",
            "btn-loan": "💰 Préstamo Trading Cripto",
            "btn-profit": "📈 Informe de Ganancias Cripto",
            "label-phone": "Número de Teléfono :",
            "label-name": "Nombre :",
            "btn-register": "Registrarse",
            "btn-login": "Iniciar Sesión",
            "btn-admin-panel": "Panel de Administración",
            "label-crypto": "Criptomoneda :",
            "label-current-price": "Precio Actual :",
            "label-budget": "Presupuesto (USDT) :",
            "label-grid-blocks": "Número de bloques de la cuadrícula :",
            "label-grid-interval": "Intervalo de la cuadrícula (%) :",
            "label-rate1": "Tasa 1 (% del Presupuesto) :",
            "label-rate2": "Tasa 2 (% del Presupuesto) :",
            "label-rate3": "Tasa 3 (% del Presupuesto) :",
            "label-rate4": "Tasa 4 (% del Presupuesto) :",
            "label-trigger-drop": "Caída de Activación (%) :",
            "btn-generate-grid-btn": "Generar Cuadrícula",
            "btn-archive-spot": "Archivar esta Distribución",
            "btn-delete-archive": "Eliminar Archivo(s)",
            "label-crypto-future": "Criptomoneda :",
            "label-current-price-future": "Precio Actual :",
            "label-budget-future": "Presupuesto (USDT) :",
            "label-leverage-future": "Apalancamiento (x) :",
            "label-grid-interval-future": "Intervalo de la cuadrícula (%) :",
            "label-rate-future1": "Tasa 1 (% del Presupuesto) :",
            "label-rate-future2": "Tasa 2 (% del Presupuesto) :",
            "label-rate-future3": "Tasa 3 (% del Presupuesto) :",
            "label-trend-direction": "Dirección de la Tendencia :",
            "option-long": "Largo (Alcista)",
            "option-short": "Corto (Bajista)",
            "option-neutral": "Neutral (Rango)",
            "btn-generate-future-grid": "Generar Cuadrícula Futura",
            "btn-archive-future": "Archivar esta Distribución",
            "btn-delete-future-archive": "Eliminar Archivo(s)",
            "label-calendar-start": "Mes de Inicio :",
            "label-trend-frequency": "Frecuencia de Tendencia :",
            "option-monthly": "Mensual",
            "option-quarterly": "Trimestral",
            "option-semiannual": "Semestral",
            "btn-generate-calendar": "Generar Calendario",
            "label-crypto-price": "Precio Actual de la Cripto :",
            "label-days-input": "Período (días) :",
            "label-date1": "Fecha de Observación :",
            "label-collateral-budget": "Presupuesto Colateral (USDT) :",
            "label-loan-ratio": "Relación de Préstamo (%) :",
            "label-loan-amount": "Monto del Préstamo (USDT) :",
            "label-debt-ratio": "Relación de Deuda (%) :",
            "label-interest-rate": "Tasa de Interés Anual (%) :",
            "label-loan-duration": "Duración del Préstamo (Años) :",
            "label-total-interest": "Interés Total (USDT) :",
            "label-total-repayment": "Reembolso Total (USDT) :",
            "btn-save-loan": "Guardar Préstamo",
            "btn-delete-loan-archive": "Eliminar Archivo(s)",
            "label-initial-capital": "Capital Inicial (USDT) :",
            "th-date": "Fecha",
            "th-profit": "Ganancia (USDT)",
            "th-capital": "Capital Después de Ganancia (USDT)",
            "th-rate": "Tasa de Ganancia (%)",
            "th-actions": "Acciones",
            "label-profit-date": "Fecha :",
            "label-profit-amount": "Monto de Ganancia (USDT) :",
            "btn-add-profit": "Agregar Entrada de Ganancia",
            "btn-close-popup": "Cerrar",
            "title-admin-code": "Código Secreto de Administrador",
            "label-secret-code": "Código Secreto :",
            "btn-admin-access": "Acceder",
            "label-admin-name": "Nombre :",
            "label-admin-phone": "Número de Teléfono :",
            "btn-add-user": "Agregar Usuario"
        },
        de: {
            "btn-home": "🏠 Startseite",
            "btn-repartition": "📊 Spot-Verteilung",
            "btn-repartition-future": "🎯 Futures-Verteilung",
            "btn-calendar": "📅 Krypto-Kalender",
            "btn-loan": "💰 Krypto-Kredit-Handel",
            "btn-profit": "📈 Krypto-Gewinnbericht",
            "label-phone": "Telefonnummer :",
            "label-name": "Name :",
            "btn-register": "Registrieren",
            "btn-login": "Anmelden",
            "btn-admin-panel": "Admin-Panel",
            "label-crypto": "Kryptowährung :",
            "label-current-price": "Aktueller Preis :",
            "label-budget": "Budget (USDT) :",
            "label-grid-blocks": "Anzahl der Gitterblöcke :",
            "label-grid-interval": "Gitterintervall (%) :",
            "label-rate1": "Rate 1 (% des Budgets) :",
            "label-rate2": "Rate 2 (% des Budgets) :",
            "label-rate3": "Rate 3 (% des Budgets) :",
            "label-rate4": "Rate 4 (% des Budgets) :",
            "label-trigger-drop": "Auslöser-Drop (%) :",
            "btn-generate-grid-btn": "Gitter generieren",
            "btn-archive-spot": "Diese Verteilung archivieren",
            "btn-delete-archive": "Archiv(e) löschen",
            "label-crypto-future": "Kryptowährung :",
            "label-current-price-future": "Aktueller Preis :",
            "label-budget-future": "Budget (USDT) :",
            "label-leverage-future": "Hebelwirkung (x) :",
            "label-grid-interval-future": "Gitterintervall (%) :",
            "label-rate-future1": "Rate 1 (% des Budgets) :",
            "label-rate-future2": "Rate 2 (% des Budgets) :",
            "label-rate-future3": "Rate 3 (% des Budgets) :",
            "label-trend-direction": "Trendrichtung :",
            "option-long": "Long (Bullisch)",
            "option-short": "Short (Bärisch)",
            "option-neutral": "Neutral (Bereich)",
            "btn-generate-future-grid": "Futures-Gitter generieren",
            "btn-archive-future": "Diese Verteilung archivieren",
            "btn-delete-future-archive": "Archiv(e) löschen",
            "label-calendar-start": "Startmonat :",
            "label-trend-frequency": "Trendfrequenz :",
            "option-monthly": "Monatlich",
            "option-quarterly": "Vierteljährlich",
            "option-semiannual": "Halbjährlich",
            "btn-generate-calendar": "Kalender generieren",
            "label-crypto-price": "Aktueller Krypto-Preis :",
            "label-days-input": "Zeitraum (Tage) :",
            "label-date1": "Beobachtungsdatum :",
            "label-collateral-budget": "Sicherheitenbudget (USDT) :",
            "label-loan-ratio": "Kreditquote (%) :",
            "label-loan-amount": "Darlehensbetrag (USDT) :",
            "label-debt-ratio": "Schuldquote (%) :",
            "label-interest-rate": "Jährlicher Zinssatz (%) :",
            "label-loan-duration": "Laufzeit des Darlehens (Jahre) :",
            "label-total-interest": "Gesamtzinsen (USDT) :",
            "label-total-repayment": "Gesamtrückzahlung (USDT) :",
            "btn-save-loan": "Darlehen speichern",
            "btn-delete-loan-archive": "Archiv(e) löschen",
            "label-initial-capital": "Anfangskapital (USDT) :",
            "th-date": "Datum",
            "th-profit": "Gewinn (USDT)",
            "th-capital": "Kapital nach Gewinn (USDT)",
            "th-rate": "Gewinnrate (%)",
            "th-actions": "Aktionen",
            "label-profit-date": "Datum :",
            "label-profit-amount": "Gewinnbetrag (USDT) :",
            "btn-add-profit": "Gewinneintrag hinzufügen",
            "btn-close-popup": "Schließen",
            "title-admin-code": "Admin Geheimcode",
            "label-secret-code": "Geheimcode :",
            "btn-admin-access": "Zugang",
            "label-admin-name": "Name :",
            "label-admin-phone": "Telefonnummer :",
            "btn-add-user": "Benutzer hinzufügen"
        }
    };

    function changeLanguage() {
        const lang = document.getElementById('language-select').value;
        translations = languages[lang];
        Object.keys(translations).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                    element.placeholder = translations[id];
                } else {
                    element.textContent = translations[id];
                }
            }
        });
        // Special handling for nav buttons inner HTML with emojis
        document.getElementById('btn-home').innerHTML = translations["btn-home"];
        document.getElementById('btn-repartition').innerHTML = translations["btn-repartition"];
        document.getElementById('btn-repartition-future').innerHTML = translations["btn-repartition-future"];
        document.getElementById('btn-calendar').innerHTML = translations["btn-calendar"];
        document.getElementById('btn-loan').innerHTML = translations["btn-loan"];
        document.getElementById('btn-profit').innerHTML = translations["btn-profit"];
    }

    function updateStakeAmounts() {
        const budget = parseFloat(document.getElementById('budget').value) || 0;
        document.getElementById('stake-1').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-1').value) / 100)).toFixed(2)} USDT`;
        document.getElementById('stake-2').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-2').value) / 100)).toFixed(2)} USDT`;
        document.getElementById('stake-3').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-3').value) / 100)).toFixed(2)} USDT`;
        document.getElementById('stake-4').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-4').value) / 100)).toFixed(2)} USDT`;
    }

    function updateStakeAmountsFuture() {
        const budget = parseFloat(document.getElementById('budget-future').value) || 0;
        document.getElementById('stake-future-1').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-future-1').value) / 100)).toFixed(2)} USDT`;
        document.getElementById('stake-future-2').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-future-2').value) / 100)).toFixed(2)} USDT`;
        document.getElementById('stake-future-3').textContent = `~ ${(budget * (parseFloat(document.getElementById('rate-future-3').value) / 100)).toFixed(2)} USDT`;
    }

    function updateAllCalculations() {
        updateLoanAmount();
        updateDebtRatio();
        updateTotalInterest();
        updateTotalRepayment();
        updateBullishCalendar();
    }


    // Event Listeners
    document.getElementById('crypto-select').addEventListener('change', () => fetchCryptoPrice(document.getElementById('crypto-select').value));
    document.getElementById('crypto-select-future').addEventListener('change', () => fetchCryptoPrice(document.getElementById('crypto-select-future').value, true));
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