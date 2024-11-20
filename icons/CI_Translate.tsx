
"use client";
import React from "react";
import {IconProps, Translate} from "react-bootstrap-icons";

export const CI_Translate : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Translate {...props}/>
        </>
    );
}
