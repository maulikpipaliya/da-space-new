import React, { FC, useState } from 'react'
import { ISidebarData } from '../Data/SidebarData'
import "./SidebarOption.css"

interface SidebarProps {
    options: ISidebarData;
    isActive: boolean;
}
export const SidebarOption : FC<SidebarProps> = ({options, isActive}) => {

    const classList = isActive?"sidebar-options active":"sidebar-options";
    return (
        <div className={classList}>
            <div className="sidebar-icon">
                {options.icon}
            </div>
            {options.name&&<label className="sidebar-label">{options.name}</label>}
        </div>
    )
}
