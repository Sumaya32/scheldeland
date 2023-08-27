import { GetSupplement} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetSupplement = ()=> {
    const {data, loading} = useQuery(GetSupplement)
    return{supplement: data?.supplementen?.edges, supplementLoading: loading}
}