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

    stages.innerHTML = `<div class="block first-block">
                            <div class="number one">1</div>
                            <p class="stage">Строительство железнодорожной магистрали Москва-Васюки</p>
                            <div class="number two">2</div>
                            <p class="stage second-stage">Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p>
                        </div>
                        <div class="block">
                            <div class="number three">3</div>
                            <p class="stage third-stage">Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p>
                        </div>
                        <div class="block">
                            <div class="number four">4</div>
                            <p class="stage fourth-stage">Строительство дворца для турнира</p>
                            <div class="number five">5</div>
                            <p class="stage fifth-stage">Размещение гаражей для гостевого автотранспорта</p>
                        </div>
                        <div class="block">
                            <div class="number six">6</div>
                            <p class="stage sixth-stage">Постройка сверхмощной радиостанции<br>для передачи всему миру сенсационных результатов</p>
                        </div>
                        <div class="block">
                            <div class="number seven">7</div>
                            <p class="stage last-stage">Создание аэропорта «Большие Васюки» <br>с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос<br>и Мельбурн</p>
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

    

    function stagesToggle() {
        let stageCounter = 0;


        const fastAccessBtns = document.querySelectorAll('.fast_access_stage');
        for (let i = 1; i < stageBlocks.length; i++) {
            fastAccessBtns.forEach(btn => {
                btn.id = i++;
                btn.addEventListener('click', (event) => {
                    fastAccessBtns.forEach(active => {
                        active.classList.remove('stage_selected');
                    });
    
                    stageBlocks.forEach(block => {
                        block.style.transform = `translateX(calc(${-100 * (btn.id - 1)}% - ${40 * (btn.id - 1)}px))`;
                        event.target.classList.add('stage_selected');

                        if (btn.id > 1) {
                            stageBlocks[0].style.marginRight = 0;
                            block.style.transform = `translateX(calc(${-100 * (btn.id - 1)}% - ${25 * (btn.id - 1)}px))`;
                        }

                        else {
                            stageBlocks[0].style.marginRight = '20px';
                        }
                    })
    
                    const activeBtn = event.target;
                    stageCounter = +activeBtn.id - 1;

                    if (activeBtn.id > 1) {
                        document.querySelector('.stage-back').disabled = false
                    }
                    else {
                        document.querySelector('.stage-back').disabled = true
                    }
    
                    if (+(activeBtn.id - 1) === (stageBlocks.length - 1)) {
                        document.querySelector('.stage-next').disabled = true
                    }
                    else {
                        document.querySelector('.stage-next').disabled = false
                    }
                })
    
            })
        };


        const stageNext = document.querySelector('.stage-next');
        const stageBack = document.querySelector('.stage-back');

        stageNext.addEventListener('click', () => {
            stageCounter++;
            stageBlocks.forEach(block => {
                block.style.transform = `translateX(calc(${-100 * stageCounter}% - ${40 * stageCounter}px))`;

                if (stageCounter > 1) {
                    stageBlocks[0].style.marginRight = 0;
                    block.style.transform = `translateX(calc(${-100 * stageCounter}% - ${25 * stageCounter}px))`;
                }
            })

            if (stageCounter > 0) {
                stageBack.disabled = false;
            }

            if (stageCounter === stageBlocks.length - 1) {
                stageNext.disabled = true;
            }

            fastAccessBtns.forEach(btn => {
                btn.classList.remove('stage_selected');
                if (stageCounter + 1 === +btn.id) {
                    btn.classList.add('stage_selected')
                }
            })
        })

        stageBack.addEventListener('click', () => {

            stageBlocks.forEach(block => {
                block.style.transform = `translateX(calc(${-100 * (stageCounter - 1)}% - ${40 * (stageCounter - 1)}px))`
                
                if (stageCounter > 1) {
                    block.style.transform = `translateX(calc(${-100 * (stageCounter - 1)}% - ${25 * (stageCounter - 1)}px))`;
                }

                if (stageCounter === 1) {
                    stageBlocks[0].style.marginRight = '20px'
                }
            })

            stageCounter--;


            if (stageCounter === 0) {
                stageBack.disabled = true
            }

            if (stageCounter !== stageBlocks.length - 1) {
                stageNext.disabled = false;
            }

            fastAccessBtns.forEach(btn => {
                btn.classList.remove('stage_selected')
                if (stageCounter + 1 === +btn.id) {
                    btn.classList.add('stage_selected')
                }
            })

        })
    }

    stagesToggle();
}   

if (window.innerWidth <= 480) {
    mobileLayout();
}