import { useEffect, useState } from "react";

const ListSearchComponent = ({queryObj, moveSearch}) => {

    const [search, setSearch] = useState({type:'', keyword:''})

    useEffect(() => {

        search.type = queryObj.type || ''
        search.keyword = queryObj.keyword || ''

        setSearch({...search})
        
    }, [queryObj])
    
    console.log(search)


    return (  
        <div className="m-4 p-4 bg-blue-200 border-2">
            <select className="border-1 m-2 p-2" value={search.type}
            onChange={e => {
                search.type = e.target.value
                setSearch({...search})
            }}>
                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목+내용</option>                
            </select>

            <input type="text" className="border-2 m-2 p-2" value={search.keyword}
            onChange={e => {
                search.keyword = e.target.value
                setSearch({...search})
            }}></input>
            
            <button className="p-2 m-2 border-2" onClick={e => moveSearch(search.type, search.keyword)}>SEARCH</button>
        </div>
    );
}
 
export default ListSearchComponent;