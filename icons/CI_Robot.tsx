
"use client";
import React from "react";
import {IconProps, Robot} from "react-bootstrap-icons";

export const CI_Robot : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Robot {...props}/>
        </>
    );
}
