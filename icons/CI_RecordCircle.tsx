
"use client";
import React from "react";
import {IconProps, RecordCircle} from "react-bootstrap-icons";

export const CI_RecordCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <RecordCircle {...props}/>
        </>
    );
}
