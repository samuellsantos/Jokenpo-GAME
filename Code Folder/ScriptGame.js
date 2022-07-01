let stone = document.getElementById('pedra')
let paper = document.getElementById('papel')
let scissor = document.getElementById('tesoura')

let play = document.querySelector('h2')
play.addEventListener('click', startGame)

let res = document.getElementById('resultado')



function startGame(){
    var values = ['pedra', 'papel', 'tesoura']
    var rand = Math.floor(Math.random()*values.length)
    var rValue = values[rand]

    if(stone.checked || paper.checked || scissor.checked){
        res.style.display = 'block'
        if(stone.checked){
            if(rValue == 'pedra'){
                res.innerHTML = `Você escolheu <strong>PEDRA</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto <strong>EMPATOU</strong>`
            }else if(rValue == 'tesoura'){
                res.innerHTML = `Você escolheu <strong>PEDRA</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto você <strong>GANHOU</strong>`
            }else{
                res.innerHTML = `Você escolheu <strong>PEDRA</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto você <strong>PERDEU</strong>`
            }
    
    
        }else if(paper.checked){
            if(rValue == 'papel'){
                res.innerHTML = `Você escolheu <strong>PAPEL</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto <strong>EMPATOU</strong>`
            }else if(rValue == 'pedra'){
                res.innerHTML = `Você escolheu <strong>PAPEL</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto Você <strong>GANHOU</strong>`
            }else{
                res.innerHTML = `Você escolheu <strong>PAPEL</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto Você <strong>PERDEU</strong>`
            }
        }else if(scissor.checked){
            if(rValue == 'tesoura'){
                res.innerHTML = `Você escolheu <strong>TESOURA</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto <strong>EMPATOU</strong>`
            }else if(rValue == 'papel'){
                res.innerHTML = `Você escolheu <strong>TESOURA</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto você <strong>GANHOU</strong>`
            }else{
                res.innerHTML = `Você escolheu <strong>TESOURA</strong>, a máquina escolheu <srong>${rValue}</strong>, portanto você <strong>PERDEU</strong>`
            }
        }
    }else{
        alert('Você precisa escolher um item para iniciar!')
    }
}
