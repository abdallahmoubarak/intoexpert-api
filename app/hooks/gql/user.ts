import { gql } from "apollo-server-micro";

export const createExpert = gql`
  mutation ($name: String!) {
    createUsers(input: { name: $name }) {
      users {
        name
      }
    }
  }
`;

export const updateExpertSubject = gql`
  mutation ($name: String!, $subject_name: String!) {
    updateUsers(
      where: { name: "Pamela S." }
      update: { subjects: { create: { node: { name: $subject_name } } } }
    ) {
      users {
        name
        subject {
          name
        }
      }
    }
  }
`;

export const queryExperts = gql`
  query {
    users {
      name
      subjects {
        name
      }
    }
  }
`;
