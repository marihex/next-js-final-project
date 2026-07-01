import "server-only";
import { IBaseTmdbModel } from "@/src/models/IBaseTmdbModel";
import { baseUrl } from "@/src/helpers/urls";

export const getAllMovies = async (page: string | number): Promise<IBaseTmdbModel["results"]> => {

    const token = process.env.TMDB_TOKEN;

    if (!token) {
        throw new Error("TMDB_TOKEN is missing in environment variables");
    }

    const response = await fetch(`${baseUrl}/discover/movie?page=${page}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        console.error(`TMDB Fetch Error: ${response.status} ${response.statusText}`);
        throw new Error(`${response.status}: Failed to fetch movies`);
    }

    const data: IBaseTmdbModel = await response.json();
    return data.results;
};