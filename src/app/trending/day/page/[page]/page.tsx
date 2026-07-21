import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {getTrending} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {Metadata} from "next";

type Props = {
    params: Promise<{page: string}>
}

export async function generateMetadata({
                                           params
                                       }: Props): Promise<Metadata> {
    const {page} = await params;


    return {
        title: `Trending Movies This Day - TMDB Movies - Page ${page}`,
        description: `Browse the most popular movies trending this day`,
    };
}

const TrendingDayPaginationPage: FC<Props> = async ({params}) => {
    const {page} = await params
    const currentPage: number = Number(page)
    {
        currentPage === 1 && redirect('/day')
    }

    const data = await getTrending('day', currentPage);
    const movies = data.results
    const totalPages = data.total_pages

    return (
        <section className='trending__section'>
            <h1 className='trending__heading'>Trending Movies This Day</h1>
            <div className='trending__movies-container'>
                <MoviesListComponent movies={movies}/>
                <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/trending/day'}/>
            </div>
        </section>
    );
};

export default TrendingDayPaginationPage;