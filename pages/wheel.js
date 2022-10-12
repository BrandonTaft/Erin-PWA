// var GERMAN_DIGITS = [
//     "Null",
//     "Ein",
//     "Zwei",
//     "Drei",
//     "Vier",
//     "Fünf",
//     "Sechs",
//     "Sieben",
//     "Acht",
//     "Neun"
// ];
// ReactDOM.render({ Array: Array, : .from(GERMAN_DIGITS.entries()).map(function (_a) {
//         var index = _a[0], digit = _a[1];
//         return ({ index: index }.);
//     }, { " ":  }
//         < span, style = {}, {
//         color: "hsl(".concat((index / GERMAN_DIGITS.length) * 360, "deg 100% 50%)")
//     }) }
//     >
//         { digit: digit }.
//     < /span>
//     < /div>);
// /InfiniteScrollLoop>,;
// document.querySelector("main");
// ;
// function InfiniteScrollLoop(_a) {
//     var _b = _a.surroundingBackup, surroundingBackup = _b === void 0 ? 4 : _b, outerStyle = _a.outerStyle, innerStyle = _a.innerStyle, children = _a.children;
//     var contentRef = React.useRef(null);
//     var scrollRef = React.useRef(null);
//     var _c = React.useState(0), height = _c[0], setHeight = _c[1];
//     var backupHeight = height * surroundingBackup;
//     var handleScroll = React.useCallback(function () {
//         if (scrollRef.current) {
//             var scroll = scrollRef.current.scrollTop;
//             if (scroll < backupHeight || scroll >= backupHeight + height) {
//                 scrollRef.current.scrollTop = backupHeight + (scroll % height);
//             }
//         }
//     }, [height]);
//     React.useLayoutEffect(function () {
//         if (contentRef.current) {
//             setHeight(contentRef.current.offsetHeight);
//             scrollRef.current.scrollTop = backupHeight;
//         }
//     });
//     return className = "infinite-scroll-loop-outer";
//     style = { outerStyle: outerStyle } >
//         className;
//     "infinite-scroll-loop-inner";
//     ref = { scrollRef: scrollRef };
//     style = {};
//     {
//         height,
//         innerStyle;
//     }
// }
// onScroll = { handleScroll: handleScroll }
//     >
//         {
//             : 
//                 .fill()
//                 .map(function () { return ({ children: children } < /div>); }) }
//     < div;
// ref = { contentRef: contentRef } > { children: children } < /div>;
// {
//     Array(surroundingBackup)
//         .fill()
//         .map(function () { return ({ children: children } < /div>); });
// }
// /div>
//     < /div>;
// ;

// const GERMAN_DIGITS = [
//     "Null",
//     "Ein",
//     "Zwei",
//     "Drei",
//     "Vier",
//     "Fünf",
//     "Sechs",
//     "Sieben",
//     "Acht",
//     "Neun"
// ];

// ReactDOM.render(
//     <InfiniteScrollLoop>
//         {Array.from(GERMAN_DIGITS.entries()).map(([index, digit]) => (
//             <div>
//                 {index}.{" "}
//                 <span
//                     style={{
//                         color: `hsl(${
//                             (index / GERMAN_DIGITS.length) * 360
//                         }deg 100% 50%)`
//                     }}
//                 >
//                     {digit}.
//                 </span>
//             </div>
//         ))}
//     </InfiniteScrollLoop>,
//     document.querySelector("main")
// );

// function InfiniteScrollLoop({
//     surroundingBackup = 4,
//     outerStyle,
//     innerStyle,
//     children
// }: {
//     surroundingBackup: number;
//     scrollPaddingPercentage: number;
//     outerStyle: React.CSSProperties;
//     innerStyle: React.CSSProperties;
//     children: React.Node;
// }): JSX.Element {
//     const contentRef = React.useRef<HTMLDivElement | null>(null);
//     const scrollRef = React.useRef<HTMLDivElement | null>(null);
//     const [height, setHeight] = React.useState<number>(0);

//     const backupHeight = height * surroundingBackup;

//     const handleScroll = React.useCallback(() => {
//         if (scrollRef.current) {
//             const scroll = scrollRef.current.scrollTop;
//             if (scroll < backupHeight || scroll >= backupHeight + height) {
//                 scrollRef.current.scrollTop = backupHeight + (scroll % height);
//             }
//         }
//     }, [height]);

//     React.useLayoutEffect(() => {
//         if (contentRef.current) {
//             setHeight(contentRef.current.offsetHeight);
//             scrollRef.current.scrollTop = backupHeight;
//         }
//     });

//     return (
//         <div className="infinite-scroll-loop-outer" style={outerStyle}>
//             <div
//                 className="infinite-scroll-loop-inner"
//                 ref={scrollRef}
//                 style={{
//                     height,
//                     ...innerStyle
//                 }}
//                 onScroll={handleScroll}
//             >
//                 {Array(surroundingBackup)
//                     .fill()
//                     .map(() => (
//                         <div>{children}</div>
//                     ))}
//                 <div ref={contentRef}>{children}</div>
//                 {Array(surroundingBackup)
//                     .fill()
//                     .map(() => (
//                         <div>{children}</div>
//                     ))}
//             </div>
//         </div>
//     );
// }