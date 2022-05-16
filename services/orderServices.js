const { OrderInfo } =require('../models/orderModel');

const saveOrder=async (orderData)=>{
    try{
      let Order= new OrderInfo(orderData);
      await Order.save();
      return Order;
    }catch(error){
      console.log(error);
       return null;
    }
    
    
}

const findOrderByUser=async(user_id,address)=>{
  console.log('user id',address);
   try{  
      
      let regex = new RegExp(address,'i');

      let orders=await OrderInfo.find({wallet_address:regex}).sort( { _id: -1 } ); 
      
        return orders; 
      }catch(e){console.log(e)}  
    }

module.exports = {
  saveOrder,
  findOrderByUser
};
