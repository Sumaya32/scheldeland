import { ApolloClient, InMemoryCache  } from "@apollo/client";


export class Config{
    static get ApolloClient(){
       return new ApolloClient({
        cache: new InMemoryCache(),
        // uri: `${'https://admin.tavernescheldeland.be/graphql'}` 
        uri: process.env.REACT_APP_GRAPHQL_API_URL 
       })
    }
}