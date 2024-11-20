
"use client";
import React from "react";
import {IconProps, SegmentedNav} from "react-bootstrap-icons";

export const CI_SegmentedNav : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SegmentedNav {...props}/>
        </>
    );
}
