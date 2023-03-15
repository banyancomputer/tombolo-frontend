/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeal = /* GraphQL */ `
  query GetDeal($id: ID!) {
    getDeal(id: $id) {
      id
      name
      status
      file_size
      cost_to_date
      provider_id
      manifest_file
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listDeals = /* GraphQL */ `
  query ListDeals(
    $filter: ModelDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        file_size
        cost_to_date
        provider_id
        manifest_file
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
