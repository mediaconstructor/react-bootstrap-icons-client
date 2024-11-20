
"use client";
import React from "react";
import {IconProps, SendSlashFill} from "react-bootstrap-icons";

export const CI_SendSlashFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SendSlashFill {...props}/>
        </>
    );
}
