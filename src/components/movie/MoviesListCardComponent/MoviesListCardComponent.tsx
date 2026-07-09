import {FC} from "react";
import {IMovieCardModel} from "@/src/models/IMovieCardModel";
import {imgBaseUrl, imgSizeUrl} from "@/src/helpers/urls";
import {dateFormatHelper} from "@/src/helpers/dateFormatHelper";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import StarIcon from '@mui/icons-material/Star';
import Image from "next/image";
import './movie-card-style.css';
import Link from "next/link";

type MovieCardProps = {
    movie: IMovieCardModel
}

export const MoviesListCardComponent: FC<MovieCardProps> = ({movie}) => {
    const sizeUrl = imgSizeUrl["185"];

    return (

        <article className='movie-card'>
            <div className='movie-card__img'>
                <div className='movie-card__favorite'><FavoriteBorderSharpIcon
                    sx={{'&:hover': {color: 'darkred'}}
                    }
                /></div>
                {
                    movie.poster_path ?
                        <Image src={`${imgBaseUrl}${sizeUrl}${movie.poster_path}`}
                               alt={`${movie.title} ${sizeUrl} poster`} className='movie__poster-xs'
                               width={185} height={278} loading="eager"/> :
                        <Image src="/NoPosterAvailable.jpg" alt=""
                               className='movie-card__no-poster' loading="eager" width={185} height={278}/>
                }</div>

            <div className='movie-card__info'>
                <div className='movie-card__rating'>
                    <StarIcon
                        style={{color: 'gold', fontSize: 15}}
                    />
                    <span className='movie-card__ratingCount'>{movie.vote_average.toFixed(1)}</span>
                </div>
                <Link href={'/movie/' + movie.id.toString()} className='line-clamp-2'>{movie.title}</Link>

                <span className='movie-card__release'>{dateFormatHelper(movie.release_date)}</span>
            </div>
        </article>
    );
};