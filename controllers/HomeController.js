const userServices = require("../services/userServices");
const orderServices=require('../services/orderServices');

const propertyDetail=async(req,res)=>{
    res.render('property-details')

}
const addProperty=async(req,res)=>{
    res.render('add-property')

}
const index=async(req,res)=>{
     res.render('new-index')

}

const newAboutUs=async(req,res)=>{

    res.render('about')

}

const newContactUs=async(req,res)=>{

    res.render('contact')

}

const newpropertyList=async (req,res)=>{
    // let lands=await landServices.findLand();
//      let lands = await landServices.findLand()
   
//        console.log('land data',lands)
 
//       let landData = await landServices.findAllLand()
//       var data=[]
 
//       for(var key of landData){
 
//           var temp = JSON.stringify(key);
//           var temp1 = JSON.parse(temp);
//           let imageInfos = await landServices.findImagesByID(key._id)
//           let nft=await signNftServices.totalVoucher(key._id); //findByIdVoucher(key._id);
//           temp1.imageInfo = imageInfos
//           temp1.nft = nft
//           data.push(temp1)
//       }
//       for(i=0;i<data.length;i++){
//          for(j=i+1;j<data.length;j++){
//              if(data[i].price>data[j].price){
//                  let temp=data[i]
//                  data[i]=data[j];
//                  data[j]=temp;
//                  console.log('dddddddddddddd',data)
//              }
//             }
//    }
      //console.log('data ===========================',data)
        //  res.render('market',{ layout: 'layout/front/frontlayout',name:req.session.re_usr_name,lands:lands,datas:data});

     res.render('property-list',{datas:""})

}

const addOrder=async(req,res)=>{
    let body=req.body;
    console.log("body", body);
    let id=body.id;
    let hash=body.hash;
    let address=body.address;
    let land_id=body.land_id;
    address=address.toLowerCase();
    console.log(address);
    try{ 
        let user=await userServices.checkUserByWallet(address);
        let user_id="";
        if(user){
            user_id=user._id;
            req.session.success = true;
            req.session.re_us_id = user._id;
            req.session.re_usr_name = user.name;
            req.session.re_usr_email = user.email;
            req.session.wallet_address = address
            req.session.is_user_logged_in = true;
            req.session.role=user.user_role;
          }
        else
          {
                let email=address+"@gmail.com";
                let mystr ='12345'; //await contentCreaterServices.createCipher("123456");
                // let created = await contentCreaterServices.createAtTimer();
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
                       user_id=user._id;
                       req.session.success = true;
                       req.session.re_us_id = user._id;
                       req.session.re_usr_name = user.name;
                       req.session.re_usr_email = user.email;
                       req.session.is_user_logged_in = true;
                       req.session.role=user.user_role;      
          }

          let order={
            user_id:user_id,
            hash:hash,
            wallet_address: "0xd3A5B4cfDDF26945E0BbEf28CF32760b96f758C6",
            address_to : req.body.address,
            total:req.body.amount,
            tokenId : req.body.tokenId,
            status:"success"
            } 
            let orderData=await orderServices.saveOrder(order);
             
          res.send(order);
    }catch(e){console.log(e);}

}

const NewtransactionHistory=async(req,res)=>{
    console.log("req.session", req.session);
    let user_id=req.session.re_us_id;
    let address=req.session.wallet_address
    if(address=="undefined"|| address==null)
    {
       res.redirect('/');
    }
    let landDatas =await orderServices.findOrderByUser(user_id,address);
   
    var transaction=[]
    for(var key of landDatas){
        var temp = JSON.stringify(key);
        var temp1 = JSON.parse(temp);
        transaction.push(temp1)
    }

    console.log(transaction);
    res.render('transaction',{name:req.session.re_usr_name,tx:transaction})
}


module.exports = {
   index,
   newAboutUs,
   newContactUs,
   newpropertyList,
   addProperty,
   propertyDetail,
   addOrder,
   NewtransactionHistory
};
