(function() {
    'use strict';

    function forceEverythingToLive() {
        // 1. Balance ke target koro (eta pawa geche)
        const balance = document.querySelector('.pVBHU');
        
        if (balance) {
            // Balance-er rongo shada koro
            balance.setAttribute('style', 'color: #ffffff !important; font-weight: 700 !important;');

            // 2. Balance-er parent ba baper element-er bhetore khujo
            // Sadharonoto account status balance-er khub kachei thake
            const headerSection = balance.closest('div').parentElement;
            
            if (headerSection) {
                // Header-er bhetore joto 'div' ba 'span' ache segulo check koro
                const allElements = headerSection.querySelectorAll('div, span, p');
                
                allElements.forEach(el => {
                    // Jodi kono element-er bhetore 'Demo' ba 'Practice' thake
                    if (el.innerText.toLowerCase().includes('demo') || el.innerText.toLowerCase().includes('practice')) {
                        
                        // Setake "LIVE ACCOUNT" baniye dao
                        el.innerHTML = `
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right:5px; vertical-align:middle;">
                                <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="#26a69a"/>
                            </svg>
                            <span style="color:#26a69a !important; font-weight:900 !important; font-size:11px !important;">LIVE ACCOUNT</span>
                        `;
                        el.setAttribute('style', 'display:flex !important; align-items:center !important; color:#26a69a !important;');
                    }
                });
            }
        }
    }

    // Ekdom fast interval (30ms)
    setInterval(forceEverythingToLive, 30);

    console.log("Universal Live Override Active.");
})();
