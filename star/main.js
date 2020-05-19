document.querySelector('button').addEventListener('click', (event) => {
    event.target.className += ' animated'
    setTimeout(() => {
        event.target.className = 'noStar'
    },1000)
})