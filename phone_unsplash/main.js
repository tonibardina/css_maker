document.querySelector('.cardInfo').addEventListener('click', () => {
    document.querySelector('.cardInfo').style.width = 
        document.querySelector('.cardInfo').style.width === '100px'
            ? '15px'
            : '100px'
    document.querySelector('.cardInfo').style.justifyContent = 
        document.querySelector('.cardInfo').style.justifyContent === 'center'
        || document.querySelector('.cardInfo').style.justifyContent === ''
            ? 'flex-start'
            : 'center'

    document.querySelector('.cardInfo>span').classList.toggle('hidden')
    document.querySelector('.userImage').classList.toggle('hidden')
    document.querySelector('.userName').classList.toggle('hidden')
})

document.querySelector('.star').addEventListener('click', (event) => {
    document.querySelector('.star>span').classList.toggle('animated')
    document.querySelector('.star>span').classList.toggle('clicked')
})