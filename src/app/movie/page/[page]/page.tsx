import React, {FC} from 'react';
import {getAllMovies} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";

type Props = {
    params: Promise<{page: string}>
}

const MoviePaginationPage: FC<Props>  = async ({params}) => {

    const {page} = await params
    const currentPage: number = Number(page)
    console.log(currentPage)
    const data = await getAllMovies(currentPage);
    const movies = data.results
    const totalPages = data.total_pages

    return (
        <section>
            <MoviesListComponent movies={movies}/>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage}/>
        </section>
    );
};

export default MoviePaginationPage;