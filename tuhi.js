(function() {
    'use strict';

    const config = {
        // Chobi onujayi lighter neon-ish green shade
        iconColor: '#39e31a', 
        textColor: '#39e31a',
        balanceColor: '#ffffff',
        // Slanted Plane Icon matching your image
        planeIcon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                        <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="#39e31a"/>
                    </svg>`
    };

    function applyFinalLiveView() {
        // 1. Account Status and Icon
        const statusContainer = document.querySelector('.SfrTV.TmWTp');
        
        if (statusContainer) {
            statusContainer.innerHTML = config.planeIcon + '<span>LIVE ACCOUNT</span>';
            
            // Text styling based on image
            statusContainer.style.setProperty('color', config.textColor, 'important');
            statusContainer.style.setProperty('display', 'flex', 'important');
            statusContainer.style.setProperty('align-items', 'center', 'important');
            statusContainer.style.setProperty('font-weight', '900', 'important'); // Extra Bold
            statusContainer.style.setProperty('font-size', '11.5px', 'important'); 
            statusContainer.style.setProperty('letter-spacing', '0.2px', 'important');
            statusContainer.style.setProperty('font-family', 'sans-serif', 'important');
        }

        // 2. Balance Styling
        const balanceElement = document.querySelector('.pVBHU');
        if (balanceElement) {
            balanceElement.style.setProperty('color', config.balanceColor, 'important');
            balanceElement.style.setProperty('font-weight', '700', 'important');
            balanceElement.style.setProperty('font-size', '19px', 'important');
        }

        // 3. Dropdown arrow fix (Jodi thake)
        const arrow = document.querySelector('.VQ9Ug .icon-arrow-down');
        if(arrow) {
            arrow.style.setProperty('color', '#ffffff', 'important');
        }
    }

    // High speed update
    setInterval(applyFinalLiveView, 50);

    console.log("Visual Match Enabled.");
})();
