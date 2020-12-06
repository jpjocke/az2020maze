// Allow for a 5 min cache
const MAX_TIME_MILLIS: number = 5 * 60 * 3600;

class CacheObj<T> {
    readonly timestamp: number;

    constructor(public readonly value: T) {
        this.timestamp = new Date().getTime();
    }
}

export default class Cache<T> {
    private readonly map: Map<string, CacheObj<T>>;
    private readonly timeout: number;

    constructor(timeout = MAX_TIME_MILLIS) {
        this.map = new Map();
        this.timeout = timeout;
    }

    public get(key: string): T | undefined {
        const value = this.map.get(key);
        if (value) {
            if (value.timestamp + this.timeout < new Date().getTime()) {
                this.map.delete(key);
                return undefined;
            }
            return value.value;
        }
        return undefined;
    }

    public set(key: string, value: T) {
        this.map.set(key, new CacheObj<T>(value));
    }
}