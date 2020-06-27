document.querySelectorAll('img')
    .forEach(image => image.addEventListener('click', () => {
        const body = document.querySelector('body')
        console.log(body.style.backgroundColor)
        body.style.backgroundColor =  body.style.backgroundColor == "rgb(233, 181, 19)" ? "rgb(234, 98, 22)" : "rgb(233, 181, 19)"
        document.querySelectorAll('img').forEach(image => image.classList.toggle('first'))
    }))