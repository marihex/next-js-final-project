import {FC} from "react";
import {getMovie} from "@/src/services/api.services";
import {getReleaseDateForRegion} from "@/src/helpers/movieReleaseHelper";
import Image from "next/image";
import {imgBaseUrl, imgSizeUrl} from "@/src/helpers/urls";
import { dateFormatHelper } from "@/src/helpers/dateFormatHelper";
import { convertMinutesToHM } from "@/src/helpers/monutesConvertHelper";
import {Chip, Rating} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PublicIcon from '@mui/icons-material/Public';
import Link from "next/link";
import './movie-style.css'

type MovieInfoProps = {
    params: Promise<{id: string | number}>

}

export const MovieComponent: FC<MovieInfoProps> = async ({params}) => {
    const {id} = await params
    const movie = await getMovie(id)

    const backdropUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
    const releaseDateRaw = movie && getReleaseDateForRegion(movie, 'UA');
    const finalReleaseDate = releaseDateRaw || movie && movie.release_date;
    const regionLabel = releaseDateRaw ? "(UA)" : '(Worldwide)';
    const sizeUrl = imgSizeUrl['342'];


    return (
        <>
            <div className='pb-14'>
                <section className='movie__section'>
                    {
                        movie &&
                        <div className='movie__container'
                             style={{
                                 backgroundImage: movie?.backdrop_path
                                     ? `linear-gradient(to top, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.4)), url(${backdropUrl})`
                                     : 'none'
                             }}>

                            <div className='movie__card'>
                                {movie.poster_path ?
                                    <Image src={`${imgBaseUrl}${sizeUrl}${movie.poster_path}`}
                                         alt={`${movie.title} ${sizeUrl} poster`} className='poster' width={342} height={513}/> :
                                    <Image src="../../../public/images/NoPosterAvailable.jpg" alt="" className='h-[513px] w-[342px]' width={342} height={513}/>
                                }
                                <div className='movie__info'>
                                    <div className='mb-2'>
                                        <h1 className='movie__title'>{movie.title}</h1>

                                        <div className='text-sm flex'>
                                        <span
                                            className='movie__release'>{dateFormatHelper(finalReleaseDate || "")} {regionLabel}</span>
                                            {movie.runtime > 0 && (
                                                <span className='ml-4'> {convertMinutesToHM(movie.runtime)}</span>)}
                                        </div>
                                    </div>
                                    <div className='movies__genres'>
                                        {
                                            movie.genres.map(genre => <Chip key={genre.id}
                                                                            label={genre.name}
                                                                            component="a"
                                                                            href={`/movie/genre/${genre.id}`}
                                                                            variant="outlined"
                                                                            color="primary"
                                                                            clickable
                                                                            sx={{
                                                                                '&.MuiChip-root:hover': {
                                                                                    bgcolor: "dimgray",
                                                                                },
                                                                                '&.MuiChip-root': {
                                                                                    bgcolor: 'darkslategrey',
                                                                                    color: 'white'
                                                                                }
                                                                            }}


                                            />)
                                        }

                                    </div>

                                    {movie.vote_average > 0 ?

                                        (<div className='movie__rating'>
                                            <span className='rating__average'>{movie.vote_average.toFixed(1)}/10</span>
                                            <Rating name="half-rating-read"
                                                    defaultValue={movie.vote_average / 2}
                                                    precision={0.5}
                                                    readOnly
                                                    size="small"
                                                    emptyIcon={<StarBorderIcon fontSize="inherit" style={{color: 'white'}}/>}

                                            />
                                            <span className='text-sm opacity-60'>({movie.vote_count})</span>
                                        </div>) : ''}

                                    <p className='movie__tagline'>{movie.tagline}</p>
                                    <div className='mt-4'>
                                        <h2 className='overview__heading'>Overview</h2>
                                        <p>
                                            {movie.overview}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    }
                </section>
                <section className='production__section'> {
                    movie &&
                    <div className='production__info flex gap-5'>
                        {movie.budget ? <span><span className='font-bold'>Budget:</span> ${movie.budget}</span> : <span><span className='font-bold'>Budget:</span> - </span>}
                        {movie.revenue ? <span><span className='font-bold'>Revenue:</span> ${movie.revenue}</span> : <span><span className='font-bold'>Revenue:</span> - </span> }
                        <span><span className='font-bold'>Status:</span> {movie.status}</span>
                        <div><span className='font-bold'>Country:</span> {
                            movie.origin_country.map((country, index) => <span className='mr-1' key={index}>{country} </span> )
                        }</div>

                        <span className='flex items-center gap-1'> <PublicIcon fontSize='small'/><Link
                            href={movie.homepage}>Homepage</Link></span>

                    </div>
                }
                </section>
                {/*<section className='movie__recommendation'>*/}
                {/*    { movie &&*/}
                {/*        <div className='movie__carousel'>*/}
                {/*            {similar.length > 0 ? <CarouselSmall movies={similar}*/}
                {/*                                                 movieCategory={`If you liked ${movie.title}, you might also like...`}*/}
                {/*                                                 endpoint={'/'}/> : []}*/}
                {/*            {recommendations.length > 0 ?*/}
                {/*                <CarouselSmall movies={recommendations} movieCategory={'Also Recommended'}*/}
                {/*                               endpoint={'/'}/> : []*/}
                {/*            }*/}
                {/*        </div>}*/}
                {/*</section>*/}
            </div>
        </>
    );
};