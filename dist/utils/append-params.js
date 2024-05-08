export function appendParams(url, params) {
    if (!params)
        return url;
    const urlWithParams = new URL(url);
    Object.entries(params).forEach(([key, value]) => urlWithParams.searchParams.append(key, String(value)));
    return urlWithParams.toString();
}
//# sourceMappingURL=append-params.js.map