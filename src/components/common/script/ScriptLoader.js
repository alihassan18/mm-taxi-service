'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DynamicScriptsLoader = () => {
    const { pathname } = useRouter(); // Gets the current route/pathname

    useEffect(() => {
        // Array of script sources
        const scripts = [
            "/assets/js/vendor/jquary-3.6.0.min.js",
            "/assets/js/vendor/bootstrap.min.js",
            "/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js",
            "/assets/js/vendor/jquery.ajaxchimp.min.js",
            "/assets/js/vendor/popper.min.js",
            "/assets/js/vendor/swiper.min.js",
            "/assets/js/vendor/jquery.datetimepicker.full.js",
            "/assets/js/vendor/jquery.nice-select.min.js",
            "/assets/js/vendor/venobox.min.js",
            "/assets/js/vendor/smooth-scroll.js",
            "/assets/js/vendor/wow.min.js",
            "/assets/js/book-ride.js",
            "/assets/js/main.js"
        ];

        // Function to load a script
        const loadScript = (src) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
            return script;
        };

        // Function to remove all loaded scripts
        const removeScripts = () => {
            scripts.forEach((src) => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };

        // Load all scripts
        const loadedScripts = scripts.map((src) => loadScript(src));

        // Cleanup function to remove scripts on route change
        return () => {
            removeScripts();
            loadedScripts.forEach(script => script.remove());
        };

    }, []); // Depend on pathname to trigger effect on route change

    return null; // This component does not render anything
};

export default DynamicScriptsLoader;
