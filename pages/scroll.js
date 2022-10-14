import InfiniteScroll from "../src/components/InfiniteScroll";


function Scroll(props) {
    const choices = [1, 3, 5, 7, 9]
    const display = choices.map((choice, index) => {
        return (
            <div>
                <span className="choice">{choice}</span>
            </div>
        )
    })
    return (
        <InfiniteScroll>
        <div className="choices">
            {display}
        </div>
        </InfiniteScroll>
    )
}

export default InfiniteScroll