import React from 'react';
import {getTrending} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import './../trending-styles.css'
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Trending Movies This Week - TMDB Movies",
    description:
        "Browse the most popular movies trending this week.",
};

const TrendingWeekPage = async () => {
    const data = await getTrending('week', 1);
    const movies = data.results;
    const totalPages = data.total_pages;
    const currentPage = 1

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

export default TrendingWeekPage;