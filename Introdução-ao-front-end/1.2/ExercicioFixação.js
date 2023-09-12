
const USERS_API = 'https://dummyjson.com/users';
const fetchUsers = () => {
  fetch(USERS_API)
    .then((response) => response.json())
    .then((data) => {
     console.log(data.users);
    })
    .catch((error) => {
      console.log(`Error ${error.message}`);
    });
};

fillUsersSelect = fetchUsers;

fillUsersSelect();