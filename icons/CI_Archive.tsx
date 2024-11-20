
"use client";
import React from "react";
import {IconProps, Archive} from "react-bootstrap-icons";

export const CI_Archive : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Archive {...props}/>
        </>
    );
}
