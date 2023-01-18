export default function initSkills(){

}

async function fetchSkills(url)
{
    const skillsResponse = await fetch(url);
    const skillsJson = await skillsResponse.json();
    const texto = document.querySelector('.grid-1-skill p');
    const titulo = document.querySelector('.grid-1-skill h3');
    const icone = document.querySelectorAll('.grid-2-skill img');
    

    if(texto.innerHTML.length == '' && titulo.innerHTML.length == ''){
        titulo.innerHTML = skillsJson[0].Titulo;  
        texto.innerHTML = skillsJson[0].Texto;    
     }

     function mudarTexto(index){
        skillsJson.forEach((conteudo)=>{    
        });
        titulo.innerHTML = skillsJson[index].Titulo;
        texto.innerHTML = skillsJson[index].Texto;
     }
       

     icone.forEach((itemIcon, index) =>{
        itemIcon.addEventListener('click', () => {
            mudarTexto(index);
         });
         
        });
        
       
}

fetchSkills('./skills.json');
