import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes , Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import NotFound from '../components/Common/NotFound' ;
import Landing from "../pages/Landing/Home";
import OnlyFanHome from "../pages/Landing/OnlyFan/Home";
import OnlyFanClient from "../pages/Landing/OnlyFan/Client";
import Settings from "../pages/Landing/Settings";
import Upgrade from "../pages/Landing/Upgrade";
import Message from "../pages/Landing/Message";
import Promote from "../pages/Landing/Promote";
import Notification from "./Notification";
import Shop from "../pages/Landing/Shop";
import ExploreCreator from "../pages/Landing/ExploreCreator";
import Affiliate from "../pages/Landing/Affiliate"

const Routing = () => {
    return (
        <Routes>
            <Route path="/*" element={<Landing />} />
            <Route path="/home/*" element={<Landing />} />
            <Route path="/home/onlyfan/*" element={<OnlyFanHome />} />
            <Route path="/home/onlyfan/client" element={<OnlyFanClient />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/message" element={<Message />} />
            <Route path="/promote/*" element={<Promote />} />
            <Route path="/notification/*" element={<Notification />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/exploreCreators/*" element={<ExploreCreator/>}/>
            <Route path="/affiliate/*" element={<Affiliate/>}/>

        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
