import React from 'react';
import {getTrending} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import '../trending-styles.css'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Trending Movies Today - TMDB Movies",
    description:
        "Browse the most popular movies trending today",
};

const TrendingDayPage = async () => {
    const data = await getTrending('day', 1);
    const movies = data.results;
    const totalPages = data.total_pages;
    const currentPage = 1

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

export default TrendingDayPage;