
"use client";
import React from "react";
import {IconProps, SortNumericUp} from "react-bootstrap-icons";

export const CI_SortNumericUp : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SortNumericUp {...props}/>
        </>
    );
}
