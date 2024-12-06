document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    // section sticky header
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const currentPosition = window.scrollY;
        if (currentPosition < heroHeight) {
            hideHeaderElements();
        } else {
            showHeaderElements();
        }
    })


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (b) {
            removeButtonIsActive();
            const tabTarget = b.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            // Remover todas as tabs com ACTIVE - se houver
            hideAllTabs();
            // Adicionar o ACTIVE na que foi clicada  
            tab.classList.add('shows__list--is-active');
            b.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openOrCloseAnswer)
    }
})

function hideHeaderElements() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function showHeaderElements() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

showHeaderElements

// section faq
function openOrCloseAnswer(element) {
    const classOpen = 'faq__questions__item--is-open';
    const elementParent = element.target.parentNode
    elementParent.classList.toggle(classOpen)
}

function removeButtonIsActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    console.log(tabsContainer)

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
