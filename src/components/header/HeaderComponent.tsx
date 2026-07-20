import {BurgerMenuComponent} from "@/src/components/header/menu/burger/BurgerMenuComponent";
import {getGenres} from "@/src/services/api.services";
import './menu/burger/burger-menu-style.css'
import './header-styles.css'
import Image from "next/image";
import Link from "next/link";
import {DesktopMenuComponent} from "@/src/components/header/menu/desktop=menu/DesctopMenuComponent";
import {UserInfoComponent} from "@/src/components/header/user/UserInfoComponent";

export const HeaderComponent = async () => {
const data = await getGenres();
const genres = data.genres

    return (
        <header className='header'>

        <nav className='mobile-nav'>
           <BurgerMenuComponent genres={genres}/>
        </nav>
            <div className='tmdb__logo-mobile'>
                <Link href={'/'}><Image src={'/logo.svg'} alt={'logo'} height={30} width={50}/></Link>
            </div>
            <div className='tmdb__logo-desk'>
                <Link href={'/'}><Image src={'/logo-desk.svg'} alt={'logo'} height={80} width={150}/></Link>
            </div>
            <nav className='desktop-nav'>
                <DesktopMenuComponent genres={genres}/>
            </nav>
            <div>
                <UserInfoComponent/>
            </div>
        </header>
    );
};