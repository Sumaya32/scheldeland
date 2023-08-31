import { GetKidsMenu} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetKidsMenu = ()=> {
    const {data, loading} = useQuery(GetKidsMenu)
    return{kidsMenu: data?.kinderMenus?.edges, kidsMenuLoading: loading}
}