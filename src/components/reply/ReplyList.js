import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
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

const ReplyList = ({bno, page, last, refresh, movePage}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {
        getRepliesOfBoard(bno, page, last).then(data => {
            setListData(data)
        })
    }, [bno, page, last, refresh])

    console.log("listData........... ", listData)


    return (  
        <div>
            <ul>
                {listData.dtoList.map(reply =>
                    <li key={reply.rno}>[{reply.rno}] {reply.reply}</li>    
                )}
            </ul>

            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
    );
}
 
export default ReplyList;