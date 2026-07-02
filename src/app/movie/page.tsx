import React from 'react';
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import {getAllMovies} from "@/src/services/api.services";

const Page = async () => {

    const data = await getAllMovies(1);
    const movies = data.results

    return (
        <section>
          <MoviesListComponent movies={movies}/>
        </section>
    );
};

export default Page;