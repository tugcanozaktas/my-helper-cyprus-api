const updateUser = require("./queries/updateUser");

const modifyUser = async ({userId, fname, lname, email, pnumber }) => {
  const user = await updateUser({userId, fname, lname, email, pnumber });

  return { user };
};

module.exports = modifyUser;
