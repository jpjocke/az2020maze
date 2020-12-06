export interface Schedule {
    time: string
    days: string[]
}

export interface Rating {
    average: number
}

export interface Country {
    name: string
    code: string
    timezone: string
}

export interface Network {
    id: number
    names: string
    country: Country
}

export interface Externals {
    tvrage: number | null
    thetvdb: number | null
    imdb: string | null
}

export interface Image {
    medium: string
    original: string
}

export interface Show {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    premiered: string
    officialSite: string
    schedule: Schedule
    rating: Rating
    weight: number
    network: Network
    webChannel: string | null
    externals: Externals
    image: Image
    summary: string
    updated: number
}

export interface ShowSearch {
    score: number
    show: Show
}

export interface SearchResult {
    shows: ShowSearch[]
}