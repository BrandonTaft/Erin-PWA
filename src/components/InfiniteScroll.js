import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';

function InfiniteScroll(props) {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const [height, setHeight] = useState(0);

    var handleScroll = useCallback(function () {
        if (scrollRef.current) {
            var scroll = scrollRef.current.scrollTop;
            if (scroll < height || scroll >= height + height) {
                scrollRef.current.scrollTop = height + (scroll % height);
            }
        }
    }, [height]);

    useEffect(function () {
        if (contentRef.current) {
            setHeight(contentRef.current.offsetHeight);
            scrollRef.current.scrollTop = height;
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
                <div>{props.children}</div>
                <div ref={contentRef}>{props.children}</div>
                <div>{props.children}</div>
            </div>
        </div>
    );
};

export default InfiniteScroll