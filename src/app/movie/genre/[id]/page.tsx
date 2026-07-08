import React from 'react';
import {getByGenres, getGenres} from "@/src/services/api.services";
import {MoviesListComponent} from "@/src/components/movie/MoviesListComponent/MoviesListComponent";
import {GenresListComponent} from "@/src/components/genre/GenresListComponent";
import './genre-style.css'
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {Chip} from "@mui/material";

type Props = {
    params: Promise<{ id: string | number }>;
}

const GenrePage = async ({params}: Props) => {
    const {id} = await params;
    const data = await getByGenres(id, 1);
    const genresData = await getGenres();
    const genres = genresData.genres;
    const genre = genres.find((genre) => genre.id.toString() === id);
    const movies = data.results;
    const totalPages = data.total_pages

    return (
        <>
            <div className='genre__container-mob'>
                {genre && <h1 className='genre__title'>{genre.name}</h1>}
                <aside className='genres-list__block'>
                    <GenresListComponent genresData={genresData}/>
                </aside>
                <section className='movie-list__genre'>
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={1}/>
                </section>
            </div>
            <div className='genre__container-desktop'>
                <aside className='genres-list__aside-desktop'>
                    <div className='genres-list__container'>
                        <h2 className='genres-list__heading'>All Genres:</h2>
                        <ul className={'genres__list'}>
                            {
                            genres && genres.map(genre => {
                                const isSelected = Number(id) === genre.id
                                return (
                                    <li  key={genre.id}>
                                        <Chip
                                             label={genre.name}
                                             component="a"
                                             href={`/movie/genre/${genre.id}`}
                                             variant={isSelected ? "filled" : "outlined"}
                                             color="primary"
                                             clickable
                                             sx={{
                                                 '&.MuiChip-root:hover': {
                                                     bgcolor: isSelected ? "primary.dark" : "dimgray",
                                                 },
                                                 ...(!isSelected && {
                                                     '&.MuiChip-root': {
                                                         bgcolor: 'darkslategrey',
                                                         color: 'white'
                                                     }
                                                 })
                                             }}/>
                                    </li>)
                            })}</ul>
                    </div>
                </aside>
                <section className='movie-list__genre-desktop'>
                    {genre && <h1 className='genre__title'>{genre.name}</h1>}
                    <MoviesListComponent movies={movies}/>
                    <PaginationComponent totalPages={totalPages} currentPage={1}/>
                </section>
            </div>
        </>

    );
};

export default GenrePage;