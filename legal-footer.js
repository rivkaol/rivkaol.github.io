document.addEventListener("DOMContentLoaded", function() {
    // הגדרת עיצוב הפוטר - מותאם למותג שלך (ירוק וזהב)
    const footerHTML = `
    <footer style="margin-top: 50px; padding: 30px 15px; font-family: 'Rubik', sans-serif; text-align: center; border-top: 1px solid rgba(27, 77, 62, 0.1); width: 100%; direction: rtl;">
        <p style="color: #1B4D3E; margin-bottom: 10px; font-size: 0.9rem;">© כל הזכויות שמורות לרבקה הולצברג</p>
        <nav style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; font-size: 0.85rem;">
            <a href="https://rivkaholtsberg.co.il/legal/privacy.html" target="_blank" style="color: #1B4D3E; text-decoration: none; opacity: 0.8;">מדיניות פרטיות</a>
            <span style="opacity: 0.3;">|</span>
            <a href="https://rivkaholtsberg.co.il/legal/terms.html" target="_blank" style="color: #1B4D3E; text-decoration: none; opacity: 0.8;">תנאי שימוש</a>
            <span style="opacity: 0.3;">|</span>
            <a href="https://rivkaholtsberg.co.il/legal/accessibility.html" target="_blank" style="color: #1B4D3E; text-decoration: none; opacity: 0.8;">הצהרת נגישות</a>
        </nav>
    </footer>
    `;

    // הזרקת הפוטר לסוף הדף
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
