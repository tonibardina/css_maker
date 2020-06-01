document.querySelector('button').addEventListener('click', (e) => {
    document.querySelector('body').style.setProperty('--animation', 'explote 1s linear')
    document.querySelector('button').innerHTML = 'Deleted!'
    document.querySelector('button').disabled = true
    setTimeout(() => {
        document.querySelector('body').style.setProperty('--boxShadow', 'none')
        document.querySelector('svg').style.opacity = '100%'
        document.querySelector('body').style.setProperty('--boxShadowPseudo', 'none')
    }, 950);
})