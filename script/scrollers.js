const back = document.querySelector('.players-back');
const next = document.querySelector('.players-next');
const players = document.querySelectorAll('.card');
const playersCounter = document.querySelector('.players-counter').querySelector('p');


export function playersCarouselDesktop() {
    const players = document.querySelectorAll('.card');

    next.addEventListener('click', () => {
        for (let i = 0; i < players.length; i++) {
            players[i].style.transform = `translateX(calc(${-100 * 3}% - 54px)`;
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

export function autoScrollDesktop() {
    for (let i = 0; i < players.length; i++) {
        if (players[i].style.transform !== 'translateX(calc(-300% - 54px))') {
        
            players[i].style.transform = `translateX(calc(${-100 * 3}% - 54px)`;
            
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

export function playersCarouselMobile() {
    let counter = 0;

    next.addEventListener('click', () => {
        let playersCounter = document.querySelector('.players-counter').querySelector('p');
        counter++;

        players.forEach(player => {
            player.style.transform = `translateX(calc(${-100 * counter}%))`;
        })

        playersCounter.firstChild.textContent = counter + 1; 

        if (counter > 0) {
            back.disabled = false;
        }
        
        if ((players.length - 1) === counter) {
            next.disabled = true;
            playersCounter.lastChild.classList.remove('semitransparent');
        }
    });

    back.addEventListener('click', () => {
        let playersCounter = document.querySelector('.players-counter').querySelector('p');
        players.forEach(player => {
            player.style.transform = `translateX(calc(${-100 * (counter - 1)}%))`;
        })

        counter--;
        playersCounter.firstChild.textContent = counter + 1;

        if (counter === 0) {
            back.disabled = true;
        }

        if ((players.length - 1) !== counter) {
            next.disabled = false;
            playersCounter.lastChild.classList.add('semitransparent');
        }
    });

    function autoScrollMobile() {
        let playersCounter = document.querySelector('.players-counter').querySelector('p');

        counter++;
        players.forEach(player => {
            player.style.transform = `translateX(calc(${-100 * counter}%))`;
        })

        playersCounter.firstChild.textContent = counter + 1;

        if (counter > 0) {
            back.disabled = false;
        }
        
        if ((players.length - 1) === counter) {
            next.disabled = true;
            playersCounter.lastChild.classList.remove('semitransparent');
        }

        if (counter !== players.length) {
            setTimeout(autoScrollMobile, 4000)
        }

        else {
            autoScrollBackward();
        }


        function autoScrollBackward() {
            let playersCounter = document.querySelector('.players-counter').querySelector('p');
    
            if (counter > 0) {
                players.forEach(player => {
                    player.style.transform = `translateX(calc(${-100 * (counter - 1)}%))`;
                })
                counter--;
                playersCounter.firstChild.textContent = counter + 1;
    
                if (counter === 0) {
                    back.disabled = true;
                }
    
                if ((players.length - 1) !== counter) {
                    next.disabled = false;
                    playersCounter.lastChild.classList.add('semitransparent');
                }
    
                
                setTimeout(autoScrollBackward, 4000)
                
            }
    
            else {
                autoScrollMobile();
            }
        };
    };

    setTimeout(autoScrollMobile, 4000);

};