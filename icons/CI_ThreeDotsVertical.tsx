
"use client";
import React from "react";
import {IconProps, ThreeDotsVertical} from "react-bootstrap-icons";

export const CI_ThreeDotsVertical : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ThreeDotsVertical {...props}/>
        </>
    );
}
