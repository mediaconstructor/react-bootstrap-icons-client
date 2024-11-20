
"use client";
import React from "react";
import {IconProps, UiChecksGrid} from "react-bootstrap-icons";

export const CI_UiChecksGrid : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UiChecksGrid {...props}/>
        </>
    );
}
