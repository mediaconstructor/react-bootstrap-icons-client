
"use client";
import React from "react";
import {IconProps, BalloonHeart} from "react-bootstrap-icons";

export const CI_BalloonHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BalloonHeart {...props}/>
        </>
    );
}
