import { gql } from "apollo-server-micro";

export const userDefs = gql`
  type User {
    id: ID! @id
    name: String!
    phone: String
    profile_url: String
    language: String
    location: Point
    subjects: [Subject!]! @relationship(type: "TEACHES", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }

  type AuthRes @exclude {
    user: User
    token: String!
  }
`;
