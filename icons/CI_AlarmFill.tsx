
"use client";
import React from "react";
import {IconProps, AlarmFill} from "react-bootstrap-icons";

export const CI_AlarmFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AlarmFill {...props}/>
        </>
    );
}
