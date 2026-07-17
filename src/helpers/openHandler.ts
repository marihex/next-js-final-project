import {Dispatch, SetStateAction} from "react";

export const openHandler = (state: boolean , setState: Dispatch<SetStateAction<boolean>>) => {
    !state ? setState(true) : setState(false)
}

export const subMenuOpenHandler = ( state: boolean , setState: Dispatch<SetStateAction<boolean>>) => {
    !state ? setState(true) : setState(false)
}