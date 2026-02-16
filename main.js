
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content-section');
    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    }
});

const sections = document.querySelectorAll('.content-section');
for (const section of sections) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
}

document.querySelector('h1').addEventListener('click', () => {
    if (!document.querySelector('.extra-info')) {
        const container = document.querySelector('.container');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = '바이브 코딩은 특히 프로토타이핑이나 개인 프로젝트, 예술적인 코딩과 같이 빠르게 아이디어를 탐색하고 실험하는 과정에서 빛을 발합니다. 정답이 없는 문제에 대해 다양한 해결책을 시도하며, 그 과정 자체를 즐기는 개발 문화의 일부로 볼 수 있습니다.';
        newParagraph.classList.add('extra-info');
        container.appendChild(newParagraph);
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
