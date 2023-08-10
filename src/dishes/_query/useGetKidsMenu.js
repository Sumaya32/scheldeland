import { GetKidsMenu} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetKidsMenu = ()=> {
    const {data} = useQuery(GetKidsMenu)
    return{kidsMenu: data?.kinderMenus?.edges}
}