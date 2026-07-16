import React from 'react';
import {getMoviesForCarousel} from "@/src/services/api.services";
import {MainCarouselComponent} from "@/src/components/carousels/main-carousel/MainCarouselComponent";

const HomePage = async () => {
    const data = await getMoviesForCarousel(1);
    const movies = data.results
    return (
       <div>
           <main>
               <section>
                   <MainCarouselComponent movies={movies}/>
               </section>
           </main>
       </div>
    );
};

export default HomePage;