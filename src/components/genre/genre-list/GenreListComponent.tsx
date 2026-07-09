'use client'
import {Chip} from "@mui/material";
import React, {FC} from "react";
import {IGenreModel} from "@/src/models/IGenreModel";
import {usePathname} from "next/navigation";
import '../../../app/genre/[id]/genre-style.css'

type GenresProps = {
    genresData: IGenreModel
}

export const GenreListComponent:  FC<GenresProps> = ({genresData}) => {

    const genres = genresData.genres;
    const pathName = usePathname()
    const path = pathName.split('/').at(2)

    return (
        <>
            <div className='genres-list__container'>
                <h2 className='genres-list__heading'>All Genres:</h2>
                <ul className={'genres__list'}>
                    {
                        genres && genres.map(genre => {
                            const isSelected = Number(path) === genre.id
                            return (
                                <li  key={genre.id}>
                                    <Chip
                                        label={genre.name}
                                        component="a"
                                        href={`/genre/${genre.id}`}
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
        </>
    );
};