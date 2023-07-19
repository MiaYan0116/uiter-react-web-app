import React from "react";
import TuitSummaryList from "./tuit-summary-list";
// import TuitSummaryItem from "./tuit-summary-list/tuit-summary-item";
function ExploreScreen() {
    return(
        <div>
            <h1>Explore</h1>
            <TuitSummaryList/>
            
            {/* <TuitSummaryItem/>
            <TuitSummaryItem tuit={{
                 "topic": "Weekend",
                 "userName": "BigBird",
                 "time": "2h",
                 "title": `Hey there, fellow birdies! 🐦 Flying high with excitement as I recount my amazing weekend adventure. 🌄✨`,
                 "image": "BigBird.jpg"
            }}/>
            <TuitSummaryItem tuit={{
                 "topic": "FurryFun",
                 "userName": "Rosita",
                 "time": "4d",
                 "title": `Oh, hello, dear friends! 🐾 Just had the most pawsome playdate ever!`,
                 "image": "Rosita.webp"
            }}/> */}
        </div>
    ); 
};
export default ExploreScreen;