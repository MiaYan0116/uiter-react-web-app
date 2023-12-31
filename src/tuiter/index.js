import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSiderbar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
// Assignment4
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuit-reducer"
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

// 2.1.5 Creating a Tuiter placeholder component
function Tuiter(){
  return(
    <Provider store = {store}>
      <div>
        {/* <Link to="/labs/a3">A3</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link> */}
        <Nav/>
        <div className="row">
          <div className="col-2 col-xl-2">
            <NavigationSiderbar/>
          </div>
          <div className="col-10 col-xl-7">
            <Routes>
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen/>} />
              <Route path="/profile" element={<ProfileScreen/>} />
            </Routes>
          </div>
          <div className="col-3 d-none d-xl-inline">
            <WhoToFollowList/>
          </div>
      </div>
    </div>
  </Provider>
        
    );
};
export default Tuiter