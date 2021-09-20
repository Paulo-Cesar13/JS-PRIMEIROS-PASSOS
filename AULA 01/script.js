function trocar() {
    if(document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('vermelho');

    } else {
        document.querySelector('button').classList.remove('vermelho');
        document.querySelector('button').classList.add('preto');
    }
}



/*
function verde () {
    document.querySelector('.nome').classList.remove('vermelho');
    document.querySelector('.nome').classList.remove('azul');
    document.querySelector('.nome').classList.add('verde');

}

function vermelho () {
    document.querySelector('.nome').classList.remove('verde');
    document.querySelector('.nome').classList.remove('azul');
    document.querySelector('.nome').classList.add('vermelho');

}

function azul () {
    document.querySelector('.nome').classList.remove('verde');
    document.querySelector('.nome').classList.remove('vermelho');
    document.querySelector('.nome').classList.add('azul');

}
*/
