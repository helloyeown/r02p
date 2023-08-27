import { useNavigate, useSearchParams } from "react-router-dom"

const checkNull = (obj) => {

    const result = {}

    for(const attr in obj){
        const attrName = attr
        const attrValue = obj[attr]

        if(attrValue && attrValue !== 'null'){
            result[attrName] = attrValue
        }
    }

    return result

}

const useQueryObj = () => {

    const [search, setSearch] = useSearchParams()
    const navigate = useNavigate()

    const page = search.get("page") || 1	// page가 없으면 1
	const size = search.get("size") || 10
	const type = search.get("type")
	const keyword = search.get("keyword")

    const queryObj = checkNull({page, size, type, keyword})

    return {queryObj, setSearch}

}

export default useQueryObj