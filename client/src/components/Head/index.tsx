// * Modules * //
import React, { } from 'react'
// * Exports * //


// * Components * //

export default function Head(props: { title?: string }) {

    if (props.title) {
        document.title = "RockFinance" + " - " + props.title
    }

    return null;
}