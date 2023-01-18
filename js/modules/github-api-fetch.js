export default function initGit(){

}
const groupProjetos = document.querySelector('.group-card');
const scrollButton = document.querySelectorAll('.slide-btn');
const scrollGroup = document.querySelector('.slide-btn-group');
const scrolBar = document.querySelector('.slide-btn-group span');



async function fetchGit(url) {
    const gitResponse = await fetch(url);
    const gitJson = await gitResponse.json();
   
    gitJson.forEach(projeto =>{
        const divProject = createProject(projeto);
        groupProjetos.appendChild(divProject);
    });
    verificaScroll();
}

function verificaScroll(){
    scrollButton.forEach(() =>{
        if(groupProjetos.childElementCount > 3){
            scrollGroup.style.display = 'flex';
        }
        if(groupProjetos.childElementCount < 6){
            scrollButton[2].style.display = 'none';
            scrolBar.style.height = '80px';
        }
    });
}


function createProject(projeto){
    const divProject = document.createElement('div');
    divProject.classList.add('card')
    divProject.innerHTML = `<a href="${projeto.homepage}" target="_blank"><img src="https://raw.githubusercontent.com/giovanimarchezini/${projeto.name}/main/imagem-destacada/${projeto.name}.jpg"></a><div class="projetos-info"><a href="${projeto.homepage}" target="_blank">${projeto.name}</a><a href="${projeto.html_url}" target="_blank">Link repositório git</a></div>`;

    return divProject;
}

//<span>${new Intl.DateTimeFormat('pt-BR').format(new Date(projeto.created_at))}</span>


fetchGit("https://api.github.com/users/giovanimarchezini/repos");