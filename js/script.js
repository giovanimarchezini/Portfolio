import initSkills from './modules/skills-fetch.js';
import initGit from './modules/github-api-fetch.js';
import initTheme from './modules/theme.js';

initGit()
initSkills();
initTheme();


const header = document.getElementById('header');

    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            header.style.boxShadow = ' inset 2000px 0px 0 var(--cor-3)';
        
        }else{
            header.style.boxShadow = 'inset 0px 0px 0 var(--cor-3)';
        }

        if(window.scrollY > 400){
            voltarTopo.style.display = 'block';
        }else{
            voltarTopo.style.display = 'none';
        }
    });



const voltarTopo = document.querySelector('.voltar-topo');

