import { GetDish} from './_schemas'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom';

export const useGetDish = ()=> {
    const { id } = useParams()
    const {data, loading} = useQuery(GetDish, {
        variables: {slug: id}
    })
    return{data: data?.gerecht.gerechtmeta, isLoading: loading}
}