import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {getTrending} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";

type Props = {
    params: Promise<{page: string}>
}

const TrendingWeekPaginationPage: FC<Props> = async ({params}) => {
    const {page} = await params
    const currentPage: number = Number(page)
    {
        currentPage === 1 && redirect('/day')
    }

    const data = await getTrending('week', currentPage);
    const movies = data.results
    const totalPages = data.total_pages

    return (
        <section className='trending__section'>
            <h1 className='trending__heading'>Trending Movies This Week</h1>
            <div className='trending__movies-container'>
                <MoviesListComponent movies={movies}/>
                <PaginationComponent totalPages={totalPages} currentPage={currentPage} basePath={'/trending/week'}/>
            </div>
        </section>
    );
};

export default TrendingWeekPaginationPage;