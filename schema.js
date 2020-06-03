import {gql} from 'apollo-server-express';

const TYPEDEFS = gql`

    type Query {
        test_query: String
    }

    type Test {
        test_field_1: String,
        test_field_2: Int,
        test_field_3: Boolean,
    }
`

export default TYPEDEFS