'use client'

import {Genres} from "@/src/models/IGenreModel";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {sortHelper} from "@/src/helpers/sortHelper";
import './../sort/sort-list/sort-list-style.css'

type Props = {
    genres: Genres[];
}
export const ExtendedListSortComponent = ({genres}: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = usePathname();

    const handleSort = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', value)

        router.push(`${path}?${params}`)
    }

    const handleGenre = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('genre', value)

        router.push(`${path}?${params}`)
    }

    const handleClear = () => {
        router.push(`/movie`)
    }

    return (
        <div className='extended-sort__container'>
            <div className='extended-sort-list__container'>
                {(searchParams.get('sort') || searchParams.get('genre')) &&
                    <button onClick={handleClear} className='sort-clear__btn'>Clear</button>}
                <h2 className='sort-list__heading'>Sort:</h2>
                <ul className='sort-list'>
                    {
                        sortHelper.map((item, index) => <li key={index}
                                                            onClick={() => handleSort(item.value)}
                                                            className={searchParams.get('sort') === `${item.value}` ? 'selected-sort__item' : 'sort__item'}>{item.label}</li>)
                    }
                </ul>


            </div>
            <div className='extended-sort-list__container extended-genres'>
                <h2  className='sort-list__heading'>Genres</h2>
                    <ul className='sort-list'>
                        {
                            genres.map(genre => <li key={genre.id} onClick={() => {
                                handleGenre(genre.id.toString())
                            }}
                                                    className={searchParams.get('genre') === `${genre.id}` ?  'selected-sort__item' : 'sort__item'}
                            >{genre.name}</li>)
                        }
                    </ul>

            </div>


        </div>
    );
};