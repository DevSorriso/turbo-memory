let jUmQuer = 0
let jDoisQuer = 0
let totalNumber = jUmQuer + jDoisQuer
let querem = 'Ambos os jogadores marcaram "sim" e garatiram a vaga no inferno. A troca de nudes está liberada'
let naoQuerem= 'Pelo menos um jogador marcou "não" e garantiu a vaga no céu. Não ocorrerá troca de nudes'

function transformJUm(){
    jUmQuer=1
    console.log(jUmQuer)
}

function transformJDois(){
    jDoisQuer=1
    console.log(jDoisQuer)
}   
function results(){
    if (jDoisQuer===1 && jUmQuer===1){
        document.getElementById('text').innerText= querem
    } else{
        document.getElementById('text').innerText= naoQuerem 
    }
}
function jesus(){
    document.getElementById('text')= 'jesus'
}