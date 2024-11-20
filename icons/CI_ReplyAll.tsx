
"use client";
import React from "react";
import {IconProps, ReplyAll} from "react-bootstrap-icons";

export const CI_ReplyAll : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ReplyAll {...props}/>
        </>
    );
}
