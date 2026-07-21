import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {GenrePageComponent} from "@/src/components/genre/genre-page/GenrePageComponent";
import {Metadata} from "next";
import {getGenres} from "@/src/services/api.services";

type Props = {
    params: Promise<{ page: string, id: string | number }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { page, id } = await params;

    const data = await getGenres();
    const genres = data.genres

    const genre = genres.find(g => g.id === Number(id));

    return {
        title: `${genre?.name ?? "Unknown"} Movies - Page ${page}`,
        description: `Browse ${genre?.name ?? "Unknown"} movies - Page ${page} `,
    };
}

const GenrePaginationPage: FC<Props> = async ({params}) => {
    const {page, id} = await params;
    console.log(id, page)
    const currentPage: number = Number(page);
    {
        currentPage === 1 && redirect(`/genre/${id}`)
    }

    return (
        <>
            <GenrePageComponent currentPage={currentPage} params={params}/>
        </>
    );
};

export default GenrePaginationPage;
