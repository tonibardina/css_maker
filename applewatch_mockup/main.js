const inputColor = document.querySelector('#color')
const inputScreen = document.querySelector('#screen')

inputColor.addEventListener('change', (event) => {
    document.querySelector(':root').style.setProperty('--secondary-color', event.target.value)
})


inputScreen.addEventListener('change', (event) => {
    try {
        document.querySelector('.screenImage').src = event.target.value
    } catch (e) {
        document.querySelector('.screenImage').src = 'https://i.ibb.co/HzDCtd9/Asset-4.png'
    }
})

