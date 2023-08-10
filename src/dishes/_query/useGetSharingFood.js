import { GetSharingFood} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetSharingFood = ()=> {
    const {data} = useQuery(GetSharingFood)
  
    return{sharingFood: data?.sharingFoods?.edges}
}