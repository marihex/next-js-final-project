import React, {FC} from 'react';
import {getAllMovies} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {redirect} from "next/navigation";

type Props = {
    params: Promise<{page: string}>
}

const MoviePaginationPage: FC<Props>  = async ({params}) => {

    const {page} = await params
    const currentPage: number = Number(page)
    console.log(currentPage)
    {
        currentPage === 1 && redirect('/movie')
    }
    const data = await getAllMovies(currentPage);
    const movies = data.results

    const totalPages = data.total_pages


    return (
        <section>
            <MoviesListComponent movies={movies}/>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/movie'} />
        </section>
    );
};

export default MoviePaginationPage;