import React from 'react';
import {redirect} from "next/navigation";
import {getUpcoming, search} from "@/src/services/api.services";
import {UpcomingPageComponent} from "@/src/components/upcoming/UpcomingPageComponent";

type Props = {
    searchParams: Promise<{ sort: string}>;
    params: Promise<{page: string}>
}

const UpcomingPaginationPage = async ({searchParams, params}:Props) => {
    const {page} = await params;
    const {sort} = await searchParams;
    const currentPage: number = Number(page);
    {
        currentPage === 1 && redirect(`/upcoming`)
    }


    return (
        <div>
            <UpcomingPageComponent currentPage={currentPage} sort={sort || 'popularity.desc'}/>
        </div>
    );
};

export default UpcomingPaginationPage;