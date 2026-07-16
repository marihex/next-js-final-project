'use client'

import {useState} from "react";
import {IMovieCardModel} from "@/src/models/IMovieCardModel";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from "next/image";
import {imgBaseUrl, imgSizeUrl} from "@/src/helpers/urls";
import {dateFormatHelper} from "@/src/helpers/dateFormatHelper";
import StarRateIcon from '@mui/icons-material/StarRate';

type Props = {
    movies: IMovieCardModel[]
}

export const MainCarouselComponent = ({movies}: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const moviesSliced = movies.slice(0, 5);
    const imgSize = imgSizeUrl.original
    const backDrop = `${imgBaseUrl}${imgSize}`

    const handleNext = () => {
        if (currentIndex === moviesSliced.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(moviesSliced.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }
    const currentMovie = moviesSliced[currentIndex]

    return (
        <>
            <div className='main-carousel__container' key={currentMovie.id}>
                <button className='carousel__btn-preb' onClick={handlePrev}><ArrowBackIosNewIcon/></button>
                <div className='main-carousel__content'>
                    <Image src={`${backDrop}${currentMovie.backdrop_path}`} alt={`${currentMovie.title} backdrop`} width={600} height={400}/>
                    <span className='carousel__title'>{currentMovie.title}</span>
                    <div className='carousel__release'>{dateFormatHelper(currentMovie.release_date)}</div>
                    <div className='carousel__rating'><StarRateIcon
                        style={{color: 'gold', fontSize: 15}}/> {currentMovie.vote_average.toFixed(1)}</div>
                </div>
                <button className='carousel__btn-next' onClick={handleNext}><ArrowForwardIosIcon/></button>
            </div>
        </>
    );
};