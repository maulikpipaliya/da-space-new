export const getFromLS = (key: string) => {
    let value = localStorage.getItem(key)
    if (value) {
        try {
            return JSON.parse(value)
        } catch (e) {
            return value
        }
    }
    return null
}

export const setToLS = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const removeFromLS = (key: string) => {
    localStorage.removeItem(key)
}

export const convertToSlug = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-")
}
