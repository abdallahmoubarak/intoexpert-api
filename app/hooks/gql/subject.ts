import { gql } from "apollo-server-micro";

export const createMessageMutation = gql`
  mutation ($name: String!) {
    createSubjects(input: { name: $name }) {
      subjects {
        name
      }
    }
  }
`;
