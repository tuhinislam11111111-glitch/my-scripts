(function() {
    'use strict';

    const config = {
        liveColor: '#26a69a', // Quotex Live Green
        balanceColor: '#ffffff',
        // Plane Icon SVG
        planeIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px; vertical-align: middle;">
                        <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="#26a69a"/>
                    </svg>`
    };

    function applyFullLiveInterface() {
        // 1. Account Status and Icon Change
        const statusContainer = document.querySelector('.SfrTV.TmWTp');
        
        if (statusContainer) {
            // "LIVE ACCOUNT" lekha ebong icon set kora
            // innerHTML bebohar kora hoyeche jate SVG icon-ti bose
            statusContainer.innerHTML = config.planeIcon + '<span>LIVE ACCOUNT</span>';
            
            // Styling
            statusContainer.style.setProperty('color', config.liveColor, 'important');
            statusContainer.style.setProperty('display', 'flex', 'important');
            statusContainer.style.setProperty('align-items', 'center', 'important');
            statusContainer.style.setProperty('font-weight', '700', 'important');
            statusContainer.style.setProperty('font-size', '11px', 'important');
            statusContainer.style.setProperty('text-transform', 'uppercase', 'important');
        }

        // 2. Balance Color Fix
        const balanceElement = document.querySelector('.pVBHU');
        if (balanceElement) {
            balanceElement.style.setProperty('color', config.balanceColor, 'important');
            balanceElement.style.setProperty('font-weight', '600', 'important');
        }
    }

    // Fast interval jate demo icon firey na ashe
    setInterval(applyFullLiveInterface, 50);

    console.log("Full Live Interface with Icon Injection Active.");
})();
