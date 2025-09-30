document.addEventListener('DOMContentLoaded', () => {
    const heroCards = document.querySelectorAll('.hero-card');

    // ฟังก์ชันสำหรับตั้งค่าสถานะฮีโร่ที่ถูกเลือก
    const setActiveHero = (heroId) => {
        heroCards.forEach(card => {
            card.classList.remove('selected');
        });

        const selectedHero = document.querySelector(`.hero-card[data-hero-id="${heroId}"]`);
        if (selectedHero) {
            selectedHero.classList.add('selected');
        }
    };

    // 1. จัดการการคลิกการ์ด
    heroCards.forEach(card => {
        card.addEventListener('click', () => {
            const heroId = card.getAttribute('data-hero-id');
            setActiveHero(heroId);

            // อัปเดต URL ให้ตรงกับ heroId ที่เลือก
            const newUrl = `${window.location.origin}${window.location.pathname}?heroId=${heroId}`;
            // ใช้ pushState เพื่ออัปเดต URL โดยไม่ต้องโหลดหน้าเว็บใหม่
            window.history.pushState({ heroId: heroId }, '', newUrl);

            console.log(`ฮีโร่ที่เลือก: ${heroId}`);
        });
    });

    // 2. จัดการการโหลดหน้าเว็บครั้งแรก
    const urlParams = new URLSearchParams(window.location.search);
    const initialHeroId = urlParams.get('heroId');

    if (initialHeroId) {
        setActiveHero(initialHeroId);
    } else {
        // ทางเลือก: เลือกฮีโร่ตัวแรก (Adam Warlock) เป็นค่าเริ่มต้น หากไม่มี ID ใน URL
        setActiveHero('0');
    }

    // จัดการปุ่มย้อนกลับ/ไปข้างหน้าของเบราว์เซอร์
    window.addEventListener('popstate', (event) => {
        const params = new URLSearchParams(window.location.search);
        const heroId = params.get('heroId');
        setActiveHero(heroId);
    });
});