import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {PopularPageComponent} from "@/src/components/popular/PopularPageComponent";
import {Metadata} from "next";

type Props = {
    params: Promise<{page: number}>
    searchParams: Promise<{sort?: string}>
}

export async function generateMetadata({
                                           searchParams, params
                                       }: Props): Promise<Metadata> {
    const { sort} = await searchParams;
    const {page} = await params;


    const sortBy = sort || "popularity.desc";



    return {
        title: `Popular Movies - ${sortBy} - Page ${page}`,
        description: `Browse All Popular movies sorted by "${sortBy}". Discover the latest and most popular films.`,
    };
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