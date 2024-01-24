import {GetHome} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetHome = ()=> {
   const {data, loading} = useQuery(GetHome)

    return{data: data?.page?.homefiled, isLoading: loading}
}