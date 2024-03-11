import { stagesToggle } from "./stagesToggle.js";

export function mobileLayout() {
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


    const playersBtns = document.querySelector('.players-btns-container');
    const playerCards = document.querySelector('.players-cards');
    const playersCounter = document.querySelector('.players-counter');

    playersBtns.remove();

    playerCards.insertAdjacentElement('afterend', playersBtns);
    playersCounter.innerHTML = `<p class="counter-mobile">1<span class="semitransparent">/6</span></p>`;



    stagesToggle();
}   