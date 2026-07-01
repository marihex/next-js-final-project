import type {IMovieCardModel} from "./IMovieCardModel.ts";

export interface IBaseTmdbModel {
    pages: number;
    results: IMovieCardModel[];
    total_pages: number;
    total_results: number;
}