import {GenresListComponentDropdown} from "@/src/components/genre/dropdown/GenresListComponentDropdown";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {GenreListComponent} from "@/src/components/genre/genre-list/GenreListComponent";
import React from "react";
import {getByGenres, getGenres} from "@/src/services/api.services";

type Props = {
    currentPage: number;
    params: Promise<{id: string | number}>

}


export const GenrePageComponent = async ({currentPage, params}:Props) => {

    const {id} = await params;
    const data = await getByGenres(id, currentPage);
    const genresData = await getGenres();
    const genres = genresData.genres;
    const genre = genres.find((genre) => genre.id.toString() === id);
    const movies = data.results;
    const totalPages = data.total_pages




    return (
        <>
            <div className='genre__container-mob'>
                {genre && <h1 className='genre__title'>{genre.name}</h1>}
                <aside className='genres-list__block'>
                    <GenresListComponentDropdown genresData={genresData}/>
                </aside>
                <section className='movie-list__genre'>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={`/genre/${id}`}/>
                </section>
            </div>
            <div className='genre__container-desktop'>
                <aside className='genres-list__aside-desktop'>
                    <GenreListComponent genresData={genresData}/>
                </aside>
                <section className='movie-list__genre-desktop'>
                    {genre && <h1 className='genre__title'>{genre.name}</h1>}
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={`/genre/${id}`}/>
                </section>
            </div>
        </>
    );
};