import { GetKidsDessert} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetKidsDessert = ()=> {
    const {data} = useQuery(GetKidsDessert);
    console.log("data ", data && data)
    return{kidsDessert: data?.kinderDesserten?.edges}
}