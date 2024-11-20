
"use client";
import React from "react";
import {IconProps, Box2Heart} from "react-bootstrap-icons";

export const CI_Box2Heart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Box2Heart {...props}/>
        </>
    );
}
