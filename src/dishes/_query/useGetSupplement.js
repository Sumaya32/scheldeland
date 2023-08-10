import { GetSupplement} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetSupplement = ()=> {
    const {data} = useQuery(GetSupplement)
    console.log("data ", data)
    return{supplement: data?.supplementen?.edges}
}