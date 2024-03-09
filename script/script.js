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

const back = document.querySelector('.players-back');
const next = document.querySelector('.players-next');
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


if (window.innerWidth > 1300) {
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

    learnMoreBtn.addEventListener('click', () => {
        playersBlock.scrollIntoView({behavior: "smooth", inline: "start"})
    })
}

scrollToBlock();

function mobileLayout() {
    const anounce = document.querySelector('.anounce');
    const chessPlayers = document.querySelector('.chess-players');
    const tableRows = document.querySelectorAll('.table-row');
    const stages = document.querySelector('.scheme-container');


    document.querySelector('.header-invite').innerHTML = `Оплатите взнос на телеграммы<p>для организации Международного васюкинского турнира по шахматам</p>`;

    chessPlayers.remove();

    anounce.innerHTML = `Чтобы поддержать Международный васюкинский турнир <img src="./images/chess_players_small.png" class="chess-players"> посетите лекцию на тему: <span class="bolder-red">«Плодотворная дебютная идея»</span>`;
    tableRows[2].innerHTML =   `<td class="table-term">Плата за игру:</td>
                                <td class="table-value">20 коп.</td>`;
    tableRows[2].classList += ' unique';
    tableRows[3].innerHTML = `<td class="table-term">Стоимость входных билетов:</td>
                                <td class="table-value">50 коп.</td>`;
    document.querySelector('.old-price').textContent = '100 руб. ';
    document.querySelector('.blue-string').innerHTML = `По всем вопросам обращаться<p>в администрацию к К. Михельсону</p>`;

    stages.innerHTML = `<div class="block">
                            <div class="number one">1</div>
                            <p class="stage">Строительство железнодорожной магистрали Москва-Васюки</p>
                            <div class="number two">2</div>
                            <p class="stage second-stage">Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p>
                        </div>
                        <div class="block">
                            <div class="number">3</div>
                            <p class="stage">Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p>
                        </div>
                        <div class="block">
                            <div class="number">4</div>
                            <p class="stage">Строительство дворца для турнира</p>
                            <div class="number">5</div>
                            <p class="stage">Размещение гаражей для гостевого автотранспорта</p>
                        </div>
                        <div class="block">
                            <div class="number">6</div>
                            <p class="stage">Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</p>
                        </div>
                        <div class="block">
                            <div class="number">7</div>
                            <p class="stage last-stage">Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн</p>
                        </div>
                        `;
    
    stages.insertAdjacentHTML('afterend', `<div class="stages-toggles">
                                                <button class="back stage-back" disabled></button>
                                                <div class="fast_access_btns"></div>
                                                <button class="next stage-next"></button>
                                            </div>`);

    const stageBlocks = document.querySelectorAll('.block');
    const fastAccess = document.querySelector('.fast_access_btns');

    for (let i = 0; i < stageBlocks.length; i++) {                                        
        fastAccess.insertAdjacentHTML('afterbegin', `<div class="fast_access_stage"></div>`)
    };

    fastAccess.firstChild.classList.add('stage_selected');
}   

if (window.innerWidth < 376) {
    mobileLayout();
}