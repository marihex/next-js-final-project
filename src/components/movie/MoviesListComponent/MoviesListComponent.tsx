import {IMovieCardModel} from "@/src/models/IMovieCardModel";
import {MoviesListCardComponent} from "@/src/components/movie/MoviesListCardComponent/MoviesListCardComponent";
import {FC} from "react";


type MoviesProps ={
    movies: IMovieCardModel[];
}

export const MoviesListComponent: FC<MoviesProps> = async ({movies}) => {

    return (
        <>
            {
                movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)
            }
        </>
    );
};