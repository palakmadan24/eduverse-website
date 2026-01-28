window.showMenu = function() {
    document.getElementById('nav-links').style.right = '0';
}

window.hideMenu = function() {
    document.getElementById('nav-links').style.right = '-200px';
}

document.addEventListener('DOMContentLoaded', function() {  // ← FIXED COMMA!
    console.log('Eduverse JS Fully Active! - script.js:10');
    
    // Navbar glass effect
    window.onscroll = () => {
        const nav = document.querySelector('nav');
        if (nav && window.scrollY > 50) {
            nav.style.background = 'rgba(255,255,255,0.95)';
            nav.style.backdropFilter = 'blur(10px)';
            nav.style.boxShadow = '0 3px 20px rgba(0,0,0,0.1)';
        } else if (nav) {
            nav.style.background = 'transparent';
        }
    }
    
    // Program cards hover
    document.querySelectorAll('.program-card-slide').forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.onmouseenter = () => card.style.transform = 'translateY(-10px)';
        card.onmouseleave = () => card.style.transform = 'translateY(0)';
    });
    
    // Gallery images zoom
    document.querySelectorAll('.auto-gallery img').forEach(img => {
        img.style.transition = 'transform 0.4s ease';
        img.onmouseenter = () => img.style.transform = 'scale(1.05)';
        img.onmouseleave = () => img.style.transform = 'scale(1)';
    });
    
    // Testimonials hover
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.onmouseenter = () => card.style.transform = 'translateY(-8px)';
        card.onmouseleave = () => card.style.transform = 'translateY(0)';
    });
    
    // Newsletter form
    document.querySelector('.newsletter')?.addEventListener('submit', e => {
        e.preventDefault();
        alert('Subscribed to Eduverse!');
        e.target.reset();
    });
    
    // Hero button
    document.querySelector('.hero-btn')?.addEventListener('mouseenter', function() {
        this.style.background = '#28A745';
        this.style.transform = 'translateY(-2px)';
    });
    document.querySelector('.hero-btn')?.addEventListener('mouseleave', function() {
        this.style.background = 'transparent';
        this.style.transform = 'translateY(0)';
    });
    
    // Back to top button (complete the code)
    const backBtn = document.createElement('button');
    backBtn.innerHTML = '↑';
    backBtn.style.cssText = `position:fixed;bottom:25px;right:25px;width:50px;height:50px;border-radius:50%;background:#28A745;color:white;border:none;cursor:pointer;font-size:20px;display:none;opacity:0;transition:all 0.3s ease;z-index:999;`;
    document.body.appendChild(backBtn);
    
    window.onscroll = () => {
        if(window.scrollY > 300) {
            backBtn.style.display = 'block';
            backBtn.style.opacity = '1';
        } else {
            backBtn.style.opacity = '0';
            setTimeout(() => backBtn.style.display = 'none', 300);
        }
    };
    
    backBtn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
});
