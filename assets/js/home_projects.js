import { GithubApi } from './api.min.js'

export async function projectsList(){
    const container = document.querySelector('#project-list')
    const github = new GithubApi()
    const githubData = await github.repos()

    githubData.map(data => {
        if(data.homepage){
            const project = document.createElement('div')
            project.innerHTML = `
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                <div class="link-container">
                    <a href="${data.homepage}">Visualizar projeto</a>
                    <a href="${data.html_url}">Repositorio</a>
                </div>
            `;
            project.classList.add('project-box')
            container.appendChild(project)
        }
    })
}