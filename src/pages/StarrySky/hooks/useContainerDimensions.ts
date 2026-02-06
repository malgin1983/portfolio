import { useState, useEffect, type RefObject } from 'react';

const useContainerDimensions = (containerRef: RefObject<HTMLElement | null>) => {
    const getDimensions = () => ({
        width: containerRef.current?.offsetWidth ?? 0,
        height: containerRef.current?.offsetHeight ?? 0,
    });

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions());
        };

        const dimensionsTimeout = setTimeout(() => {
            if (containerRef.current) {
                setDimensions(getDimensions());
            }
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(dimensionsTimeout);
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef]);

    return dimensions;
};

export default useContainerDimensions;