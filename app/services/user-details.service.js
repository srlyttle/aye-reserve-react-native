import { API, graphqlOperation } from 'aws-amplify';
import { Auth } from 'aws-amplify';

import { getUserDetails, listUserDetailss } from '../../src/graphql/queries';
import { createUserDetails } from '../../src/graphql/mutations';

export const gqlGetUserDetails = async () => {
  const result = await API.graphql(
    graphqlOperation(getUserDetails, { id: venue.id })
  );
  return result;
};

export const gqlGetAllUserDetails2 = async () => {
  const result = await API.graphql(graphqlOperation(listUserDetailss));
  return result;
};
export const gqlGetAllUserDetails = async (user) => {
  const email = user.attributes.email;
  const result = await API.graphql(
    graphqlOperation(listUserDetailss, {
      filter: {
        email: {
          eq: email,
        },
      },
    })
  );
  return result;
};
export const gqlCreateUserDetails = async (userDetails, user) => {
  await API.graphql(
    graphqlOperation(createUserDetails, {
      input: userDetails,
      owner: user,
    })
  );
};
