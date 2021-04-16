import { mainSlick } from './slick.js'
import { loadMaterialize } from './materialize.js'
import { projectsList } from "./home_projects.js";

async function main(){
    await projectsList()
    await loadMaterialize()
    await mainSlick()
}

main()
