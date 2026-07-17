'use client'

import {IMovieCardModel} from "@/src/models/IMovieCardModel";
import {useState} from "react";
import {MoviesListCardComponent} from "@/src/components/movie/MoviesListCardComponent/MoviesListCardComponent";
import './sm-carousel-style.css'
import Link from "next/link";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
    movies: IMovieCardModel[],
    category: string,
    endpoint: string
}

export const SmCarouselComponent = ({movies, category, endpoint}: Props) => {
    const [firstIndex, setFirstIndex] = useState<number>(0);

    const moviesSliced = movies.slice(0, 18);
    const cardQty = 6;


    const lastIndex = firstIndex + cardQty;

    const moviesForCarousel = moviesSliced.slice(firstIndex, lastIndex);


    const nextHandler = () => {
        setFirstIndex(firstIndex + cardQty)
    };
    const prevHandler = () => {
        setFirstIndex(firstIndex - cardQty)
    }



    return (
        <>
            <div className='sm-carousel-container'>
                <div className='sm-carousel-content'>
                    <span className='sm-carousel-title'><Link href={`${endpoint}`}>{category} <NavigateNextIcon style={{color: 'darkgrey'}}/></Link></span>
                    <div className='sm-carousel__movies'>

                        <div className='sm-carousel__mobile'>{
                            moviesSliced.map((item) => (
                                <div key={item.id}>
                                    <MoviesListCardComponent movie={item}/>
                                </div>
                            ))
                        }</div>
                        <div className='sm-carousel__desktop'>
                            {firstIndex > 5 && <button className='sm-carousel__prev' onClick={prevHandler}><ArrowBackIosNewIcon/></button>}
                            {
                                moviesForCarousel.map(movie => (
                                    <div key={movie.id}>
                                        <MoviesListCardComponent movie={movie}/>
                                    </div>
                                ))
                            }
                            {lastIndex < 18 && <button className='sm-carousel__next' onClick={nextHandler}><ArrowForwardIosIcon/></button>}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};