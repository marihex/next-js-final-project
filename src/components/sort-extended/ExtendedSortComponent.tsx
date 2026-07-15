'use client'
import {Genres} from "@/src/models/IGenreModel";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {sortHelper} from "@/src/helpers/sortHelper";
import {useState} from "react";
import './../sort/sort-dropdown/sort-dropdown-style.css'

type Props = {
    genres: Genres[];
}

export const ExtendedSortComponent = ({genres}: Props) => {

    const [openSort, setOpenSort] = useState<boolean>(false);
    const [openGenre, setOpenGenre] = useState<boolean>(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = usePathname()
    console.log(path);


    const handleSort = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', value);

        router.push(`${path}?${params}`);
        setOpenSort(false);
    }

    const handleGenre = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('genre', value);

        router.push(`${path}?${params}`);
        setOpenGenre(false);
    }

    const openSortHandler = () => {
        !openSort ? setOpenSort(true) : setOpenSort(false);
    }

    const openGenreHandler = () => {
        !openGenre ? setOpenGenre(true) : setOpenGenre(false);
    }

    const handleClear = () => {
        setOpenSort(false);
        setOpenGenre(false);
        router.push(`/movie`)
    }

    return (
        <>
            <div className='sort__dropdown'>
                <button onClick={openSortHandler}
                        className='sort__btn'>Sort {searchParams.get('sort') ? sortHelper.map((item, index) =>
                    (searchParams.get('sort') === item.value && (<span key={index}> {item.label}</span>))
                    ) : (<span></span>)}</button>
                {openSort &&
                    <div className='dropdown-list__container'>
                        <ul className='sort-dropdown__list'>
                            {
                                sortHelper.map((item, index) => <li key={index}
                                                                    onClick={() => handleSort(item.value)}
                                                                    className={searchParams.get('sort') === `${item.value}` ? 'selected-item__dropdown' : 'sort-dropdown__item'}>{item.label}</li>)
                            }
                        </ul>

                    </div>
                }
            </div>
            <div className='sort__dropdown'>
                <button onClick={openGenreHandler} className='sort__btn'>Genres {searchParams.get('genre') ? genres.map((genre) =>
                    (searchParams.get('genre') === genre.id.toString() && (<span key={genre.id}> {genre.name}</span>))
                ) : (<span></span>)}</button>
                {openGenre &&
                    <div className='dropdown-list__container'>
                        <ul className='sort-dropdown__list'>
                            {
                                genres.map(genre => <li key={genre.id} onClick={() => {
                                    handleGenre(genre.id.toString())
                                }}
                                                        className={searchParams.get('genre') === `${genre.id}` ? 'selected-item__dropdown' : 'sort-dropdown__item'}
                                >{genre.name}</li>)
                            }
                        </ul>


                    </div>
                }
                {(searchParams.get('sort') || searchParams.get('genre')) &&
                    <button onClick={handleClear} className='sort-clear__btn'>Clear</button>}
            </div>
        </>
    );
};