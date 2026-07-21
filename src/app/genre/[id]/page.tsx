import React from 'react';
import './genre-style.css'
import {GenrePageComponent} from "@/src/components/genre/genre-page/GenrePageComponent";
import {Metadata} from "next";
import {getGenres} from "@/src/services/api.services";

type Props = {
    params: Promise<{ id: string | number }>;
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { id } = await params;

    const data = await getGenres();
    const genres = data.genres

    const genre = genres.find(g => g.id === Number(id));

    return {
        title: `${genre?.name ?? "Unknown"} Movies`,
        description: `Browse ${genre?.name ?? "Unknown"} movies`,
    };
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