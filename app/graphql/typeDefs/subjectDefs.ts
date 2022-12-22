import { gql } from "apollo-server-micro";

export const subjectDefs = gql`
  type Subject {
    name: String!
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`;
