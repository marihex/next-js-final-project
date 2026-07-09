import {getSorted} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";

type Props = {
    currentPage: number;
}

export const PopularPageComponent = async ({currentPage}: Props) => {

    const data = await getSorted(currentPage, 'popularity.desc');
    const movies = data.results;
    const totalPages = data.total_pages;

    return (
        <>
            <section>
                <h1>Popular</h1>
                <MoviesListComponent movies={movies}/>
                <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/popular'}/>
            </section>
        </>
    );
};