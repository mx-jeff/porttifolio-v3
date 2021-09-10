import { mainSlick } from './slick.min.js'
import { loadMaterialize } from './materialize.min.js'
import { projectsList } from "./home_projects.min.js";

async function main(){
    await projectsList()
    await loadMaterialize()
    await mainSlick()
}

main()
