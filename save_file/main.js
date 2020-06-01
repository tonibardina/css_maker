document.querySelector('.main').addEventListener('click', (e) => {
    document.querySelector('.main').style.animation = 'move 1.5s linear'
    document.querySelector('.file').style.animation = 'save 1.5s linear'
    setTimeout(() => {
        document.querySelector('.main>p').innerHTML = 'Saved!'
        document.querySelector('.file').innerHTML = 'check'
        document.querySelector('.file').style.left = '35px'
    }, 1400);
})