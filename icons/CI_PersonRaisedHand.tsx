
"use client";
import React from "react";
import {IconProps, PersonRaisedHand} from "react-bootstrap-icons";

export const CI_PersonRaisedHand : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonRaisedHand {...props}/>
        </>
    );
}
