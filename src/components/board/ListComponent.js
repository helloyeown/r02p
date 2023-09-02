import { useEffect, useState } from "react";
import { getList } from "../../api/boardAPI";
import ListPageComponent from "../common/ListPageComponent";

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

const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [list, setList] = useState((initState))

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log("data................")
            console.log(data)

            setList(data)
        })

    }, [queryObj])

    console.log(list)

    return (  
        <div>
			{/* <div>List Component</div> */}

			<div className="m-2 p-2">
			<table className="w-full">
				<thead className="border-t-2 border-b">
					<tr className="bg-[#f6f6f6]">
						<th className="w-1/6">번호</th>
						<th className="w-4/6">제목</th>
						<th className="w-1/6">댓글</th>
					</tr>
				</thead>
				<tbody>
						{list.dtoList.map(({bno, title, writer, replyCount}) => 
						<tr className="hover:bg-[#f6f6f6] transition-all"
						key={bno}
						onClick={() => moveRead(bno)}
						><td className="m-2 p-2 transition-all border-b-2 w-1/6 text-center">{bno}</td>    
						<td className="m-2 p-2 transition-all border-b-2 w-4/6">{title}</td> 
						<td className="m-2 p-2 transition-all border-b-2 w-1/6 text-center">{replyCount}</td></tr>)}
				</tbody>
			</table>
            </div>
            <ListPageComponent movePage={movePage} {...list}></ListPageComponent>
        </div>
    );
}
 
export default ListComponent;