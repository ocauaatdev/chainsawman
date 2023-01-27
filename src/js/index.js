const botaoTrailer = document.querySelector('.botao')
const modal = document.querySelector('.modal')
const botaoFechar = document.querySelector('.botao-fechar')
const video = document.getElementById('video')
const linkVideo = video.src

console.log(linkVideo)

botaoTrailer.addEventListener("click", () =>{
    modal.classList.add('aberto')

    video.setAttribute('src', linkVideo)
})

botaoFechar.addEventListener("click", () =>{
    modal.classList.remove('aberto')

    video.setAttribute('src', '')
})
