'use client';

import {useState} from "react";
import {sortHelper} from "@/src/helpers/sortHelper";
import {usePathname, useRouter} from "next/navigation";
import './sort-dropdown-style.css';

type Props = {
    sortBy: string;
}

export const SortDropdown = ({sortBy}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const basePath = usePathname();
    const router = useRouter();

    const openHandler = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    const handleSort = (value: string) => {

        router.push(`${basePath}/?sort=${value}`)
    }
    const handleClear = () => {
        router.push(`${basePath}`)
    }

    return (
        <div className='sort__dropdown'>
            <button onClick={openHandler} className='sort__btn'>Sort</button>
            {open &&
                <div className='dropdown-list__container'>
                    <ul className='sort-dropdown__list'>
                        {
                            sortHelper.map((item, index) => <li key={index}
                                                                onClick={() => handleSort(item.value)}
                                                                className={`${sortBy}` === `${item.value}` ? 'selected-item__dropdown' :'sort-dropdown__item'}>{item.label}</li>)
                        }
                    </ul>

                    <button onClick={handleClear} className='sort-clear__btn'>Clear</button>
                </div>
            }
        </div>
    );
};