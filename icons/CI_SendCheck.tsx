
"use client";
import React from "react";
import {IconProps, SendCheck} from "react-bootstrap-icons";

export const CI_SendCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendCheck {...props}/>
        </>
    );
}
