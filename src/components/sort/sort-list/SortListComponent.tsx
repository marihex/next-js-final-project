'use client'

import {sortHelper} from "@/src/helpers/sortHelper";
import {usePathname, useRouter} from "next/navigation";
import './sort-list-style.css';

type Props = {
    sortBy: string;
}

export const SortListComponent = ({sortBy}: Props) => {
    const basePath = usePathname();
    const router = useRouter();


    const handleSort = (value: string) => {
        router.push(`${basePath}/?sort=${value}`)
    }
    const handleClear = () => {
        router.push(`${basePath}`)
    }

    return (
        <div className='sort-list__container'>
            <h2 className='sort-list__heading'>Sort:</h2>
            <ul className='sort-list'>
                {
                    sortHelper.map((item, index) =>
                        <li key={index} onClick={() => {handleSort(item.value)}}
                        className={`${sortBy}` === `${item.value}` ? 'selected-sort__item' : 'sort__item'}>
                            {item.label}
                        </li>)
                }
            </ul>
            <button onClick={handleClear} className='clear-btn__list'>Clear</button>
        </div>
    );
};