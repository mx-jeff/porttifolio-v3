import { GithubApi } from './api.js'

export async function projectsList(){
    const container = document.querySelector('#project-list')
    // console.log(container)
    const github = new GithubApi()
    const githubData = await github.repos()
    githubData.map(data => {
        if(data.homepage){
            // const link = document.createElement('a')
            // link.href = data.homepage
            // link.innerText = data.name
            // link.classList.add('project-link')
            // container.appendChild(link)

            const project = document.createElement('div')
            project.innerHTML = `
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <div class="link-container">
                    <a href="${data.homepage}">Visualizar projeto</a>
                    <a href="${data.repo}">Repositorio</a>
                </div>
            `;
            project.classList.add('project')
            container.appendChild(project)
        }
    })
}

projectsList()