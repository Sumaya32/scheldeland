import { GetAppetizer} from './_schemas'
import { useQuery } from '@apollo/client'

export const useGetAppetizer = ()=> {
    const {data, loading} = useQuery(GetAppetizer)
  console.log("appetizer ", loading)
    return{appetizer: data?.kleineHongertjes?.edges,
           appetizerLaoding: loading}
}