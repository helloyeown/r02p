import { useEffect, useState } from "react";
import { getList } from "../../api/boardAPI";

const initState = {
    dtoList: [],
    end: 0,
	start: 0,
	next: false,
	prev: false,
	pageNums: [],
	page: 0,
	size: 0,
	requestDTO: null
}

const ListComponent = ({queryObj, movePage}) => {

    const [list, setList] = useState((initState))

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log("data................")
            console.log(data)

            setList(data)
        })

    }, [queryObj])

    const handleClickPage = (num) => {
        movePage(num)
    }


    return (  
        <div>
            <div>ListComponent</div>
            <div>
                <ul>
                    {list.dtoList.map(({bno, title, writer, rcnt}) => 
                        <li key={bno}>[ {bno} ] {title}  - {writer}   [{rcnt}]</li>    
                    )}
                </ul>
            </div>

            <div className="m-4 p-2 flex">
                {list.prev ? <button className="m-2 p-2 bg-blue-100 border-2 font-bold rounded" onClick={() => handleClickPage(list.start - 1)}>
                    prev
                </button> : <></>}

                <ul>
                    {list.pageNums.map(num => 
                        <button key={num} className="m-2 p-2 bg-blue-100 border-2 font-bold rounded" onClick={() => handleClickPage(num)}>
                            {num}</button>
                    )}
                </ul>

                {list.next ? <button className="m-2 p-2 bg-blue-100 border-2 font-bold rounded" onClick={() => handleClickPage(list.end + 1)}>
                    next
                </button> : <></>}
            </div>
        </div>
    );
}
 
export default ListComponent;