import React from 'react'

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
    largePageWidth: 1600,
    regularPageWidth: 1100,
    textPageWidth: 800,
};

const styles = () => {
    return (
        <>
        </>
    )
}

export default styles