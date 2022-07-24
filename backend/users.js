const users = [];

const addNewUser = ({ id, userName, roomId }) => {


  const user = { id, userName, roomId };

  users.push(user);

  return { user };
};

const removeExistUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);



module.exports = { addNewUser, removeExistUser, getUser};
