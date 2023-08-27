import { GetMonthlyDish} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetMonthlyDish = ()=> {
    const {data, loading} = useQuery(GetMonthlyDish)
  
    return{monthlyDish: data?.maandelijkseMenus?.edges, monthlyDishLoading: loading}
}