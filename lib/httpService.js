export class HttpService {
    globalaHeaders;
    constructor(globalaHeaders = {}) {
        this.globalaHeaders = globalaHeaders;
    }
    request(method, url, body = {}, headers = {}) {
        return fetch(url,{
            method,
            ...(method !== "GET" && {
                body: JSON.stringify(body)
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                ...this.globalaHeaders,
                ...headers
            }
        }).then(data => {
            if(data.ok){
                return data.json();
            }
            throw data;
        })
    }

    get(url, headers = {}) {
        return this.request("GET", url, {}, headers)
    }

    post(url, body = {}, headers = {}) {
        return this.request("POST", url, body, headers)
    }

    put(url, body = {}, headers = {}) {
        return this.request("PUT", url, body, headers)
    }

    delete(url, headers = {}) {
        return this.request("DELETE", url, {}, headers)
    }
}