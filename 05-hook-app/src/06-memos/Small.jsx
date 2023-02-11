import { memo } from "react";

export const Small = memo(({value}) => {

    console.log('Refactor');

    return(
        <small>{value}</small>
    )
})