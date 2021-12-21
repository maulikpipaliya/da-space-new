import React, { FC } from "react"
import { ICallsDialer } from "../Data/CallsData"
import "./DialerItem.css"

interface LeftDialerItemProps {
    item: ICallsDialer
}

export const DialerItem: FC<LeftDialerItemProps> = ({ item }) => {
    return (
        <div className="dialer-item">
            <img
                className="item-avatar"
                src={item.avatar}
                alt="avatar"
            />
            <div className="item-info">
                <label className="item-title">{item.name}</label>
                <label className="item-subtitle">{item.type}</label>
            </div>
            <div className="item-icon">
                <i className="fi-rr-play-alt"></i>
            </div>
        </div>
    )
}
