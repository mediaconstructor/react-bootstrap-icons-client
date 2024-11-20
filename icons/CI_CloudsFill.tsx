
"use client";
import React from "react";
import {IconProps, CloudsFill} from "react-bootstrap-icons";

export const CI_CloudsFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudsFill {...props}/>
        </>
    );
}
