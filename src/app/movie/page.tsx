import React from 'react';
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import {getAllMovies} from "@/src/services/api.services";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";

const Page = async () => {

    const data = await getAllMovies(1);
    const movies = data.results
    const totalPages = data.total_pages

    return (
        <section>
          <MoviesListComponent movies={movies}/>
            <PaginationComponent currentPage={1} totalPages={totalPages} basePath={'/movie'}/>
        </section>
    );
};

export default Page;