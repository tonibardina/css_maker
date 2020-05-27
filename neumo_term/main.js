let count = 10
let h1 = document.querySelector('h1')
h1.innerHTML = count

function updatedLights() {
    document.querySelectorAll('i').forEach(i => {
        if (parseInt(i.className) <= count) {
            i.style.backgroundColor = 'rgb(255, 165, 81)'
        } else {
            i.style.backgroundColor = '#202020'
        }  
    })
}

updatedLights()

document.querySelectorAll('i').forEach(i => {

    i.addEventListener('click', (event) => {
        count = event.target.className
        h1.innerHTML = count
        updatedLights()
    })
})