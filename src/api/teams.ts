import consola from "consola";
import {axiosIns} from "../helpers/axiosInstance";

async function getAllTeams(leagueId: number) {
    try {
        const response = await axiosIns.get(`/teams?league=${leagueId}&season=2022`)
        return response.data
    } catch (e) {
        consola.error('error fetching leagues', e)
    }
}

export {
    getAllTeams
}