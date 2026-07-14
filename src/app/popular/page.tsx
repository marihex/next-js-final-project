import React from 'react';
import {PopularPageComponent} from "@/src/components/popular/PopularPageComponent";

type Props = {
    searchParams: Promise<{sort?: string}>
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