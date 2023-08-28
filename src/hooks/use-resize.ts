import { useState, useEffect } from 'react';
// export const SCREEN_SM = 576;
const SCREEN_MD = 768;
const SCREEN_LG = 992;
// export const SCREEN_XL = 1200;
const SCREEN_XXL = 1400;

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [count, setCount] = useState(4);

    useEffect(() => {
        const handleResize = (event: any) => {
            if (event.target) {
                setWidth(event.target.innerWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (width >= SCREEN_LG) {
            setCount(4)
        } else if (width >= SCREEN_MD) {
            setCount(3)
        } else {
            setCount(1)
        }
    })

    return count;
};
