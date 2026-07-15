import {getUpcoming} from "@/src/services/api.services";
import {SortDropdown} from "@/src/components/sort/sort-dropdown/SortDwopdown";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {SortListComponent} from "@/src/components/sort/sort-list/SortListComponent";
import './upcoming-styles.css'

type Props = {
    currentPage: number;
    sort: string
}

export const UpcomingPageComponent = async ({currentPage, sort}: Props) => {
    const sortBy = sort || 'popularity.desc';
    const data = await getUpcoming(currentPage, sortBy);
    const movies = data.results;
    const totalPages = data.total_pages;

    return (
        <>
            <div className='upcoming-mobile__container'>
                <h1 className='upcoming__heading'>Upcoming</h1>
                <aside className='upcoming-mobile__sort'>
                    <SortDropdown sortBy={sortBy}/>
                </aside>
                <section className='upcoming-mobile__movies'>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/upcoming'}
                                         sortParam={sortBy}/>
                </section>
            </div>
            <div className='upcoming-desktop__container'>
                <aside className='upcoming-desktop__sort'>
                    <SortListComponent sortBy={sortBy}/>
                </aside>
                <section className='upcoming-desctop__movies'>
                    <h1 className='upcoming-desctop__heading'>Upcoming</h1>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/upcoming'}
                                         sortParam={sortBy}/>
                </section>
            </div>
        </>
    );
};