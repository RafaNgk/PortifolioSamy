var cabecalho = document.getElementById('cabecalho');
var cabecalho__menu = document.getElementById('cabecalho__menu');
var apresentacao = document.getElementById('apresentacao');
var showSideBar = false;

function toogleSideBar(){
    showSideBar = !showSideBar;
    if(showSideBar){
        cabecalho__menu.style.marginLeft = '-5vw';
        cabecalho__menu.style.animationName = 'showSideBar';
        apresentacao.style.filter = 'blur(2px)'
    } 
    else{
        cabecalho__menu.style.marginLeft = '-100vw';
        cabecalho__menu.style.animationName = '';
        apresentacao.style.filter = ''
    }
}

function closeSideBar(){
    if(showSideBar){
        toogleSideBar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSideBar){
        toogleSideBar();
    }
});