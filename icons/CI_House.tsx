
"use client";
import React from "react";
import {IconProps, House} from "react-bootstrap-icons";

export const CI_House : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <House {...props}/>
        </>
    );
}
