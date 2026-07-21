import React from 'react';
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import {getAllMovies, getGenres} from "@/src/services/api.services";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {ExtendedSortComponent} from "@/src/components/sort-extended/ExtendedSortComponent";
import './movies-styles.css';
import {ExtendedListSortComponent} from "@/src/components/sort-extended/ExtendedListSortComponent";
import {Metadata} from "next";

type Props = {
    searchParams: Promise<{ sort?: string, genre?: string, page?: number }>
}

export async function generateMetadata({
                                           searchParams,
                                       }: Props): Promise<Metadata> {
    const { sort, genre} = await searchParams;

    const sortBy = sort || "popularity.desc";

    let genreName = "All Movies";

    if (genre) {
        const data = await getGenres();
        const foundGenre = data.genres.find((g) => g.id === Number(genre));

        if (foundGenre) {
            genreName = foundGenre.name;
        }
    }

    return {
        title: `${genreName} - ${sortBy}`,
        description: `Browse ${genreName.toLowerCase()} movies sorted by "${sortBy}". Discover the latest and most popular films.`,
    };
}




const Page = async ({searchParams}: Props) => {

    const {sort, genre, page} = await searchParams;
    const sortBy = sort || 'popularity.desc';
    const withGenre = genre || '';
    const currentPage = page || 1;



    const data = await getAllMovies(currentPage, sortBy, withGenre);
    const movies = data.results
    const totalPages = data.total_pages
    const dataGenres = await getGenres();
    const genres = dataGenres.genres


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

export default Page;