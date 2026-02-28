document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    const header = document.querySelector('.header');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            header.classList.add('header--is-hidden');
        } else {
            header.classList.remove('header--is-hidden');
        }
    })
    
    // Seção das atrações, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(botoao) {
            const abaAlvo = botoao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            esconderTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botoao.target.classList.add('shows__tabs__button--is--active');
        })
    }

    // Seção FAQ, accordion das perguntas
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", abreOuFechaResposta);
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function esconderTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}