import React from 'react';
import {getTrending} from "@/src/services/api.services";
import {SmCarouselComponent} from "@/src/components/carousels/sm-carousel/SmCarouselComponent";
import './trending-styles.css';

const TrendingPage = async () => {
    const dataDay = await getTrending('day', '1');
    const dataWeek = await getTrending('week', '1');

    const day = dataDay.results;
    const week = dataWeek.results;
    return (
        <main className='trending__main'>
        <section className='trending-main__section'>
            <h1 className='trending__heading'>Trending Movies</h1>
            <SmCarouselComponent movies={day} category={'Day'} endpoint={`/trending/day`}/>
            <SmCarouselComponent movies={week} category={'Week'} endpoint={`/trending/week`}/>
        </section>
        </main>
    );
};

export default TrendingPage;