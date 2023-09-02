import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";

const initState = {
    bno: 0,
    page: 1,
    last: false
}

// index 같은 역할
const ReplyWrapper = ({bno}) => {

    const [data, setData] = useState(initState);

    // useeffect: props로 내려온 걸 상태로 처리
    useEffect(() => {
        data.bno = bno
        data.last = true
        data.page = 1
        setData({...data})
    }, [bno])

    const movePage = (num) => {
        data.page = num
        setData({...data})
    }


    return (  
        <div>
            <ReplyList {...data} movePage={movePage}></ReplyList>
        </div>
    );
}
 
export default ReplyWrapper;