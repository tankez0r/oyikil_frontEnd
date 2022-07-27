export function fetcher(...args) {
    return fetch(...args).then(res => res.json());
}
export function fetcherStatus(...args) {
    return fetch(...args).then((res) => { if (!res.ok) { return (res.json()) }; return ({ ...res.json(), ok: true }) });
}