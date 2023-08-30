import {GetContact} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetContact = ()=> {
    const {data, loading} = useQuery(GetContact)
    return{data: data?.page.contactfield, isLoading: loading}
}