
"use client";
import React from "react";
import {IconProps, BoxSeam} from "react-bootstrap-icons";

export const CI_BoxSeam : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BoxSeam {...props}/>
        </>
    );
}
