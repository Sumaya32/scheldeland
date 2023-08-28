import { GetSharingFood} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetSharingFood = ()=> {
    const {data, loading} = useQuery(GetSharingFood)
  
    return{sharingFood: data?.sharingFoods?.edges, sharingFoodLoading: loading}
}