let carImage = "center / contain url('car2.png') no-repeat"
document.querySelector('.unlock').addEventListener('click', () => {
    document.querySelector('.unlock').classList.add('clicked')
    document.querySelector('.lock').classList.remove('clicked')
    carImage = "center / contain url('car2opened.png') no-repeat"
    document.querySelector('.status').style.setProperty('--car-image', carImage)
})

document.querySelector('.lock').addEventListener('click', () => {
    document.querySelector('.lock').classList.add('clicked')
    document.querySelector('.unlock').classList.remove('clicked')
    carImage = "center / contain url('car2.png') no-repeat"
    document.querySelector('.status').style.setProperty('--car-image', carImage)
})