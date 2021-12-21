import { ReactNode } from "react"

export interface ICallsData {
    id:number;
    name: string;
    icon: ReactNode;
}

export interface ICallsDialer {
    id:number;
    name: string;
    type: string;
    avatar: string;
}

export const CallsMenu: ICallsData[] = [
    {
        id: 1,
        name: "Speed Dial",
        icon: <i className="fi-rr-smartphone"></i>
    },
    {
        id: 2,
        name: "Contacts",
        icon: <i className="fi-rr-portrait"></i>
    },
    // {
    //     id: 3,
    //     name: "History",
    //     icon: <i className="fi-rr-time-past"></i>
    // },
    // {
    //     id: 4,
    //     name: "Voicemail",
    //     icon: <i className="fi-rr-microphone"></i>
    // },
]

export const DialerList: ICallsDialer[] = [
    {
        id: 1,
        name: "Mihir Zalavadiya",
        type: "Student",
        avatar: "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1638257833~hmac=e1788c23ce83f8d394de8dfca8fcb42f",
    },
    {
        id: 1,
        name: "Sachin Rathod",
        type: "Student",
        avatar: "https://cdn-icons.flaticon.com/png/512/3006/premium/3006876.png?token=exp=1638257776~hmac=ce9b6226ca7c81da9bb38f1136f0d4df",
    },
    {
        id: 1,
        name: "Maulik Pipaliya",
        type: "Student",
        avatar: "https://cdn-icons.flaticon.com/png/512/3006/premium/3006876.png?token=exp=1638257776~hmac=ce9b6226ca7c81da9bb38f1136f0d4df",
    },
    {
        id: 1,
        name: "Keshav Pritani",
        type: "Student",
        avatar: "https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1638257833~hmac=e1788c23ce83f8d394de8dfca8fcb42f",
    },
]