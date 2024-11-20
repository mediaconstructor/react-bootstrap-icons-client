
"use client";
import React from "react";
import {IconProps, Images} from "react-bootstrap-icons";

export const CI_Images : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Images {...props}/>
        </>
    );
}
