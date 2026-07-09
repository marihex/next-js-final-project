'use client'

import {FC, useState} from "react";
import {IGenreModel} from "@/src/models/IGenreModel";
import Link from "next/link";
import './genre-dropdown-list-style.css'
import {usePathname} from "next/navigation";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type GenresProps = {
    genresData: IGenreModel
}

export const GenresListComponentDropdown: FC<GenresProps> = ({genresData}) => {
    const [open, setOpen] = useState<boolean>(false);
    const genres = genresData.genres;
    const openHandler = () => {
        !open ? setOpen(true) : setOpen(false)

    };
    const pathName = usePathname()
    const path = pathName.split('/').at(2)
    console.log(path);
    return (
        <div className='genres-dropdown'>
            <button onClick={openHandler} className={open ? 'list-open' : 'genres__btn'}>All Genres {!open &&
                <KeyboardArrowRightIcon/>} {open && <KeyboardArrowDownIcon/>}</button>
            {
                open && <div className='genres-list-mob__container'>
                    <ul className='genres__list-mob'>
                        {
                            genres.map(genre => <li key={genre.id}
                                                    className={Number(path) === genre.id ? "selected-item" : 'genre-item'}>
                                <Link href={'/genre/' + genre.id.toString()}>{genre.name}</Link></li>)
                        }
                    </ul>
                </div>
            }
        </div>
    );
};