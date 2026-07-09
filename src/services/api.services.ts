import "server-only";
import { IBaseTmdbModel } from "@/src/models/IBaseTmdbModel";
import {baseUrl} from "@/src/helpers/urls";
import {REVALIDATE} from "@/src/helpers/revalidateHelper";
import {IMovieInfoModel} from "@/src/models/IMovieInfoModel";
import {ITrailerModel} from "@/src/models/ITrailerModel";
import {IGenreModel} from "@/src/models/IGenreModel";
import {maxDate} from "@/src/helpers/maxDateHelper";



export const fetchData = async <T, > (url: string, revalidate: number): Promise<T> => {

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

    const data: T = await response.json();
    return data;
};


export const getAllMovies = async (page: number|string): Promise<IBaseTmdbModel> => {
    return await fetchData(`${baseUrl}/discover/movie?page=${page}`, REVALIDATE.MOVIES)
}


export const getMovie = async (id: string | number): Promise<IMovieInfoModel> => {
    return await fetchData(`${baseUrl}/movie/${id}?append_to_response=release_dates`,  REVALIDATE.DETAILS)
}

export const getTrailer = async (id: string | number): Promise<ITrailerModel> => {
    return await fetchData(`${baseUrl}/movie/${id}/videos`, REVALIDATE.DETAILS)
}

export const getByGenres = async (id: string | number, pg: number | string): Promise<IBaseTmdbModel> => {
    return await fetchData(`${baseUrl}/discover/movie?with_genres=${id}&page=${pg}&with_release_type=3&include_adult=false&release_date.lte=${maxDate}`, REVALIDATE.DETAILS)
}


export const getGenres = async (): Promise<IGenreModel> => {
    return await fetchData(`${baseUrl}/genre/movie/list`, REVALIDATE.GENRES)
};

export const getSorted = async (pg: number | string, sortParam: string): Promise<IBaseTmdbModel> => {


    return await fetchData(`${baseUrl}/discover/movie?page=${pg}&region=UA&with_release_type=3&sort_by=${sortParam}&include_adult=false&release_date.lte=${maxDate}`, REVALIDATE.MOVIES)
}