import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {PopularPageComponent} from "@/src/components/popular/PopularPageComponent";

type Props = {
    params: Promise<{page: number}>
    searchParams: Promise<{sort?: string}>
}

const PopularPaginationPage:FC <Props>  = async ({params, searchParams}: Props) => {
    const {page} = await params;
    const {sort} = await searchParams
    const currentPage = Number(page);
    {
        currentPage === 1 && redirect(`/popular`)
    }
    return (
        <div>
            <PopularPageComponent currentPage={currentPage} sort={sort || 'popularity.desc'}/>
        </div>
    );
};

export default PopularPaginationPage;