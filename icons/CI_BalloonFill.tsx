
"use client";
import React from "react";
import {IconProps, BalloonFill} from "react-bootstrap-icons";

export const CI_BalloonFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BalloonFill {...props}/>
        </>
    );
}
