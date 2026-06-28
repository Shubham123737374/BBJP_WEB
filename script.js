// --- 1. Language Toggle Logic (English is Default) ---
let currentLang = 'en';

function toggleLanguage() {
    const enElements = document.querySelectorAll('.en');
    const hiElements = document.querySelectorAll('.hi');
    const toggleBtn = document.getElementById('lang-toggle');

    if (currentLang === 'en') {
        // Switch to Hindi
        enElements.forEach(el => el.style.display = 'none');
        hiElements.forEach(el => el.style.display = ''); 
        toggleBtn.innerHTML = '🌐 English';
        currentLang = 'hi';
    } else {
        // Switch back to English
        hiElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = ''); 
        toggleBtn.innerHTML = '🌐 Hindi';
        currentLang = 'en';
    }
}

// --- 2. 3-Second Splash Screen (No Music) ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
        }, 500); 
    }, 3000); // 3000 milliseconds = 3 seconds
});