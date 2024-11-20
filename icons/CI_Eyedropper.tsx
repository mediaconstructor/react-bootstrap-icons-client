
"use client";
import React from "react";
import {IconProps, Eyedropper} from "react-bootstrap-icons";

export const CI_Eyedropper : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Eyedropper {...props}/>
        </>
    );
}
