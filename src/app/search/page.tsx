import React from 'react';
import {SearchPageComponent} from "@/src/components/search/SearchPageComponent";
import {Metadata} from "next";

type Props = {
    searchParams: Promise<{query: string}>
}

export async function generateMetadata({
                                           searchParams,
                                       }: Props): Promise<Metadata> {
    const { query} = await searchParams;



    return {
        title: `Search Result - ${query}`,
        description: `Browse All movies searched by "${query}". Discover the latest and most popular films.`,
    };
}

const SearchPage = async ({searchParams}:Props) => {

    return (
        <section>
            <SearchPageComponent searchParams={searchParams}/>
        </section>
    );
};

export default SearchPage;