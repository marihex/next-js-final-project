import React from 'react';
import {MainCarouselComponent} from "@/src/components/carousels/main-carousel/MainCarouselComponent";
import {SmCarouselComponent} from "@/src/components/carousels/sm-carousel/SmCarouselComponent";
import './home-style.css'
import {carouselDataFetch} from "@/src/helpers/carouselFetchHelper";

const HomePage = async () => {
    const [upcoming, movies, trending, trendingWeek, action, adventure, animation, comedy, horror] = await carouselDataFetch()



    return (
       <div>
           <main className='flex flex-col items-center gap-5 pt-5'>
               <section className='hero-section'>
                   <MainCarouselComponent movies={upcoming}/>
               </section>
               <section className='sm-carousels__section'>
                   <SmCarouselComponent movies={movies} category={'Popular'} endpoint={`/popular`}/>
                   <SmCarouselComponent movies={trending} category={'Trending this Day'} endpoint={`/trending/day`}/>
                   <SmCarouselComponent movies={trendingWeek} category={'Trending this Week'} endpoint={`/trending/week`}/>
                   <SmCarouselComponent movies={upcoming} category={'Upcoming'} endpoint={`/upcoming`}/>
                   <SmCarouselComponent movies={action} category={'Action'} endpoint={`/genre/28`}/>
                   <SmCarouselComponent movies={adventure} category={'Adventure'} endpoint={`/genre/12`}/>
                   <SmCarouselComponent movies={animation} category={'Animation'} endpoint={`/genre/16`}/>
                   <SmCarouselComponent movies={comedy} category={'Comedy'} endpoint={`/genre/35`}/>
                   <SmCarouselComponent movies={horror} category={'Horror'} endpoint={`/genre/27`}/>

               </section>
           </main>
       </div>
    );
};

export default HomePage;