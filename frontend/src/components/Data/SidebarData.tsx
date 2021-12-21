import { ReactNode } from "react"

export interface ISidebarData {
    id:number;
    name: string;
    icon: ReactNode;
}

export const SidebarData: ISidebarData[] = [
    {
        id: 1,
        name: "Activity",
        icon: <i className="fi-rr-bell"></i>,
    },
    {
        id: 2,
        name: "Chat",
        icon: <i className="fi-rr-comment"></i>,
    },
    {
        id: 3,
        name: "Teams",
        icon: <i className="fi-rr-user"></i>,
    },
    {
        id: 4,
        name: "Placements",
        icon: <i className="fi-rr-briefcase"></i>,
    },
    {
        id: 5,
        name: "Exam",
        icon: <i className="fi-rr-test"></i>,
    },
    {
        id: 6,
        name: "Calls",
        icon: <i className="fi-rr-headset"></i>,
    },
]

// export const SidebarMore: ISidebarData[] = [
//     {
//         id: 1,
//         name: "a",
//         icon: <i className="fi-rr-menu-dots"></i>,
//     },
// ]

export const SidebarBottom:ISidebarData[] = [
    {
        id: 1,
        name: "Apps",
        icon: <i className="fi-rr-add"></i>,
    },
    {
        id: 2,
        name: "Help",
        icon: <i className="fi-rr-interrogation"></i>,
    }
]