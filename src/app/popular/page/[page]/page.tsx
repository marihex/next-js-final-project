import React, {FC} from 'react';
import {redirect} from "next/navigation";
import {PopularPageComponent} from "@/src/components/popular/PopularPageComponent";

type Props = {
    params: Promise<{page: number}>
}

const PopularPaginationPage:FC <Props>  = async ({params}: Props) => {
    const {page} = await params;
    const currentPage = Number(page);
    {
        currentPage === 1 && redirect(`/popular`)
    }
    return (
        <div>
            <PopularPageComponent currentPage={currentPage}/>
        </div>
    );
};

export default PopularPaginationPage;