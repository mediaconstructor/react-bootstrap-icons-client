
"use client";
import React from "react";
import {IconProps, UiChecks} from "react-bootstrap-icons";

export const CI_UiChecks : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <UiChecks {...props}/>
        </>
    );
}
