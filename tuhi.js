(function() {
    'use strict';

    const config = {
        liveColor: '#39e31a', // Apnar chobi onujayi neon green
        balanceColor: '#ffffff',
        // Quotex Standard Level Icon (SVG structure)
        standardIcon: `<svg width="18" height="18" style="margin-right: 8px; vertical-align: middle;">
                          <use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use>
                       </svg>`
    };

    function applyPreciseLiveView() {
        // 1. Target the specific class: .SfrTV.Bx7Ua
        const statusContainer = document.querySelector('.SfrTV.Bx7Ua');
        
        if (statusContainer) {
            // "Demo" ke muche "LIVE ACCOUNT" ebong Standard Icon bosiye deya
            statusContainer.innerHTML = config.standardIcon + '<span>LIVE ACCOUNT</span>';
            
            // Styling
            statusContainer.style.setProperty('color', config.liveColor, 'important');
            statusContainer.style.setProperty('display', 'flex', 'important');
            statusContainer.style.setProperty('align-items', 'center', 'important');
            statusContainer.style.setProperty('font-weight', '900', 'important');
            statusContainer.style.setProperty('font-size', '11px', 'important');
            statusContainer.style.setProperty('text-transform', 'uppercase', 'important');
        }

        // 2. Balance Styling (Class: pVBHU)
        const balanceElement = document.querySelector('.pVBHU');
        if (balanceElement) {
            balanceElement.style.setProperty('color', config.balanceColor, 'important');
            balanceElement.style.setProperty('font-weight', '700', 'important');
        }
    }

    // High frequency interval
    setInterval(applyPreciseLiveView, 50);

    console.log("Standard Level Live Interface Active.");
})();
