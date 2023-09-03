
const ListPageComponent = ({movePage, end, start, next, prev, pageNums}) => {

    const handleClickPage = (num) => {
        console.log(num)
        movePage(num)
    }

    console.log("--------!!!!!!!!!!!!")
    console.log(end, start, next, prev, pageNums)


    return (  
        <div className="m-4 p-2 flex">
            {prev ? <button className="m-2 p-2 bg-blue-100 border-2 font-bold rounded" onClick={() => handleClickPage(start - 1)}>
                prev
            </button> : <></>}

        <ul>
            {pageNums.map(num => 
                <button key={num} className="m-2 p-2 bg-blue-100 border-2 font-bold rounded" onClick={() => handleClickPage(num)}>
                    {num}</button>
            )}
        </ul>

            {next ? <button className="m-2 p-2 bg-blue-100 border-2 font-bold rounded" onClick={() => handleClickPage(end + 1)}>
                next
            </button> : <></>}
    </div>
    );
}
 
export default ListPageComponent;