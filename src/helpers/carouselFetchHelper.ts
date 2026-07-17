import {getByGenres, getMoviesForCarousel, getTrending, getUpcoming} from "@/src/services/api.services";

export const carouselDataFetch = async () => {
    const [dataUpcoming,
        dataAll,
        dataTrending,
        dataTrendingWeek,
        dataAction,
        dataAdventure,
        dataAnimation,
        dataComedy,
        dataHorror] = await Promise.all([getMoviesForCarousel(1),
        getTrending('day', 1),
        getTrending('week', 1),
        getUpcoming(1, 'popularity.desc'),
        getByGenres('28', 1),
        getByGenres('12', 1),
        getByGenres('16', 1),
        getByGenres('35', 1),
        getByGenres('27', 1)])
    return [dataAll.results, dataTrending.results, dataTrendingWeek.results, dataUpcoming.results, dataAction.results, dataAdventure.results, dataAnimation.results, dataComedy.results, dataHorror.results];
}