'use client'

import {FC, useState} from "react";
import {IGenreModel} from "@/src/models/IGenreModel";
import Link from "next/link";
import './genre-list-style.css'
import {usePathname} from "next/navigation";

type GenresProps = {
    genresData: IGenreModel
}

export const GenresListComponent: FC<GenresProps> = ({genresData}) => {
    const [open, setOpen] = useState<boolean>(false);
    const genres = genresData.genres;
    const openHandler = () => {
        !open ? setOpen(true) : setOpen(false)

    };
    const pathName = usePathname()
    const path = pathName.split('/').at(3)
    console.log(path);
    return (
        <div className='genres-mob'>
            <button onClick={openHandler} className={ open? 'list-open' : 'genres__btn'}>All Genres</button>
            {
                open && <div className='genres-list-mob__container'>
                    <ul className='genres__list-mob'>
                        {
                            genres.map(genre => <li key={genre.id} className={Number(path) === genre.id ? "selected-item" : 'genre-item'}><Link href={'/movie/genre/' + genre.id.toString()}>{genre.name}</Link></li>)
                        }
                    </ul>
                </div>
            }
        </div>
    );
};