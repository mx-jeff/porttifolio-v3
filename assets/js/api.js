export class GithubApi {
    url = "https://api.github.com/users/"

    constructor(user="DZ0Jeff"){
        this.user = user
    }
    
    async profile(){
        const response = await fetch(`${this.url}${this.user}`)
        return await response.json()
    }

    async repos(){
        const response = await fetch(`${this.url}${this.user}/repos`)
        return await response.json()
    }
}

// https://api.github.com/users/DZ0Jeff user
// https://api.github.com/users/DZ0Jeff/repos Repositories