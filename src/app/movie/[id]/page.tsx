import React from 'react';
import {MovieComponent} from "@/src/components/movie/MovieComponent/MovieComponent";

type Props = {
    params: Promise<{id: string | number}>;
}

const MoviePage = async ({params}:Props) => {

    return (
        <div>
            <MovieComponent params={params}/>
        </div>
    );
};

export default MoviePage;