export interface ITrailerModel {
    id: number
    results: ITrailerResult[]
}

export interface ITrailerResult {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    id: string
    published_at: string
}
