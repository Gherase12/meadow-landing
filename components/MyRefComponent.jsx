import React, { useImperativeHandle } from 'react'
import { useRef } from 'react';

const MyRefComponent =  React.forwardRef((props, ref) => {
    const internalRef = useRef(null);
    useImperativeHandle(ref, () => internalRef.current);
    return <div ref={internalRef}>{props.children}</div>;
  });

export default MyRefComponent