/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDeal = /* GraphQL */ `
  mutation CreateDeal(
    $input: CreateDealInput!
    $condition: ModelDealConditionInput
  ) {
    createDeal(input: $input, condition: $condition) {
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
export const updateDeal = /* GraphQL */ `
  mutation UpdateDeal(
    $input: UpdateDealInput!
    $condition: ModelDealConditionInput
  ) {
    updateDeal(input: $input, condition: $condition) {
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
export const deleteDeal = /* GraphQL */ `
  mutation DeleteDeal(
    $input: DeleteDealInput!
    $condition: ModelDealConditionInput
  ) {
    deleteDeal(input: $input, condition: $condition) {
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
