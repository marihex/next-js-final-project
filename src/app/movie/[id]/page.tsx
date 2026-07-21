import React from 'react';
import {MovieComponent} from "@/src/components/movie/MovieComponent/MovieComponent";
import {Metadata} from "next";
import {getMovie} from "@/src/services/api.services";

type Props = {
    params: Promise<{id: string | number}>;
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const {id } = await params;

    const movie = await getMovie(id);


    return {
        title: `${movie?.title ?? "Unknown"} - TMDB Movies`,
        description: `Browse ${movie?.title  ?? "Unknown"} from TMDB Movies`,
    };
}

const MoviePage = async ({params}:Props) => {




    return (
        <div>
            <MovieComponent params={params}/>


        </div>
    );
};

export default MoviePage;