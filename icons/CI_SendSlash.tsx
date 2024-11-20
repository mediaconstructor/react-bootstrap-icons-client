
"use client";
import React from "react";
import {IconProps, SendSlash} from "react-bootstrap-icons";

export const CI_SendSlash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendSlash {...props}/>
        </>
    );
}
