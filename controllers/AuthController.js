const userServices = require("../services/userServices");

const loginByWallet=async(req,res)=>{
    try {
        let address=req.query.account;
        console.log(address);
        if(address=="undefined"||address==""||address==null){
           
            res.send(false);
      
         }else{
            
            
            let userCheck=await userServices.checkUserByWalletAddress(address);
             console.log("user account",userCheck);
             if(userCheck>0){
                let user=await userServices.checkUserByWallet(address);
                 req.session.success = true;
                 req.session.re_us_id = user._id;
                 req.session.re_usr_name = user.name;
                 req.session.re_usr_email = user.email;
                 req.session.is_user_logged_in = true;
                 req.session.role=user.user_role;
                 req.session.wallet_address=user.wallet_address;
    
                 console.log(req.session);
                 res.send(user);
             }else
               {
                 let email=address+"@gmail.com";
                  let mystr = "123456"
                   userOBJ={ name:address,
                            email:email,
                            password:mystr,
                            username:"metamask",
                            mobile:"1234567898",
                            wallet_address:address,
                            user_role:"user",
                            }
                          
                  
                  let newuser = await userServices.addUserByWallet(userOBJ);
                  let user=await userServices.checkUserByWallet(address);
         
         
                  req.session.success = true;
                  req.session.re_us_id = user._id;
                  req.session.re_usr_name = user.name;
                  req.session.re_usr_email = user.email;
                  req.session.is_user_logged_in = true;
                  req.session.role=user.user_role;
                  req.session.wallet_address=user.wallet_address;
                  console.log(req.session);
         
                  res.send(user);
               }
         }
    } catch (error) {
        console.log("error", error);
    }
}

module.exports = {
    loginByWallet
};
