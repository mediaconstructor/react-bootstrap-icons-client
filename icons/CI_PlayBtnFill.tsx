
"use client";
import React from "react";
import {IconProps, PlayBtnFill} from "react-bootstrap-icons";

export const CI_PlayBtnFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PlayBtnFill {...props}/>
        </>
    );
}
