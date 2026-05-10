(function() {
    'use strict';

    // Exact color from Quotex Live interface
    const liveGreen = '#26a69a'; 

    function applyFinalFix() {
        // 1. Status Container Target (Demo icon and text)
        const statusContainer = document.querySelector('.SfrTV.Bx7Ua');
        
        if (statusContainer) {
            // "LIVE ACCOUNT" lekha force kora
            statusContainer.innerText = 'LIVE ACCOUNT';
            
            // Sab dhoroner CSS force kora jate demo icon ba colour na ashe
            statusContainer.style.setProperty('color', liveGreen, 'important');
            statusContainer.style.setProperty('font-weight', '900', 'important');
            statusContainer.style.setProperty('font-size', '11px', 'important');
            statusContainer.style.setProperty('background', 'none', 'important');
            statusContainer.style.setProperty('border', 'none', 'important');
            
            // Jodi kono icon thake (Student cap), setake hide kora
            const icon = statusContainer.querySelector('svg, img, use');
            if (icon) {
                icon.style.setProperty('display', 'none', 'important');
            }
        }

        // 2. Balance Styling (White color force kora)
        const balanceElement = document.querySelector('.pVBHU');
        if (balanceElement) {
            balanceElement.style.setProperty('color', '#ffffff', 'important');
            balanceElement.style.setProperty('font-weight', '700', 'important');
        }
    }

    // Interval ekhon aro fast (30ms) jate palke-palke demo fire na ashe
    setInterval(applyFinalFix, 30);

    console.log("Forced Live Mode Active.");
})();
