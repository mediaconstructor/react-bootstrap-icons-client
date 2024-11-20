
"use client";
import React from "react";
import {IconProps, RewindBtn} from "react-bootstrap-icons";

export const CI_RewindBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <RewindBtn {...props}/>
        </>
    );
}
