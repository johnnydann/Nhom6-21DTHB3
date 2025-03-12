// JavaScript để xử lý cuộn trang mượt mà và thêm hiệu ứng
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý cuộn trang mượt
    document.querySelectorAll('nav a, .footer-nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Thêm lớp CSS khi cuộn xuống
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Thêm animation cho các phần tử khi cuộn đến
    const sections = document.querySelectorAll('section');
    
    const fadeInElements = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };
    
    // Chạy một lần khi trang tải xong
    fadeInElements();
    
    // Sau đó chạy khi cuộn
    window.addEventListener('scroll', fadeInElements);

    // Thêm hiệu ứng hover cho các mục portfolio
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s ease';
        });
    });

    // Thêm hiệu ứng cho các thẻ kỹ năng
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Xử lý Form liên hệ
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy giá trị từ form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Hiển thị thông báo gửi thành công (trong trường hợp thực tế sẽ gửi dữ liệu đến máy chủ)
            alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại với bạn sớm.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Thêm hiệu ứng cho các service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Thêm hiệu ứng cho hình ảnh profile
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        setTimeout(() => {
            profileImg.style.transform = 'scale(1.05)';
            setTimeout(() => {
                profileImg.style.transform = 'scale(1)';
            }, 500);
        }, 1000);
    }
});