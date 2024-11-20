
"use client";
import React from "react";
import {IconProps, Opencollective} from "react-bootstrap-icons";

export const CI_Opencollective : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Opencollective {...props}/>
        </>
    );
}
