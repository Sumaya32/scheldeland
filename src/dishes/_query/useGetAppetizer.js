import { GetAppetizer} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetAppetizer = ()=> {
    const {data, loading} = useQuery(GetAppetizer)
  
    return{appetizer: data?.kleineHongertjes?.edges,
           appetizerLaoding: loading}
}