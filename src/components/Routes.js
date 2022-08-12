import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes , Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import NotFound from '../components/Common/NotFound' ;
import Landing from "../pages/Landing/Home";
import OnlyFanHome from "../pages/Landing/OnlyFan/Home";
import OnlyFanClient from "../pages/Landing/OnlyFan/Client";

const Routing = () => {
    return (
        <Routes>
            <Route path="/*" element={<Landing />} />
            <Route path="/home/*" element={<Landing />} />
            <Route path="/home/onlyfan/*" element={<OnlyFanHome />} />
            <Route path="/home/onlyfan/client" element={<OnlyFanClient />} />
        </Routes>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
