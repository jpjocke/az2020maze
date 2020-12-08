import Axios from 'axios';
import {SearchResult} from "../model/SearchResult";
import Cache from "./Cache";

export default class NetworkHandler {
    private readonly cache: Cache<SearchResult>;
    private readonly SEARCH_URL: string = 'http://api.tvmaze.com/search/shows?q=';

    constructor() {
        this.cache = new Cache();
    }

    public search(query: string): Promise<SearchResult> {
        const url = this.SEARCH_URL + encodeURI(query);
        const cachedValue = this.cache.get(query);
        if (cachedValue) {
            return new Promise<SearchResult>((resolve => {
                resolve(cachedValue)
            }));
        }

        const cache = this.cache;

        const result: Promise<SearchResult> = new Promise((resolve, reject) => {
            Axios.get(url)
                .then(function (response) {
                    const value = {shows: response.data};
                    cache.set(query, value);
                    resolve(value);

                })
                .catch(function (error) {
                    reject();
                })
        });

        return result;
    }
}