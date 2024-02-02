const modifyUser = require("~root/actions/users/updateUser");
const handleAPIError = require("~root/utils/handleAPIError");

const patchUser = async (req, res) => {
  const userId = Number(req.params.id);
  const { fname, lname, email, pnumber } = req.body;

  try {
    const { user } = await modifyUser({ userId, fname, lname, email, pnumber });

    res.status(201).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchUser;
