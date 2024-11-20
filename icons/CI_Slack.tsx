
"use client";
import React from "react";
import {IconProps, Slack} from "react-bootstrap-icons";

export const CI_Slack : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Slack {...props}/>
        </>
    );
}
