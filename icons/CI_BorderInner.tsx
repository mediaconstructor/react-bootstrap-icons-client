
"use client";
import React from "react";
import {IconProps, BorderInner} from "react-bootstrap-icons";

export const CI_BorderInner : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderInner {...props}/>
        </>
    );
}
