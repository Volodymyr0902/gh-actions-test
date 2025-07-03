document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const h = document.querySelector('body')
    const p = document.createElement('p')
    const text = document.createTextNode('How are you?')
    p.appendChild(text)
    h.appendChild(p)
})
