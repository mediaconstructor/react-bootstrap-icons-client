
"use client";
import React from "react";
import {IconProps, Share} from "react-bootstrap-icons";

export const CI_Share : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Share {...props}/>
        </>
    );
}
