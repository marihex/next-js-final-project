import React from 'react';
import {PopularPageComponent} from "@/src/components/popular/PopularPageComponent";

const PopularPage = () => {
    const currentPage = 1;
    return (
        <div>
            <PopularPageComponent currentPage={currentPage} />
        </div>
    );
};

export default PopularPage;