import {getSorted} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {SortDropdown} from "@/src/components/sort/sort-dropdown/SortDwopdown";
import './popular-style.css';

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
            <section>
                <h1>Popular</h1>
                <SortDropdown/>
                <MoviesListComponent movies={movies}/>
                <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/popular'} sortParam={sortBy}/>
            </section>
        </>
    );
};