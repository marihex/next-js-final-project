import {BurgerMenuComponent} from "@/src/components/header/menu/burger/BurgerMenuComponent";
import {getGenres} from "@/src/services/api.services";
import './menu/burger/burger-menu-style.css'
import './header-styles.css'
import Image from "next/image";
import Link from "next/link";

export const HeaderComponent = async () => {
const data = await getGenres();
const genres = data.genres

    return (
        <header className='header'>

        <nav className='nav__container'>
            <div className='mobile-nav'><BurgerMenuComponent genres={genres}/></div>
        </nav>
            <div className='tmdb__logo'>
                <Link href={'/'}><Image src={'/logo.svg'} alt={'logo'} height={30} width={50}/></Link>
            </div>
        </header>
    );
};