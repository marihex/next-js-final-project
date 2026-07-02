import {IMovieCardModel} from "@/src/models/IMovieCardModel";
import {MoviesListCardComponent} from "@/src/components/movie/MoviesListCardComponent/MoviesListCardComponent";
import {FC} from "react";
import './movie-list-style.css';


type MoviesProps = {
    movies: IMovieCardModel[];
}

export const MoviesListComponent: FC<MoviesProps> = async ({movies}) => {

    return (
        <section className='movie__section'>
            <div className='movie__container'>
                {
                    movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)
                }
            </div>
        </section>
    );
};