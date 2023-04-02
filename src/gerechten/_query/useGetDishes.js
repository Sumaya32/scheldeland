import {GetDishes} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetDishes = ()=> {
    const {data, loading} = useQuery(GetDishes)

    return{edgeArray: data?.array?.edges, isLoading: loading}
}