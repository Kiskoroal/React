import { useLayoutEffect, useRef, useState } from "react";

export const Pokemon = ({name, sprites}) => {

    const pRef = useRef();

    useLayoutEffect(() => {
       const {height, width} = pRef.current.getBoundingClientRect();
       setBoxSize({height, width});
    }, [sprites]);

    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });

    return(
        <>
        <blockquote classNameName="blockquote text-center" style={{display: 'flex'}}>
            <p classNameName="mb-1">{name}</p>
            <img src={sprites} classNameName="blockquote-footer" ref={ pRef }/>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}