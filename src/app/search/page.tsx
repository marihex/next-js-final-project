import React from 'react';
import {SearchPageComponent} from "@/src/components/search/SearchPageComponent";

type Props = {
    searchParams: Promise<{query: string}>
}

const SearchPage = async ({searchParams}:Props) => {

    return (
        <section>
            <SearchPageComponent searchParams={searchParams}/>
        </section>
    );
};

export default SearchPage;