import React from 'react';
import {getAllMovies} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";

const Page = async () => {

    const movies = await getAllMovies(1)

    return (
        <section>
          <MoviesListComponent movies={movies}/>
        </section>
    );
};

export default Page;