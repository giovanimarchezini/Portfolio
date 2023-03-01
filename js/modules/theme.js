export default function initTheme() {

}
const temaBtn = document.querySelector('.btn-theme');
const temaBtnMobile = document.querySelector('.btn-theme-mobile');
const root = document.querySelector('html');
const banner = document.getElementById('banner');
const iconLight = document.querySelector('.light');
const iconDark = document.querySelector('.dark');
const iconLightMobile = document.querySelector('.light-mobile');
const iconDarkMobile = document.querySelector('.dark-mobile');
iconDark.classList.add('ativo');
iconDarkMobile.classList.add('ativo');

temaBtn.addEventListener('click', mudarTema);
temaBtnMobile.addEventListener('click', mudarTema);

const light = localStorage.getItem('light-mode');

if (light) mudarTema(light);

function mudarTema() {
    root.classList.toggle('light-mode');

    if (root.classList.contains('light-mode')) {
        localStorage.setItem('light-mode', 1);
        banner.classList.remove('banner-bg')
        banner.classList.add('banner-bg-light');
        iconLight.classList.add('ativo');
        iconDark.classList.remove('ativo');
        iconLightMobile.classList.add('ativo');
        iconDarkMobile.classList.remove('ativo');
    } else {
        banner.classList.add('banner-bg');
        banner.classList.remove('banner-bg-light');
        localStorage.removeItem('light-mode');
        iconDark.classList.add('ativo');
        iconLight.classList.remove('ativo');
        iconDarkMobile.classList.add('ativo');
        iconLightMobile.classList.remove('ativo');
    }
}