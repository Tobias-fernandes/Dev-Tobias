function getProjects(){
    const urlGitHub = 'https://api.github.com/users/tobias-fernandes/repos';
    let loadingElement = document.getElementById('loading');

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            showProjects(response)
            loadingElement.style.display = 'none'
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
};

function showProjects(data) {
    let listElement = document.getElementById('my-projects-list');

    for(let i = 0; i < data.length; i++) {
        let a = document.createElement("a");
        a.href = data[i]['clone_url'];
        a.target = '_blank';
        a.title = data[i]['description'];
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        listElement.appendChild(a);
    }
}

getProjects();

const hamburger = document.querySelector(".btn-list");
const nav = document.querySelector(".cabecalho");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const closeHamburger = document.querySelector(".btn-close");
const navClose = document.querySelectorAll(".nav-links");

closeHamburger.addEventListener("click", () => {
    // Itera sobre cada elemento com a classe .nav-links
    navClose.forEach((link) => {
        // Procura o ancestral .cabecalho mais próximo
        const header = link.closest(".cabecalho");
        
        // Remove a classe "active" se encontrou o ancestral .cabecalho
        if (header) {
            header.classList.remove("active");
        }
    });
});

