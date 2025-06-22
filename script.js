// Função para download do CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Curriculum Matheus (3).pdf';
    link.download = 'Curriculum Matheus Alende.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Função para rolar suavemente para seções
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Cursor personalizado
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorTrail.style.transform = 'scale(0.6)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorTrail.style.transform = 'scale(1)';
});

// Partículas de fundo
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botões CTA
document.querySelector('.cta-button.primary').addEventListener('click', function() {
    scrollToSection('projects');
});

document.querySelector('.cta-button.secondary').addEventListener('click', function() {
    downloadCV();
});

// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Header transparente no scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    }
});

// Navegação ativa baseada na seção visível
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});

// Efeito de digitação
function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efeito de digitação quando a página carregar
window.addEventListener('load', () => {
    const typingElement = document.querySelector('.typing-text');
    const originalText = typingElement.textContent;
    typeWriter(typingElement, originalText, 80);
});

// Formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    // Criar mensagem profissional para WhatsApp
    const whatsappMessage = `🚀 *Nova Mensagem do Portfolio*

👤 *Nome:* ${name}
📧 *Email:* ${email}

💬 *Mensagem:*
${message}

---
*Enviado através do portfolio de Matheus Alende*
*Desenvolvedor Web & Engenheiro de Software*`;
    
    const whatsappUrl = `https://wa.me/5567999248110?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    this.reset();
});

// Efeitos de hover nos cards de redes sociais
document.querySelectorAll('.social-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Animação de scroll suave para o indicador de scroll
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    scrollToSection('about');
});

// Efeito de brilho nos botões
document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Efeito de loading da página
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Criar partículas quando a página carregar
window.addEventListener('load', createParticles);

// Suporte a teclado para acessibilidade
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Fechar qualquer modal ou menu aberto
        const mobileMenu = document.querySelector('.mobile-menu-btn');
        if (mobileMenu.getAttribute('aria-expanded') === 'true') {
            mobileMenu.setAttribute('aria-expanded', 'false');
        }
    }
});

// Menu mobile funcionalidade
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
});

// Botão Voltar ao Topo
const backToTopBtn = document.getElementById('back-to-top');

// Mostrar/ocultar botão baseado no scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Funcionalidade do botão voltar ao topo
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

console.log('Portfolio carregado com sucesso! 🚀');
