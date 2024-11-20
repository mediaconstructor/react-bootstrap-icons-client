
"use client";
import React from "react";
import {IconProps, AlignMiddle} from "react-bootstrap-icons";

export const CI_AlignMiddle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AlignMiddle {...props}/>
        </>
    );
}
