import initSkills from './modules/skills-fetch.js';
import initGit from './modules/github-api-fetch.js';
import initTheme from './modules/theme.js';
import initAnimacao from './modules/anima-scroll.js';

initGit()
initSkills();
initTheme();
initAnimacao();

const voltarTopo = document.querySelector('.voltar-topo');
const header = document.getElementById('header');
const menuLink = document.querySelector('.menu-links');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add("ativo");

    } else {
        header.classList.remove("ativo");;
    }

    if (window.scrollY > 400) {
        voltarTopo.style.display = 'block';
    } else {
        voltarTopo.style.display = 'none';
    }
});




