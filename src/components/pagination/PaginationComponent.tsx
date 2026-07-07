'use client'

import {FC} from "react";
import {Pagination} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
}

const PaginationComponent: FC <PaginationProps> = ({totalPages, currentPage}) => {
const router = useRouter();
    const path = usePathname().split('/').at(1)
    const  finalPath = `/${path}`


    const handlePageChange = (
        _: React.ChangeEvent<unknown>,
        page: number
    ) =>{ console.log(finalPath)
        page === 1 ? router.push('/movie') : router.push(`${finalPath}/page/${page}`); };

    return (
        <div className='mt-5 pb-5 w-full flex items-center justify-center'>
            <Pagination count={totalPages > 500 ? 500 : totalPages} // API ne pidtrumue storinku bil`she 500
                        page={currentPage}
                        onChange={handlePageChange}
                        shape={"rounded"}
                        color={"primary"}
                        variant={"outlined"}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: '#fff',
                                borderColor: 'rgba(255, 255, 255, 0.23)',
                            },
                            '& .MuiPaginationItem-root.Mui-selected': {
                                color: '#fff',
                                backgroundColor: 'primary.main',
                            }
                        }}
            />

        </div>
    );
};

export default PaginationComponent;