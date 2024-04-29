import request, { gql } from "graphql-request";

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL!;

const getCategoryList = async () => {
  const query = gql`
    query MyQuery {
      categories {
        categorySlug
        name
      }
    }
  `;
  interface categoryList {
    categorySlug: string;
    name: string;
  }
  const result: { categories: categoryList[] } = await request(
    MASTER_URL,
    query
  );
  result.categories.unshift(result.categories[2]);
  result.categories.splice(3, 1);
  return result;
};
const addUser = async (
  userid: string,
  username: string,
  usernameSlug: string,
  profileImg: string
) => {
  const query = gql`
    mutation MyMutation(
      $userid: String!
      $username: String!
      $usernameSlug: String!
      $profileImg: String!
    ) {
      createAllUsers(
        data: {
          profileImg: $profileImg
          userid: $userid
          username: $username
          usernameSlug: $usernameSlug
        }
      ) {
        id
      }
      publishManyAllUserss(to: PUBLISHED) {
        count
      }
    }
  `;

  const variables = { userid, username, usernameSlug, profileImg };
  try {
    const result = await request(MASTER_URL, query, variables);
    return result;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const GlobalApi = { getCategoryList, addUser };

export default GlobalApi;
