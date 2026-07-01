import {FC} from "react";
import {IMovieCardModel} from "@/src/models/IMovieCardModel";

type MovieCardProps ={
    movie: IMovieCardModel
}

export const MoviesListCardComponent: FC<MovieCardProps> = ({movie}) => {
    return (
        <div className='card__wrapper'>
        <article className='card__container'>
            <div className='card__img'>
                <span>{movie.title}</span>
            </div>
        </article>
        </div>
    );
};