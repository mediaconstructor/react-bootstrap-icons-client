
"use client";
import React from "react";
import {IconProps, RecordBtn} from "react-bootstrap-icons";

export const CI_RecordBtn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <RecordBtn {...props}/>
        </>
    );
}
