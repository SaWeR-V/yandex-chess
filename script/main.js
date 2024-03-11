import { mobileLayout } from "./mobileLayout.js";
import { playersCarouselDesktop, autoScrollDesktop, playersCarouselMobile } from "./scrollers.js";


const redLines = document.querySelectorAll('.running-line');
const redLineTop = document.querySelector('.line-top');
const redLineBottom = document.querySelector('.line-bottom');

function redlineRunningTxt() {
    let step = 0;
    let timer = setInterval(() => {
        step++;
        
        redLineTop.style.transform = `translateX(${-1 * step}px)`;
        redLineBottom.style.transform = `translateX(${-1 * step}px)`;

        if (Array.from(redLines).some(elem => elem.style.transform === 'translateX(-420px)')) {
            textInjection();
        }

        if (Array.from(redLines).some(elem => elem.style.transform === 'translateX(-2311px)')) {
            let redLineTopTxt = redLineTop.querySelectorAll('.running-line-txt');
            for (let i = 0; i < 3; i++) {
                redLineTop.style.transform = `translateX(0)`;
                redLineTopTxt[i].remove();
            }

            let redLineBottomTxt = redLineBottom.querySelectorAll('.running-line-txt');
            for (let i = 0; i < 3; i++) {
            redLineBottom.style.transform = `translateX(0)`;

                redLineBottomTxt[i].remove();
            }

            clearInterval(timer)
            redlineRunningTxt();
        }


    }, 10)

    function textInjection() {
        let redLineTxt = redLineTop.querySelectorAll('.running-line-txt');
        let injectableTxt = '';
        for (let txt of redLineTxt) {
            injectableTxt += `<h3 class="running-line-txt">${txt.textContent}</h3>`
        }
        
        redLineTop.insertAdjacentHTML('beforeend', injectableTxt);
        redLineBottom.insertAdjacentHTML('beforeend', injectableTxt);
    }
}



redlineRunningTxt();





function scrollToBlock() {
    const donateBtn = document.querySelector('.donate');
    const learnMoreBtn = document.querySelector('.learn-more');
    const explanationBlock = document.querySelector('.explanation');
    const playersBlock = document.querySelector('.players');

    donateBtn.addEventListener('click', () => {
        explanationBlock.scrollIntoView({behavior: "smooth", inline: "start"})
    })

    learnMoreBtn.addEventListener('click', () => {
        playersBlock.scrollIntoView({behavior: "smooth", inline: "start"})
    })
};

scrollToBlock();


if (window.innerWidth > 768) {
    playersCarouselDesktop();
    setInterval(() => autoScrollDesktop(), 4000);
}

if (window.innerWidth <= 480  || window.screen.width <= 480) {
    mobileLayout();
    playersCarouselMobile();
}