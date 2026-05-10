(function() {
    'use strict';

    // Live Account-er asol color ebong icon
    const liveGreen = '#26a69a'; 
    const planeIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:6px; vertical-align:middle;"><path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="${liveGreen}"/></svg>`;

    function injectLiveView() {
        // ১. Status Target: SfrTV TmWTp (Apnar deya class)
        const statusElement = document.querySelector('.SfrTV.TmWTp');
        
        if (statusElement) {
            // "Demo" ke muche "LIVE ACCOUNT" ebong Plane Icon bosiye deya
            statusElement.innerHTML = planeIcon + '<span style="vertical-align:middle;">LIVE ACCOUNT</span>';
            
            // CSS Force kora
            statusElement.setAttribute('style', `color: ${liveGreen} !important; display: flex !important; align-items: center !important; font-weight: 900 !important; font-size: 11px !important; letter-spacing: 0.5px !important; text-transform: uppercase !important;`);
        }

        // ২. Balance Target: pVBHU
        const balanceElement = document.querySelector('.pVBHU');
        if (balanceElement) {
            balanceElement.setAttribute('style', 'color: #ffffff !important; font-weight: 700 !important; font-size: 18px !important;');
        }
    }

    // Proti ২০ millisecond-e update hobe jate Quotex-er internal script eitike bodlate na pare
    setInterval(injectLiveView, 20);

    console.log("Live View Injection Active for .SfrTV.TmWTp");
})();
