import gql from "graphql-tag";

const LOGIN_USER_Mutation =gql`
    mutation Login(
        $username : String!,
        $password : String!
    ){
        login(
            username:$username,
            password:$password
        ){
            token
        }
    }
`;

const SIGNUP_USER_Mutation =gql`
    mutation register(
        $username: String!,
        $password: String!
        $email: String!
    ){
        register(
            password:$password,
            username:$username,
            email:$email
        )
    }
`;

module.exports = {
    LOGIN_USER_Mutation,
    SIGNUP_USER_Mutation,
}
