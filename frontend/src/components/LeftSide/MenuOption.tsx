import { FC } from 'react'
import { ICallsData } from '../Data/CallsData'
import "./MenuOption.css"

interface LeftMenuOptionProps {
    item: ICallsData,
    isActive: boolean
}

export const MenuOption:FC<LeftMenuOptionProps> = ({item, isActive}) => {
    const classList = isActive ? "item-active menu-item" : "menu-item";
    return (
        <div className={classList}>
            <div className="item-icon">{item.icon}</div>
            <label className="item-label">{item.name}</label>
        </div>
    )
}
