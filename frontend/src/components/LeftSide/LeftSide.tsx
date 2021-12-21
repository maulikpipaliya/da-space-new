import React from "react"
import { CallsMenu, DialerList } from "../Data/CallsData"
import { DialerItem } from "./DialerItem"
import "./LeftSide.css"
import { MenuOption } from "./MenuOption"

export const LeftSide = () => {
    const menu = CallsMenu
    const dialerList = DialerList

    return (
        <div className="leftside-container">
            <div className="leftside-menu">
                <label className="leftside-menu-label">Calls</label>
                <div className="leftside-menu-items">
                    {menu.map((item) => {
                        return (
                            <MenuOption
                                item={item}
                                isActive={
                                    item.name === "Speed Dial" ? true : false
                                }
                            />
                        )
                    })}
                </div>
            </div>
            <div className="leftside-dialer">
                <label className="dialer-label">Make a Call</label>
                <div className="leftside-dialer-search">
                    <input type="text" placeholder="Enter a Name"/>
                </div>
                <div className="leftside-dialer-suggested">
                    <label className="suggested-label">Suggested</label>
                    <div className="suggested-list">
                        {dialerList.map((item) => {
                            return (
                                <DialerItem item={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
