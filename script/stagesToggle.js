export function stagesToggle() {
    let stageCounter = 0;

    const stageBlocks = document.querySelectorAll('.block');
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
};