import React from 'react';
import {getGenres} from "@/src/services/api.services";

const GenresPage = async () => {
    const data = await getGenres();
    const genres = data.genres

    return (
        <ul>
            {
                genres.map((genre) => <li key={genre.id}>{genre.name}</li>)
            }

        </ul>
    );
};

export default GenresPage;