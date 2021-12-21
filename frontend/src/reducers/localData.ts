import { RootState } from "../store"

export const loadState = () => {
    try {
        const localDASpaceData = localStorage.getItem("localDASpaceData")

        if (localDASpaceData === null) return undefined

        return JSON.parse(localDASpaceData)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state: RootState) => {
    try {
        localStorage.setItem("localDASpaceData", JSON.stringify(state))
    } catch (error) {
        console.log(error)
        return undefined
    }
}
