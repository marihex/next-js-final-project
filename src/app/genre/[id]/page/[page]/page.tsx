import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {GenrePageComponent} from "@/src/components/genre/genre-page/GenrePageComponent";

type Props = {
    params: Promise<{ page: string, id: string | number }>
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
