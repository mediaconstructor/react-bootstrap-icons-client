
"use client";
import React from "react";
import {IconProps, FiletypeRaw} from "react-bootstrap-icons";

export const CI_FiletypeRaw : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypeRaw {...props}/>
        </>
    );
}
