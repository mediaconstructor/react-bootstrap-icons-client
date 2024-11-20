
"use client";
import React from "react";
import {IconProps, Strava} from "react-bootstrap-icons";

export const CI_Strava : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Strava {...props}/>
        </>
    );
}
