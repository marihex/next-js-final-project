'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {Genres} from "@/src/models/IGenreModel";
import {openHandler} from "@/src/helpers/openHandler";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import './desktop-menu-style.css';


type Props = {
    genres: Genres[]
}

export const DesktopMenuComponent = ({genres}: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);


    useEffect(() => {
        menuIsOpen ?  document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [menuIsOpen])

    return (
        <div className={'desktop-menu__wrapper'}>
            <button onClick={() => {
                openHandler(menuIsOpen, setMenuIsOpen)}}>{menuIsOpen ? <MenuOpenIcon style={{color: 'gold'}}/> : <MenuIcon/>} <span>Menu</span></button>
            {menuIsOpen && <div className={'desktop-menu__container'}>
                <ul className='desktop-menu__top'>
                    <li className={ 'desktop-movie__menu'}><span className='movie-menu__header'>Movies</span>
                        <ul className={'desktop-movie__submenu'}>
                            <li className='menu__list-element'><Link href={'/movie'}>All Movies</Link></li>
                            <li className='menu__list-element'><Link href={'/upcoming'}>Upcoming</Link></li>
                            <li className='menu__list-element'><Link href={'/popular'}>Popular</Link></li>
                            <li className='desktop-trending__submenu'><span className='trending-menu__header'>Trending</span>
                                 <ul>
                                    <li className='menu__list-element'><Link href={'/trending/day'}>Day</Link></li>
                                    <li className='menu__list-element'><Link href={'/trending/week'}>Week</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className={'desktop-genres__menu'}><span className='genres-menu__header'>Genres</span>
                        <ul className='desktop-genres__submenu'>
                            {genres.map(genre => <li key={genre.id} className='menu__list-element'><Link
                                href={`/genre/` + genre.id.toString()}>{genre.name} </Link></li>)}
                        </ul>
                    </li>
                </ul>
            </div>}
        </div>
    );
};