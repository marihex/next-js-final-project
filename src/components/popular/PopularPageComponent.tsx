import {getSorted} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {SortDropdown} from "@/src/components/sort/sort-dropdown/SortDwopdown";
import './popular-style.css';
import {SortListComponent} from "@/src/components/sort/sort-list/SortListComponent";

type Props = {
    currentPage: number;
    sort: string
}

export const PopularPageComponent = async ({currentPage, sort}: Props) => {

    const sortBy = sort || 'popularity.desc'

    const data = await getSorted(currentPage, sortBy);
    const movies = data.results;
    const totalPages = data.total_pages;


    return (
        <>
            <div className='popular-mobile__container'>
                <h1 className='popular__heading'>Popular</h1>
                <aside className='popular-mobile__sort'>
                    <SortDropdown sortBy={sortBy}/>
                </aside>
                <section className='popular-mobile__movies'>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/popular'}
                                         sortParam={sortBy}/>
                </section>
            </div>
            <div className='popular-desktop__container'>
                <aside className='popular-desktop__sort'>
                    <SortListComponent sortBy={sortBy}/>
                </aside>
                <section className='popular-desctop__movies'>
                    <h1 className='popular-desctop__heading'>Popular</h1>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/popular'}
                                         sortParam={sortBy}/>
                </section>
            </div>
        </>

    );
};