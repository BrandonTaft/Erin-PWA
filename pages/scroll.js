import InfiniteScrollLoop from "../src/components/InfiniteScrollLoop";


function InfiniteScroll(props) {
    const choices = [1, 3, 5, 7, 9]
    const display = choices.map((choice, index) => {
        return (
            <div>
                <span className="choice">{choice}</span>
            </div>
        )
    })
    return (
        <InfiniteScrollLoop>
        <div className="choices">
            {display}
        </div>
        </InfiniteScrollLoop>
    )
}

export default InfiniteScroll