import React from "react";
// import whoArray from "./who.json";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector((state) => state.who);
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow!!</h3>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who.id}
                        who={who}
                    />
                )
            }
        </ul>
    );
};
export default WhoToFollowList