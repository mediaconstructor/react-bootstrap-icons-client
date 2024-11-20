
"use client";
import React from "react";
import {IconProps, SendDash} from "react-bootstrap-icons";

export const CI_SendDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendDash {...props}/>
        </>
    );
}
