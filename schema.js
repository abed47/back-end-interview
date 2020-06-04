import {gql} from 'apollo-server-express';

const TYPEDEFS = gql`
    type User {
        id: Int!
        name: String
        phone: Int!
        email: String
        address: String
        zipCode: Int
        imgUrl: String!
    }

    type File {
        filename: String!
        mimetype: String!
        encoding: String!
    }



    type Query {
        getUser(id: Int!): User
        uploads: [File]
    }

    type Mutation{
        createUser(
            name: String, 
            email: String,
            phone: Int!,
            address: String,
            zipCode:Int,
            imgUrl: String!) : User,
        
        singleUpload(file: Upload!): File!
    }
`

export default TYPEDEFS