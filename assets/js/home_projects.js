import { GithubApi } from './api.min.js'

export async function projectsList(){

    const containers = document.querySelectorAll('#project-list')
    const github = new GithubApi()
    const githubData = await github.repos()

    containers.forEach( container => {
        githubData.map(data => {
            if(data.homepage){
                const project = document.createElement('div')
                project.innerHTML = `
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                    <div class="link-container">
                        <a href="${data.homepage}">Demo</a>
                        <a href="${data.html_url}">Github</a>
                    </div>
                `;
                project.classList.add('project-box')
                container.appendChild(project)
            }
        })
    })
}