import { useState } from "react";
import { postReply } from "../../api/repliesAPI";

const initState = {
    bno: 0,
    reply: '',
    replyer: '',
    replyFile: ''
}

const ReplyInput = ({bno, refreshLast}) => {

    const [reply, setReply] = useState({...initState})

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickRegister = (e) => {
        reply.bno = bno

        console.log(reply)

        if(reply.reply === '' || reply.replyer === ''){
            alert('내용을 입력해주세요.')
            return
        }

        postReply(reply).then(data => {
            console.log("data......", data)
            refreshLast()

            // 등록이 완료된 후 입력란을 초기화
            setReply({...initState})
        })
    }


    return (  
        <div className="m-8 bg-green-50 b-2">
			<div>Reply Input</div>
			<div className="m-2">
				<input type="text" name="reply" value={reply.reply} onChange={handleChange}></input>
			</div>
			<div className="m-2">
				<input type="text" name="replyer" value={reply.replyer} onChange={handleChange}></input>
			</div>
			<div className="m-2">
				<button onClick={handleClickRegister}>Register</button>
			</div>
		</div>
    );
}
 
export default ReplyInput;