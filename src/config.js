import { ApolloClient, InMemoryCache  } from "@apollo/client";

export class Config{
    static get ApolloClient(){
       return new ApolloClient({
        cache: new InMemoryCache(),
        uri: `${process.env.REACT_APP_GRAPHQL_API_URL}` 
       })
    }
}