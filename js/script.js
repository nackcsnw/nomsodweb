const translations = {
    th: {
        "nav-home": "หน้าแรก",
        "nav-menu": "เมนูของเรา",
        "nav-gallery": "บรรยากาศร้าน",
        "nav-contact": "ติดต่อเรา",
        "hero-title": "เหล้า หลู้ ลาบ<br><span class=\"highlight\">อร่อยฟิน ทุกเมนู</span>",
        "hero-subtitle": "คาเฟ่สุดชิคขวัญใจวัยรุ่น มีเมนูหลากหลาย ครบจบในร้านเดียว ทั้งนมสด บิงซู โทสต์ และอาหารทานเล่น",
        "hero-btn": "ดูเมนูทั้งหมด <i class=\"fas fa-arrow-down\"></i>",
        "menu-title": "เมนูไฮไลท์",
        "filter-all": "ทั้งหมด",
        "filter-milk": "นมสด",
        "filter-bingsu": "บิงซู",
        "filter-toast": "โทสต์",
        "filter-snack": "ของทานเล่น",
        "menu-1-name": "ปังปิ้งราดช็อกโกแลต",
        "menu-2-name": "เซ็ทของทอดรวมมิตร",
        "menu-3-name": "ปังปิ้งแยมส้ม",
        "menu-4-name": "บิงซูภูเขาไฟ",
        "menu-5-name": "เฟรนช์ฟรายส์ดิปปิ้ง",
        "menu-6-name": "นมชมพูเย็น",
        "menu-7-name": "ปังปิ้งไมโลช็อกโกแลต",
        "gallery-title": "บรรยากาศชิลๆ",
        "footer-desc": "ความอร่อยที่ลงตัว นมสดแท้ 100% พร้อมเมนูขนมหวานมากมาย ที่เหล้า หลู้ ลาบ",
        "footer-contact-title": "ติดต่อเรา",
        "footer-address": "<i class=\"fas fa-map-marker-alt\"></i> 123 ซอยมหาวิทยาลัย ถ.สุขุมวิท กรุงเทพฯ",
        "footer-phone": "<i class=\"fas fa-phone-alt\"></i> 081-234-5678",
        "footer-hours": "<i class=\"fas fa-clock\"></i> เปิดทุกวัน 11:00 - 23:00 น.",
        "footer-social-title": "ติดตามเราได้ที่",
        "footer-copyright": "&copy; 2026 เหล้า หลู้ ลาบ. All rights reserved."
    },
    en: {
        "nav-home": "Home",
        "nav-menu": "Menu",
        "nav-gallery": "Atmosphere",
        "nav-contact": "Contact",
        "hero-title": "Lao Loo Lab<br><span class=\"highlight\">Delicious Every Bite</span>",
        "hero-subtitle": "The trendiest cafe for teens. A wide variety of menus in one place: Fresh Milk, Bingsu, Toast, and Snacks.",
        "hero-btn": "View Menu <i class=\"fas fa-arrow-down\"></i>",
        "menu-title": "Menu Highlights",
        "filter-all": "All",
        "filter-milk": "Milk",
        "filter-bingsu": "Bingsu",
        "filter-toast": "Toast",
        "filter-snack": "Snacks",
        "menu-1-name": "Chocolate Drizzled Toast",
        "menu-2-name": "Mixed Fried Snacks",
        "menu-3-name": "Orange Jam Toast",
        "menu-4-name": "Volcano Bingsu",
        "menu-5-name": "French Fries with Dips",
        "menu-6-name": "Iced Pink Milk",
        "menu-7-name": "Milo Chocolate Toast",
        "gallery-title": "Chill Vibes",
        "footer-desc": "Perfect taste, 100% fresh milk, and plenty of desserts at Lao Loo Lab.",
        "footer-contact-title": "Contact Us",
        "footer-address": "<i class=\"fas fa-map-marker-alt\"></i> 123 University Alley, Sukhumvit Rd, Bangkok",
        "footer-phone": "<i class=\"fas fa-phone-alt\"></i> 081-234-5678",
        "footer-hours": "<i class=\"fas fa-clock\"></i> Open Daily 11:00 - 23:00",
        "footer-social-title": "Follow Us",
        "footer-copyright": "&copy; 2026 Lao Loo Lab. All rights reserved."
    }
};

let currentLang = localStorage.getItem('appLang') || 'th';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.lang = lang;
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if(btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    setLanguage(currentLang);

    // Language Switcher Event Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Menu Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            menuCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                    // Trigger a reflow to restart animation if needed
                    void card.offsetWidth;
                    card.style.animation = 'fadeUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                    card.style.animation = 'none';
                }
            });
        });
    });
});
