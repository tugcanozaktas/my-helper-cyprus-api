const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateUser = ({
  userId,
  fname = null,
  lname = null,
  email = null,
  pnumber = null,

}) => {
  const updates = [];
  if (fname !== null) {
    updates.push(sql`first_name = ${fname}`);
  }

  if (lname !== null) {
    updates.push(sql`last_name = ${lname}`);
  }

  if (email !== null) {
    updates.push(sql`email = ${email}`);
  }

  if (pnumber !== null) {
    updates.push(sql`phone_number = ${pnumber}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
    UPDATE 
      users
    SET
      ${updates.reduce(sqlReduce)}
    WHERE
      user_id = ${userId};
  `;
  }
  return Promise.resolve();
};

module.exports = updateUser;
