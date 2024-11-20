
"use client";
import React from "react";
import {IconProps, StickyFill} from "react-bootstrap-icons";

export const CI_StickyFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <StickyFill {...props}/>
        </>
    );
}
