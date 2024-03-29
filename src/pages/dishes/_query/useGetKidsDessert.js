import { GetKidsDessert} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetKidsDessert = ()=> {
    const {data, loading} = useQuery(GetKidsDessert);
    return{kidsDessert: data?.kinderDesserten?.edges, kidsDessertLoading: loading && loading}
}