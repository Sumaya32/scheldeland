import { GetMainDish } from './_schemas'
import { useQuery } from '@apollo/client';

export const useGetMainDish = () => {
    const { data, loading } = useQuery(GetMainDish);   
    return { mainDish: data?.hoofdgerechten.edges , mainDishLoading: loading }
}