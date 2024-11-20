
"use client";
import React from "react";
import {IconProps, Messenger} from "react-bootstrap-icons";

export const CI_Messenger : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Messenger {...props}/>
        </>
    );
}
