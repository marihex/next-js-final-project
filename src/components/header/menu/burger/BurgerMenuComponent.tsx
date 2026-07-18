'use client'

import {useState} from "react";
import Link from "next/link";
import {Genres} from "@/src/models/IGenreModel";
import {openHandler} from "@/src/helpers/openHandler";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import './burger-menu-style.css';

type Props = {
    genres: Genres[]
}

export const BurgerMenuComponent = ({genres}: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const [trendingIsOpen, setTrendingIsOpen] = useState<boolean>(false);
    const [moviesIsOpen, setMoviesIsOpen] = useState<boolean>(false);
    const [genresIsOpen, setGenresIsOpen] = useState<boolean>(false);



    // const openHandler = () => {
    //     !menuIsOpen ? setMenuIsOpen(true) : setMenuIsOpen(false)
    // }
    //
    // const openTrendingHandler = () => {
    //     !trendingIsOpen ? setTrendingIsOpen(true) : setTrendingIsOpen(false)
    // }
    // const openMoviesHandler = () => {
    //     !moviesIsOpen ? setMoviesIsOpen(true) : setMoviesIsOpen(false)
    // }
    // const openGenresHandler = () => {
    //     !genresIsOpen ? setGenresIsOpen(true) : setGenresIsOpen(false)
    // }

    return (
        <div className={'burger-menu__wrapper'}>
            <button onClick={(e) => {
                e.stopPropagation();
                openHandler(menuIsOpen, setMenuIsOpen)}}>{menuIsOpen ? <MenuOpenIcon style={{color: 'gold'}}/> : <MenuIcon/>}</button>

            {menuIsOpen && <div className={menuIsOpen ? "burger-menu__active" : 'burger-menu__container'}>
                <ul className='burger-menu__top'>
                    <li className={moviesIsOpen ? "burger-movie__menu-active" : 'burger-movie__menu'} onClick={() => {
                        if (genresIsOpen) {setGenresIsOpen(false)}
                        openHandler(moviesIsOpen, setMoviesIsOpen)
                    }} >Movies {moviesIsOpen ? <ExpandMoreIcon style={{color: 'gold'}}/> : <NavigateNextIcon style={{color: 'darkgrey'}}
                    />}
                        {moviesIsOpen && <ul className={'burger-movie__submenu'}>
                            <li><Link href={'/movie'}>All Movies</Link></li>
                            <li><Link href={'/upcoming'}>Upcoming</Link></li>
                            <li><Link href={'/popular'}>Popular</Link></li>
                            <li onClick={(e) => {
                                e.stopPropagation();
                                openHandler(trendingIsOpen, setTrendingIsOpen)
                            }} className={trendingIsOpen ? 'trending-active' : "trending__submenu"}>Trending {trendingIsOpen ? <ExpandMoreIcon style={{color: 'gold'}}/> : <NavigateNextIcon
                                style={{color: 'darkgrey'}}/>}
                                {trendingIsOpen && <ul className='burger-trending__submenu'>
                                    <li><Link href={'/trending/day'}>Day</Link></li>
                                    <li><Link href={'/trending/week'}>Week</Link></li>
                                </ul>}
                            </li>
                        </ul>}
                    </li>
                    <li className={genresIsOpen ? 'genres__active':'burger-genres__menu'} onClick={() => {
                        if (moviesIsOpen) {
                            setMoviesIsOpen(false)
                        }
                        openHandler(genresIsOpen, setGenresIsOpen)
                    }}>Genres {genresIsOpen ? <ExpandMoreIcon style={{color: 'gold'}}/> : <NavigateNextIcon
                        style={{color: 'darkgrey'}}/>}
                        {genresIsOpen && <ul className='burger-genres__submenu'>
                            {genres.map(genre => <li key={genre.id}><Link
                                href={`/genre/` + genre.id.toString()}>{genre.name} </Link></li>)}
                        </ul>}
                    </li>
                </ul>
            </div>}
        </div>
    );
};