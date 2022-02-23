function mudarModo(){//kd função deve ter uma funcionalidade (boa pratica)
    mudaClasses();//essa função é acionada a outra função
    mudaTexto();//essa também, uma funcção para acionar todas as demais
    //console.log('Cliquei!')
}//F12 no navegador, console vai mostrar se a ação tem resposta
function mudaClasses(){
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
}

function mudaTexto(){
    const lighMode = 'Light Mode'
    const darkMode = 'Dark Mode'
    if(body.classList.contains(darkModeClass)){//possivel de ver em F12 elements
        botao.innerHTML = lighMode
        h1.innerHTML = darkMode + ' ON'
        return
    }
    botao.innerHTML = darkMode
    h1.innerHTML = lighMode + ' ON'
}

const darkModeClass = 'dark-mode'//já que ocorre tanto, pode ser uma constante
const botao = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0]//da array, somente o elemento 0
const body = document.getElementsByTagName('body')[0]

botao.addEventListener('click',mudarModo)
