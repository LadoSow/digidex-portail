export function utf8_to_b64( str:string) {
    return window.btoa(unescape(encodeURIComponent( str )));
}
export function b64_to_utf8(str: string | null) {
    return decodeURIComponent(escape(window.atob( str as string )));
}

export const setVal = (key:string, item:string) => {
    item = utf8_to_b64(item)
    sessionStorage.setItem(key,item)
}

export const getVal = (key:string) => {
    return sessionStorage.getItem(key) && b64_to_utf8(sessionStorage.getItem(key))
}