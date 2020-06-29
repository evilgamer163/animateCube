'use strict';

const cube = document.querySelector('.cube'),
    start = document.querySelector('.start'),
    pause = document.querySelector('.pause'),
    reset = document.querySelector('.reset'),
    speedText = document.querySelector('.speed-text');

let count = 0,
    rafId = '',
    isAnim = false;

const animateCube = () => {
    isAnim = true;
    count++;
    cube.style.left = count + 'px';
    rafId = requestAnimationFrame(animateCube);
};

const resetAnimate = () => {
    isAnim = false;
    count = 0;
    cube.style.left = count + 'px';
    cancelAnimationFrame(rafId);
};

start.addEventListener('click', () => {
    if(!isAnim) {
        animateCube();
    }
});

pause.addEventListener('click', () => {
    if(isAnim) {
        isAnim = false;
        cancelAnimationFrame(rafId);
    }
});

reset.addEventListener('click', () => {
    resetAnimate();
});

