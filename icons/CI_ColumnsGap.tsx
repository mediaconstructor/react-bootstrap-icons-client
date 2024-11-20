
"use client";
import React from "react";
import {IconProps, ColumnsGap} from "react-bootstrap-icons";

export const CI_ColumnsGap : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ColumnsGap {...props}/>
        </>
    );
}
