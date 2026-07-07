'use client'
import {FC, useState} from "react";
import {ITrailerResult} from "@/src/models/ITrailerModel";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './trailer-styles.css';

type TrailerProps = {
    trailers: ITrailerResult[]
}

export const TrailerComponent: FC<TrailerProps> = ({trailers}) => {
    const [open, setOpen] = useState<boolean>(false)
    const trailer = trailers.find(trailer => trailer.type === 'Trailer')

    const openHandler = () => {
        setOpen(true)
    }
    const closeHandler = () => {
        setOpen(false)
    }

    return (
        <div>
            <button onClick={openHandler} className='btn__open'><PlayCircleIcon/>Play Trailer</button>
            {trailer && open && <div className='trailer__modal'>
                <div className='close-btn__container'>
                    <button onClick={closeHandler} className='btn__closed'><HighlightOffIcon/></button>
                </div>
                <iframe width="1000" height="610" src={`https://www.youtube.com/embed/${trailer.key}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>

                </iframe>
            </div>}
        </div>
    );
};