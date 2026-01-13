let lastScrollTop = 0;
const header = document.getElementById('main-header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    if (scrollTop > 10) {
        header.classList.add('shadow-md');
    } else {
        header.classList.remove('shadow-md');
    }

    lastScrollTop = scrollTop;
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if(!mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.opacity = 0;
        setTimeout(() => {
            mobileMenu.style.transition = 'opacity 0.3s';
            mobileMenu.style.opacity = 1;
        }, 10);
    }
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

function toggleModal() {
    const modal = document.getElementById('privacy-modal');
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}