
"use client";
import React from "react";
import {IconProps, BalloonHeartFill} from "react-bootstrap-icons";

export const CI_BalloonHeartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BalloonHeartFill {...props}/>
        </>
    );
}
