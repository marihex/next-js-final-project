'use client';

import {useState} from "react";
import {sortHelper} from "@/src/helpers/sortHelper";
import {usePathname, useRouter} from "next/navigation";
import './sort-dropdown-style.css';



export const SortDropdown = () => {
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
        <div>
            <button onClick={openHandler}>Sort</button>
            {open && <div>
                <ul>
                    {
                        sortHelper.map((item, index) => <li key={index}
                                                            onClick={() => handleSort(item.value)}>{item.label}</li>)
                    }
                </ul>

                <button onClick={handleClear}>Clear</button>
            </div> }
        </div>
    );
};