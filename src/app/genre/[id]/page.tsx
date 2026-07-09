import React from 'react';
import './genre-style.css'
import {GenrePageComponent} from "@/src/components/genre/genre-page/GenrePageComponent";

type Props = {
    params: Promise<{ id: string | number }>;
}

const GenrePage = async ({params}: Props) => {

    const currentPage = 1;

    return (
        <>
            <GenrePageComponent currentPage={currentPage} params={params}/>
        </>

    );
};

export default GenrePage;