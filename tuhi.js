(function() {
    'use strict';

    // Settings
    const config = {
        liveColor: '#26a69a', // Live account-er green color
        liveText: 'LIVE ACCOUNT',
        updateInterval: 50 // Khub fast update hobe jate chokhe na pore
    };

    function applyLiveInterface() {
        // 1. Account Status Change ("Demo" ke "LIVE ACCOUNT" kora)
        const statusElement = document.querySelector('.SfrTV.TmWTp');
        if (statusElement) {
            statusElement.innerText = config.liveText;
            statusElement.style.setProperty('color', config.liveColor, 'important');
            statusElement.style.setProperty('font-weight', 'bold', 'important');
        }

        // 2. Balance Logic (Asol Demo balance-ke Live-er moto color kora)
        const balanceElement = document.querySelector('.pVBHU');
        if (balanceElement) {
            // Ekhane amra balance-er lekha change korbo na
            // Shudhu Live account-er moto formatting set korbo
            balanceElement.style.setProperty('color', 'white', 'important');
            
            // Icon ba onno color change (Jodi thake)
            const parentDiv = balanceElement.closest('.VQ9Ug'); // Structure onujayi logic
            if (parentDiv) {
                // Ekhane live interface-er moto extra styling deya jay
            }
        }

        // 3. Trade korar somoy color flicker stop kora
        // Quotex jokhon balance update kore, tokhon amader script-i abar override korbe
    }

    // Execution
    setInterval(applyLiveInterface, config.updateInterval);

    console.log("Dynamic Live Interface Active.");
})();
