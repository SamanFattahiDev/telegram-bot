import axios, {AxiosInstance} from "axios";
import * as dotenv from 'dotenv'

dotenv.config()
export const axiosIns: AxiosInstance = axios.create({
    baseURL: process.env.API_BASEURL,
    headers: {
        'x-rapidapi-key': process.env.FOOTBALLDATA_TOKEN,
        'x-rapidapi-host': 'v3.football.api-sports.io',
    },
});