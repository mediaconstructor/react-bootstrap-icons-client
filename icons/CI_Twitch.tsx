
"use client";
import React from "react";
import {IconProps, Twitch} from "react-bootstrap-icons";

export const CI_Twitch : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Twitch {...props}/>
        </>
    );
}
