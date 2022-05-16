const {  UserInfo } = require('../models/User');

const checkUserByWallet = async (address) => {
    let user = await UserInfo.findOne({ 'wallet_address':address});
    if (user) {
      return user;
     }
};

const addUserByWallet = async (userOBJ) => {
 
    try {
      const user = new UserInfo(userOBJ);
      await user.save();
      return user;
    } catch (error) {
      console.log(error)
      return null;
    }
  };

  const checkUserByWalletAddress = async (address) => {
    let user = await UserInfo.findOne({ 'wallet_address':address}).count();
    if (user) {
      return user;
     }
  };
  

module.exports = {
    checkUserByWallet,
    addUserByWallet,
    checkUserByWalletAddress
};
  