
"use client";
import React from "react";
import {IconProps, YinYang} from "react-bootstrap-icons";

export const CI_YinYang : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <YinYang {...props}/>
        </>
    );
}
