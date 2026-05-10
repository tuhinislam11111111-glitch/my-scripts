(function() {
    'use strict';

    // Exact Green Shade from Quotex Live
    const liveGreen = '#26a69a'; 

    function forceLiveInterface() {
        // 1. Target Status Container (Demo text and cap icon)
        const status = document.querySelector('.SfrTV.Bx7Ua');
        
        if (status) {
            // Puro element-er bhetore notun SVG ebong Text dhukie deya
            status.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 6px; display: inline-block;">
                    <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" fill="${liveGreen}"/>
                </svg>
                <span style="color: ${liveGreen} !important; font-weight: 900 !important; font-size: 11px !important; letter-spacing: 0.5px !important;">LIVE ACCOUNT</span>
            `;

            // Style attribute freeze kora jate color change na hoy
            status.setAttribute('style', `color: ${liveGreen} !important; display: flex !important; align-items: center !important; background: none !important; border: none !important;`);
        }

        // 2. Balance Force (White color)
        const balance = document.querySelector('.pVBHU');
        if (balance) {
            balance.setAttribute('style', 'color: #ffffff !important; font-weight: 700 !important; font-size: 18px !important;');
        }
    }

    // Ekdom fast interval (20ms)
    setInterval(forceLiveInterface, 20);

    console.log("Ultra Force Script Active.");
})();
