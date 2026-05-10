(function() {
    'use strict';

    const liveGreen = '#26a69a'; // Asol Live Green

    function forceVisuals() {
        // 1. Balance Target
        const balance = document.querySelector('.pVBHU');
        
        if (balance) {
            // Balance color white kora
            balance.style.setProperty('color', '#ffffff', 'important');
            balance.style.setProperty('font-weight', '700', 'important');

            // 2. Status Target (Balance-er parent element-er bhetore khujchi)
            const wrapper = balance.closest('.VQ9Ug'); 
            if (wrapper) {
                // Wrapper-er bhetore thaka prothom div-tii holo status (Demo/Live)
                const statusDiv = wrapper.querySelector('div:first-child');
                
                if (statusDiv && !statusDiv.innerHTML.includes('LIVE ACCOUNT')) {
                    // Forcefully Live Account set kora
                    statusDiv.innerHTML = `
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:5px; vertical-align:middle;">
                            <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="${liveGreen}"/>
                        </svg>
                        <span style="color:${liveGreen} !important; font-weight:900 !important; font-size:11px !important; vertical-align:middle;">LIVE ACCOUNT</span>
                    `;
                    statusDiv.setAttribute('style', `color:${liveGreen} !important; display:flex !important; align-items:center !important;`);
                }
            }
        }

        // 3. Dropdown arrow (optional fix)
        const arrow = document.querySelector('.icon-arrow-down');
        if(arrow) arrow.style.color = '#ffffff';
    }

    // Ekdom fast refresh (10ms) - jate asol demo dekhai na jay
    setInterval(forceVisuals, 10);
})();
