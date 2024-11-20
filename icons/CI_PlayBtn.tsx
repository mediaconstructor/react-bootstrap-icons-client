
"use client";
import React from "react";
import {IconProps, PlayBtn} from "react-bootstrap-icons";

export const CI_PlayBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PlayBtn {...props}/>
        </>
    );
}
