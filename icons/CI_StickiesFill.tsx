
"use client";
import React from "react";
import {IconProps, StickiesFill} from "react-bootstrap-icons";

export const CI_StickiesFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <StickiesFill {...props}/>
        </>
    );
}
