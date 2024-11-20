
"use client";
import React from "react";
import {IconProps, SendDashFill} from "react-bootstrap-icons";

export const CI_SendDashFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendDashFill {...props}/>
        </>
    );
}
