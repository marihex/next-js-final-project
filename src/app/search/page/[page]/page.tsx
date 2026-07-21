import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {search} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import '../../../../components/search/search-page-style.css'
import {Metadata} from "next";

type Props = {
    searchParams: Promise<{query: string}>;
    params: Promise<{page: string}>
}


export async function generateMetadata({
                                           searchParams, params
                                       }: Props): Promise<Metadata> {
    const { query} = await searchParams;
    const {page} = await params;



    return {
        title: `Search Result - ${query} - Page ${page}`,
        description: `Browse All movies searched by "${query}". Discover the latest and most popular films.`,
    };
}

const SearchPaginationPage: FC<Props>  = async ({searchParams, params}) => {
    const {page} = await params;
    const {query} = await searchParams;
    const currentPage: number = Number(page);

    {
        currentPage === 1 && redirect(`/search?query=${query}`)
    }

    const data = await search(query, currentPage);
    const movies = data.results;
    const totalPages = data.total_pages;

    return (
        <section className='search__section'>
            <h1 className='search__header'>Search Results for {query.toUpperCase()}</h1>
            <MoviesListComponent movies={movies}/>
            <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={`/search`}/>
        </section>
    );
};

export default SearchPaginationPage;