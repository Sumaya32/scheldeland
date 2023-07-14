import { GetDessert} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetDessert = ()=> {
    const {data, loading} = useQuery(GetDessert)
  
    return{dessert: data?.desserten?.edges, dessertIsLoading: loading}
}