import "server-only";
import { IBaseTmdbModel } from "@/src/models/IBaseTmdbModel";
import {baseUrl} from "@/src/helpers/urls";
import {REVALIDATE} from "@/src/helpers/revalidateHelper";



export const fetchData = async (url: string, revalidate: number): Promise<IBaseTmdbModel> => {

    const token = process.env.TMDB_TOKEN;

    if (!token) {
        throw new Error("TMDB_TOKEN is missing in environment variables");
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        next: {revalidate: revalidate}

    }, );

    if (!response.ok) {
        console.error(`TMDB Fetch Error: ${response.status} ${response.statusText}`);
        throw new Error(`${response.status}: Failed to fetch movies`);
    }

    const data: IBaseTmdbModel = await response.json();
    return data;
};


export const getAllMovies = async (page: number|string): Promise<IBaseTmdbModel> => {
    return await fetchData(`${baseUrl}/discover/movie?page=${page}`, REVALIDATE.MOVIES)
}