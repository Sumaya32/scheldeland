import {GetAbout} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetAbout = ()=> {
    const {data, loading} = useQuery(GetAbout)
    return{data: data?.page.aboutusfields, isLoading: loading}
}