import React from "react";

import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { RouteConfigs } from "./routes.config";

function PrivateRouter() {
    const jwtToken = localStorage.getItem("access_token");
    return RouteConfigs.map((route, index) => {
        if ((!route.isPrivate || (route.isPrivate && jwtToken))) {
            return <Route key={index} path={route.path} element={(() => {
                return (
                    <route.layout>
                        <route.element />
                    </route.layout>
                )
            })()}
            />
        }
        else {
            return <Route key={index} path={route.path} element={<Navigate to="/sign-in" />} />
        }
    })
}

export function RouterWrapper() {
    return (
        (
            < Routes >
                {PrivateRouter()}
            </Routes>
        )
    )
}