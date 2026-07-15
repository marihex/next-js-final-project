import React from 'react';
import {UpcomingPageComponent} from "@/src/components/upcoming/UpcomingPageComponent";

type Props = {
    searchParams: Promise<{sort?: string}>
}

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