import {search} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import './search-page-style.css'

type Props = {
    searchParams: Promise<{ query: string }>
}

export const SearchPageComponent = async ({searchParams}: Props) => {
    const {query} = await searchParams;
    const data = await search(query, 1);
    const results = data.results;
    const totalPages = data.total_pages;
    console.log(results)
    return (
        <section className='search__section'>
            <h1 className='search__header'>Search Results for {query.toUpperCase()}</h1>
            {results.length > 0 ? <MoviesListComponent movies={results}/> : <div className='w-full flex justify-center mt-10 text-2xl text-red-700'>No results</div>}
            {results.length > 0 && <PaginationComponent currentPage={1} totalPages={totalPages} basePath={`/search`}/>}
        </section>
    );
};