import React, { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
 
 function InfiniteScrollLoop(props) {
    const surroundingBackup = 4;
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const [height, setHeight] = useState(0)
    const backupHeight = height * surroundingBackup;

    var handleScroll = useCallback(function () {
        if (scrollRef.current) {
            var scroll = scrollRef.current.scrollTop;
            if (scroll < backupHeight || scroll >= backupHeight + height) {
                scrollRef.current.scrollTop = backupHeight + (scroll % height);
            }
        }
    }, [height]);

    useLayoutEffect(function () {
        if (contentRef.current) {
            setHeight(contentRef.current.offsetHeight);
            scrollRef.current.scrollTop = backupHeight;
        }
    });

    return (
        <div className="infinite-scroll-loop-outer">
            <div
                className="infinite-scroll-loop-inner"
                ref={scrollRef}
                style={{
                    height
                }}
                onScroll={handleScroll}
            >
                {Array(surroundingBackup)
                    .fill()
                    .map(() => (
                        <div>{props.children}</div>
                    ))}
                <div ref={contentRef}>{props.children}</div>
                {Array(surroundingBackup)
                    .fill()
                    .map(() => (
                        <div>{props.children}</div>
                    ))}
            </div>
        </div>
    );
};

export default InfiniteScrollLoop