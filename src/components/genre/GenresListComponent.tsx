'use client'

import {FC, useState} from "react";
import {IGenreModel} from "@/src/models/IGenreModel";

type GenresProps = {
    genresData: IGenreModel
}

export const GenresListComponent: FC<GenresProps> = ({genresData}) => {
    const [open, setOpen] = useState<boolean>(false);
    const genres = genresData.genres;
    const openHandler = () => {
        !open ? setOpen(true) : setOpen(false)

    };
    return (
        <div>
            <button onClick={openHandler}>All Genres</button>
            {
                open && <div className='genres-list__container'>
                    <ul className='genres__list'>
                        {
                            genres.map(genre => <li key={genre.id} className='genre__item'>{genre.name}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    );
};