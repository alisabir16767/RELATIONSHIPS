const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
.then(()=>{console.log("connection successful")})
.catch((err)=>{console.log(err)});

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const orderSchema = new Schema({
   item: String,
   price: Number,
   });
   const customerSchema = new Schema({
      name:String,
      orders:[{
      orders:{
      type:Schema.Types.objectId,
      ref : "Order"
          }
      }]
      });

   const Order = mongoose.model("Order", orderSchema);
const  Customer =mongoose.model("Customer",customerSchema);

const addCustomer= async () =>{
   let cust1 =new Customer({
      name:"sabir Ali", 
   });
   let order1 = await Order.findOne({item:"chips"});
   let order2 =await Order.findOne({item:"choclate"});
   cust1.orders.push(order1);
   cust.orders.push(order2);
   

   let result= await cust1.save();
   console.log(result);
};
addCustomer();
   
   // const addOrder = async ()=>{
   //    let res=await Order.insertMany([
   //       {item:"samosa",price:20},
   //       {item:"chips",price:10},
   //       {item:"choclate",price:40},
   //    ]);
   //    console.log(res);
   // }
   // addOrder();