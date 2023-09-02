import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";

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

const ReplyList = ({bno, page, last, movePage}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {
        getRepliesOfBoard(bno, page, last).then(data => {
            setListData(data)
        })
    }, [bno])


    return (  
        <div>
            
        </div>
    );
}
 
export default ReplyList;