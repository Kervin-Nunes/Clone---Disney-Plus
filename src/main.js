document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    
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
})

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