
"use client";
import React from "react";
import {IconProps, Paperclip} from "react-bootstrap-icons";

export const CI_Paperclip : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Paperclip {...props}/>
        </>
    );
}
