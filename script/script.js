const redLines = document.querySelectorAll('.running-line');

function infiniteScroll() {
    let step = 1;
    let timer = setInterval(() => {
        step++;
        for (let redLine of redLines) {
        redLine.style.transform = `translateX(${-1 * step}px)`;

        if (redLine.style.transform === 'translateX(-420px)') {
            textInjection();
        }

        if (redLine.style.transform === 'translateX(-2311px)') {
            let redLineTxt = document.querySelectorAll('.running-line-txt');
            for (let i = 0; i < 3; i++) {
                redLine.style.transform = `translateX(0)`;
                redLineTxt[i].remove();
            }
            clearInterval(timer)
            infiniteScroll();
        }
    }
    }, 10)

}

function textInjection() {
    let redLineTxt = redLines[0].querySelectorAll('.running-line-txt');
    let injectableTxt = '';
    for (let txt of redLineTxt) {
        injectableTxt += `<h3 class="running-line-txt">${txt.textContent}</h3>`
    }

    console.log(injectableTxt)
    // for (let redLine of redLines) {
    //     redLine.insertAdjacentHTML('beforeend', injectableTxt);
    // }
}

// infiniteScroll();

const back = document.querySelector('.back');
const next = document.querySelector('.next');
const playersCounter = document.querySelector('.players-counter').querySelector('p');
const players = document.querySelectorAll('.card');

function playersCarousel() {
    next.addEventListener('click', () => {
        for (let i = 0; i < players.length; i++) {
            players[i].style.transform = `translateX(${-100 * 3}%)`;
        }
        back.disabled = false;
        next.disabled = true;

        playersCounter.firstChild.textContent = '6';
        playersCounter.lastChild.classList.remove('semitransparent');
    })

    back.addEventListener('click', () => {
        for (let i = 0; i < players.length; i++) {
            players[i].style.transform = `translateX(0%)`;
        }
        back.disabled = true;
        next.disabled = false;

        playersCounter.firstChild.textContent = '3';
        playersCounter.lastChild.classList.add('semitransparent');
    })

};

function autoScrollDesktop() {
    for (let i = 0; i < players.length; i++) {
        if (players[i].style.transform !== 'translateX(-300%)') {
        
            players[i].style.transform = `translateX(${-100 * 3}%)`;
            
            back.disabled = false;
            next.disabled = true;

            playersCounter.firstChild.textContent = '6';
            playersCounter.lastChild.classList.remove('semitransparent');
        }
        else {
            players[i].style.transform = `translateX(0%)`;
            playersCounter.firstChild.textContent = '3';
            playersCounter.lastChild.classList.add('semitransparent');

            back.disabled = true;
            next.disabled = false;
        }
    }
};


if (window.outerWidth > 1300) {
    playersCarousel();
    setInterval(() => autoScrollDesktop(), 4000);
}


function scrollToBlock() {
    const donateBtn = document.querySelector('.donate');
    const learnMoreBtn = document.querySelector('.learn-more');
    const explanationBlock = document.querySelector('.explanation');
    const playersBlock = document.querySelector('.players');

    donateBtn.addEventListener('click', () => {
        explanationBlock.scrollIntoView({behavior: "smooth", inline: "start"})
    })

    learnMoreBtn.addEventListener('click', ()=> {
        playersBlock.scrollIntoView({behavior: "smooth", inline: "start"})
    })
}

scrollToBlock();