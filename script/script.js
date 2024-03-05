const redLine = document.querySelector('.running-line');

function infiniteScroll() {
    let step = 1;
    let timer = setInterval(() => {
        step++;
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

    }, 10)

}

function textInjection() {
    let redLineTxt = document.querySelectorAll('.running-line-txt');
    for (let txt of redLineTxt) {
        redLine.innerHTML += `<h2 class="running-line-txt">${txt.textContent}</h2>`
    }
}

infiniteScroll();
