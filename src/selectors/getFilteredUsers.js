const getFilteredUsers = (users, text) => {
  const usersSearch = text.toLowerCase();
  return users.filter(usersList => {
    const usersListLower = usersList.name.toLowerCase();
    const currentList = usersListLower.indexOf(usersSearch) !== -1;

    return currentList;
  });
};

export default getFilteredUsers;
