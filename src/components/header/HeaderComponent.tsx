import {BurgerMenuComponent} from "@/src/components/header/menu/BurgerMenuComponent";
import {getGenres} from "@/src/services/api.services";

export const HeaderComponent = async () => {
const data = await getGenres();
const genres = data.genres

    return (
        <header className='header'>
        <nav className='nav__container'>
            <div className='mobile-nav'><BurgerMenuComponent genres={genres}/></div>
        </nav>
        </header>
    );
};