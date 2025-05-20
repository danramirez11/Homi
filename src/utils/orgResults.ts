import { getProjects, getResults } from "../Services/getForm";
import { ht } from "../types/homes";

export const organizeResults = async (result: string) => {
    let homeType = "";

    switch (result) {
        case ht.COMPACTO:
            homeType = 'VIP'
            break;
        
        case ht.BASICO:
            homeType = 'VIP'
            break;

        case ht.FUNCIONAL:
            homeType = 'VIS'
            break;

        case ht.ESPACIOSO:
            homeType = 'VIS'
            break;
        
        case ht.PREMIUM:
            homeType = 'No VIS'
            break;
    
        default:
            break;
    }

    const mainProject = await getProjects(homeType);
    const otherResults = await getResults(homeType);

    console.log("mainProject", mainProject);
    console.log("otherResults", otherResults);

    return { mainProject, otherResults };
}