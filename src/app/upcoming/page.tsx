import React from 'react';
import {UpcomingPageComponent} from "@/src/components/upcoming/UpcomingPageComponent";
import {Metadata} from "next";

type Props = {
    searchParams: Promise<{sort?: string}>
}

export const metadata: Metadata = {
    title: "Upcoming Movies - TMDB Movies",
    description:
        "Browse upcoming movies",
};

const UpcomingPage =  async ({searchParams}: Props) => {
    const {sort} = await searchParams;
    const currentPage = 1;
    return (
        <div>
            <UpcomingPageComponent currentPage={currentPage} sort={sort || 'popularity.desc'}/>
        </div>
    );
};

export default UpcomingPage;