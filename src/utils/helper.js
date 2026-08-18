
const validator = require("validator");

const isValidUser = ({ name, email, mobileNo, password ,profile_url}) => {
  if (!name) throw new Error("Name is required");
  if (!email) throw new Error("Email is required");
  if (!mobileNo) throw new Error("Mobile number is required");
  if (!password) throw new Error("Password is required");

  if (!validator.isEmail(email))
    throw new Error("Invalid email");

  if (!validator.isMobilePhone(mobileNo, "en-IN"))
    throw new Error("Invalid mobile number");

  if (!validator.isStrongPassword(password))
    throw new Error("Password is not strong enough");

  if (  profile_url &&!validator.isURL(profile_url, {
  protocols: ["http", "https"],
  require_protocol: true,
})) {
  throw new Error("Invalid profile URL");
}

  return true;
};

module.exports = { isValidUser };

