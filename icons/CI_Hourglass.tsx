
"use client";
import React from "react";
import {IconProps, Hourglass} from "react-bootstrap-icons";

export const CI_Hourglass : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Hourglass {...props}/>
        </>
    );
}
