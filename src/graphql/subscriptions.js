/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDeal = /* GraphQL */ `
  subscription OnCreateDeal(
    $filter: ModelSubscriptionDealFilterInput
    $owner: String
  ) {
    onCreateDeal(filter: $filter, owner: $owner) {
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
export const onUpdateDeal = /* GraphQL */ `
  subscription OnUpdateDeal(
    $filter: ModelSubscriptionDealFilterInput
    $owner: String
  ) {
    onUpdateDeal(filter: $filter, owner: $owner) {
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
export const onDeleteDeal = /* GraphQL */ `
  subscription OnDeleteDeal(
    $filter: ModelSubscriptionDealFilterInput
    $owner: String
  ) {
    onDeleteDeal(filter: $filter, owner: $owner) {
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
