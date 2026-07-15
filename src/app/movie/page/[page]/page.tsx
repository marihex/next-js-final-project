import React, {FC} from 'react';
import {getAllMovies, getGenres} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {redirect} from "next/navigation";
import {ExtendedSortComponent} from "@/src/components/sort-extended/ExtendedSortComponent";
import {ExtendedListSortComponent} from "@/src/components/sort-extended/ExtendedListSortComponent";

type Props = {
    searchParams: Promise<{ sort?: string, genre?: string, page?: number }>;
    params: Promise<{page: string}>
}

const MoviePaginationPage: FC<Props>  = async ({searchParams, params}) => {

    const {sort, genre} = await searchParams;
    const {page} = await params
    const sortBy = sort || 'popularity.desc';
    const withGenre = genre || '';
    const currentPage: number = Number(page);

    {
        currentPage === 1 && redirect('/movie')
    }
    const data = await getAllMovies(currentPage, sortBy, withGenre);
    console.log(data);
    const movies = data.results;
    const totalPages = data.total_pages;

    const dataGenres = await getGenres();
    const genres = dataGenres.genres;


    return (
        <>
            <section className='all-movies-mobile__section'>
                <h1 className='movies__heading'>Movies</h1>
                <div className='movies__sort-dropdown'>
                    <ExtendedSortComponent genres={genres}/>
                </div>
                <MoviesListComponent movies={movies}/>
                <PaginationComponent currentPage={currentPage} totalPages={totalPages} basePath={'/movie'}/>
            </section>
            <div className='all-movies-desktop__container'>
                <aside className='movies__sort-list'>
                    <ExtendedListSortComponent genres={genres}/>
                </aside>
                <section className='movies-desctop__section'>
                    <h1 className='movies__heading'>Movies</h1>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent currentPage={currentPage} totalPages={totalPages} basePath={'/movie'}/></section>
            </div>
        </>
    );
};

export default MoviePaginationPage;