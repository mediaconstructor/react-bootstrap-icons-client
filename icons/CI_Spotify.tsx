
"use client";
import React from "react";
import {IconProps, Spotify} from "react-bootstrap-icons";

export const CI_Spotify : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Spotify {...props}/>
        </>
    );
}
