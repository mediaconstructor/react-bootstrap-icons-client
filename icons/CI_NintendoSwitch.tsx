
"use client";
import React from "react";
import {IconProps, NintendoSwitch} from "react-bootstrap-icons";

export const CI_NintendoSwitch : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <NintendoSwitch {...props}/>
        </>
    );
}
