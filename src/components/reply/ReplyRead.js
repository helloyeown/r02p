import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno: 0,
    bno: 0,
    reply: '',
    replyer: '',
    replyFile: ''
}

const ReplyRead = ({rno, refreshPage, cancelRead}) => {

    const [reply, setReply] = useState({...initState})

    useEffect(() => {
        getReply(rno).then(data => {
            setReply(data)
        })
    }, [rno])

    const handleChange = (e) => {
        reply.reply = e.target.value
        setReply({...reply})
    }

    const handleClickDelete = (rno) => {
        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }

    const handleClickModify = (reply) => {
        putReply(reply).then(data => {
            alert('댓글이 수정되었습니다.')
            refreshPage(false)
        })
    }

    if(reply.reply === '삭제된 댓글입니다.'){
        return <></>
    }


    return (  
		<div  className="m-8 bg-green-50 border-2">
			{/* <div>Reply Read {rno}</div>/ */}
			<div>
				<div>{rno}</div>
				<div> 
					<input type="text" name={'reply'} onChange={handleChange} value={reply.reply}></input>
				</div>
				<div>{reply.replyer}</div>
			</div>
			<div>
				<button onClick={() => handleClickModify(reply)}>MOD</button>
				<button onClick={() => handleClickDelete(rno)}>DEL</button>
				<button onClick={cancelRead}>Cancel</button>
			</div>
		</div>
    );
}
 
export default ReplyRead;