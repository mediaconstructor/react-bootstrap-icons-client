
"use client";
import React from "react";
import {IconProps, ShareFill} from "react-bootstrap-icons";

export const CI_ShareFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShareFill {...props}/>
        </>
    );
}
