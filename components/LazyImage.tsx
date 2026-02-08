
import React, { useState, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = "", priority = false }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(priority);
    const imgRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority || shouldLoad) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '100px' }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority, shouldLoad]);

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden ${className} ${!isLoaded ? 'bg-white/[0.05] animate-pulse' : ''}`}
        >
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[length:200%_100%] animate-shimmer"></div>
            )}
            {shouldLoad && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    loading={priority ? 'eager' : 'lazy'}
                />
            )}
        </div>
    );
};

export default LazyImage;
