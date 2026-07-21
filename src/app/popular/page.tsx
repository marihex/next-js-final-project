import React from 'react';
import {PopularPageComponent} from "@/src/components/popular/PopularPageComponent";
import {Metadata} from "next";

type Props = {
    searchParams: Promise<{sort?: string}>
}

export async function generateMetadata({
                                           searchParams,
                                       }: Props): Promise<Metadata> {
    const { sort} = await searchParams;

    const sortBy = sort || "popularity.desc";



    return {
        title: `Popular Movies - ${sortBy}`,
        description: `Browse All Popular movies sorted by "${sortBy}". Discover the latest and most popular films.`,
    };
}

const PopularPage = async ({searchParams}: Props) => {

    const {sort} = await searchParams



    const currentPage = 1;
    return (
        <div>
            <PopularPageComponent currentPage={currentPage} sort={sort || 'popularity.desc'}/>
        </div>
    );
};

export default PopularPage;