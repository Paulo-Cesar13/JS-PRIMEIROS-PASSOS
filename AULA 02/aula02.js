function trocarimagem (filename, nomeanimal) {
    document.querySelector('.imagem').setAttribute('src', 'imagem/'+ filename);
    document.querySelector('imagem').getAttribute('data-animal'+nomeanimal);

}

function pegarAnimal () {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert('O nome do Aniamal é: '+ animal);
}