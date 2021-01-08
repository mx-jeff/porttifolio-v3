import { GithubApi } from './api.js'

export function projectsList(){
    const container = document.querySelector('#project-list')
    // console.log(container)
    const github = new GithubApi()
    github.repos().then(data => data.map(repo => console.log(repo)))
}