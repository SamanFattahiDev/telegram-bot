import consola from "consola";
import {axiosIns} from "../helpers/axiosInstance";

async function getTeamMatches() {
    try {
        const response = await axiosIns.get('/leagues')
        return response.data
    } catch (e) {
        consola.error('error fetching leagues', e)
    }
}

export {
    getTeamMatches
}