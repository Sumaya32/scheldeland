import {GetHome} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetHome = ()=> {
   const {data, loading} = useQuery(GetHome)
   console.log("data1 ", data && data?.page?.homefiled?.gerechten?.gerechtmeta?.title)
   console.log("data2 ", data && data?.page?.homefiled?.sharingfood?.sharingFoodmeta?.title)
    return{data: data?.page?.homefiled, isLoading: loading}
}