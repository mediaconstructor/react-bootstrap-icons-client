
"use client";
import React from "react";
import {IconProps, Trello} from "react-bootstrap-icons";

export const CI_Trello : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Trello {...props}/>
        </>
    );
}
