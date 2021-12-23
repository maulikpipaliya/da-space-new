import { IUserDetailState } from "../state-types/IUserDetailState"

export enum UserDetailActionTypes {
    GET_USER_DETAILS = "GET_USER_DETAILS",
    SET_USER_DETAILS = "SET_USER_DETAILS",
}

interface IGetUserDetails {
    type: UserDetailActionTypes.GET_USER_DETAILS;
    payload: string;
}

interface ISetUserDetails {
    type: UserDetailActionTypes.SET_USER_DETAILS;
    payload: IUserDetailState;
}

export type IUserDetailActions = IGetUserDetails | ISetUserDetails
