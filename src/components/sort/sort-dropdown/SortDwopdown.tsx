'use client';

import {FC, useState} from "react";
import {sortHelper} from "@/src/helpers/sortHelper";

type Props = {
    sortParam: string;
}

export const SortDropdown: FC<Props> = ({sortParam}) => {
    const [open, setOpen] = useState<boolean>(false);

    const openHandler = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    return (
        <div>
            <button onClick={openHandler}>Sort</button>
            <ul>
                {
                    sortHelper.map((item, index) => <li key={index}>{item.label}</li>)
                }
            </ul>
        </div>
    );
};