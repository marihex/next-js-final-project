'use client';

import {useCallback, useEffect, useRef, useState} from "react";
import {IMovieCardModel} from "@/src/models/IMovieCardModel";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import './search-style.css'
import {useClickOutside} from "@/src/hooks/useClickOutside";
import SearchIcon from '@mui/icons-material/Search';

export const HeaderSearchComponent = () => {
    console.log('render');
    const [query, setQuery] = useState<string>('');
    console.log(query);
    const [searchResult, setSearchResult] = useState<IMovieCardModel[]>([]);
    const currentPage = 1;
    const router = useRouter();
    const currentPath = usePathname();
    const searchRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const dataFetch = async () => {
            const data = await fetch(`/api/search?query=${query}`);
            const result = await data.json()
            setSearchResult(result)
        }
        query &&  dataFetch();
    }, [query])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSearchResult([]);
        setQuery('')
    }, [currentPath]);

    const handleClickOutside = useCallback(() => {
        setTimeout(() => {
            setSearchResult([]);
            setQuery('');
        }, 50);
    }, []);


    useClickOutside(searchRef, handleClickOutside);




    const onClickHandler = () => {
        router.push(`/search?query=${query}`);
        setSearchResult([]);
        setQuery('')
    }

    return (
        <div className="search__container" ref={searchRef} >
            <input type="text"  className='search__input' value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onClickHandler()
                }
            }} />
            {query && <ul className='suggestion__list' >
                {
                    searchResult.map(movie => <li key={movie.id}><Link href={`/movie/` + movie.id.toString()}>{movie.title}</Link></li>)
                }
            </ul>}
            <button onClick={onClickHandler} disabled={!query}><SearchIcon/></button>
        </div>
    );
};