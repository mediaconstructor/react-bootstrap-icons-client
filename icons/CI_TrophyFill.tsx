
"use client";
import React from "react";
import {IconProps, TrophyFill} from "react-bootstrap-icons";

export const CI_TrophyFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TrophyFill {...props}/>
        </>
    );
}
