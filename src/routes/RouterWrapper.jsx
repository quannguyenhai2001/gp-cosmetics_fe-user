import DefaultLayout from "layouts/DefaultLayout/DefaultLayout"
import React from "react";
import { useSelector } from "react-redux";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { RouteConfigs } from "./routes.config";

function PrivateRouter() {
    const jwtToken = localStorage.getItem("token");
    return RouteConfigs.map((route, index) => {
        if ((!route.isPrivate || (route.isPrivate && jwtToken && route.isScreenAdmin === false)) || (route.isPrivate && jwtToken && route.isScreenAdmin === true)) {
            return <Route key={index} path={route.path} element={(() => {
                return (
                    <route.layout>
                        <route.element />
                    </route.layout>
                )
            })()}
            />
        }

        else if (route.isPrivate && !jwtToken && route.isScreenAdmin === false) {
            return <Route key={index} path={route.path} element={<Navigate to="/sign-in" />} />
        } else if (route.isPrivate && !jwtToken && route.isScreenAdmin === true) {
            return <Route key={index} path={route.path} element={<Navigate to="/admin" />} />
        }
        else {
            return <Route key={index} path={route.path} element={<Navigate to="/" />} />
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