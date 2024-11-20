
"use client";
import React from "react";
import {IconProps, BorderOuter} from "react-bootstrap-icons";

export const CI_BorderOuter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderOuter {...props}/>
        </>
    );
}
