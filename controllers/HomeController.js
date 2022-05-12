
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

module.exports = {
   index,
   newAboutUs,
   newContactUs,
   newpropertyList,
   addProperty
};
