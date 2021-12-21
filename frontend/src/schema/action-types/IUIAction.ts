export enum UIActionTypes {
    SET_SCREEN_VIEW = "SET_SCREEN_VIEW",
}

interface ISetScreenView {
    type: UIActionTypes.SET_SCREEN_VIEW;
    payload: string;
}

export type IUIAction = ISetScreenView
