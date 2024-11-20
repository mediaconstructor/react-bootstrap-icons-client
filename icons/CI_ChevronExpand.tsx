
"use client";
import React from "react";
import {IconProps, ChevronExpand} from "react-bootstrap-icons";

export const CI_ChevronExpand : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ChevronExpand {...props}/>
        </>
    );
}
