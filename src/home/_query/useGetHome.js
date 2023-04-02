import {GetHome} from './_schemas'
import { useQuery } from '@apollo/client'
import { title } from 'process';

export const useGetHome = ()=> {
   const {data, loading} = useQuery(GetHome)
    return{data: data?.page?.homefiled, isLoading: loading}
}