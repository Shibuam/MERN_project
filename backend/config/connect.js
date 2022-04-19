
import mongoose from "mongoose"
const mongoConnect = async ()=>{

 try{
   const CONNECTION_URL='mongodb+srv://shibu:123@cluster0.j6pbk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
   
   const mogoConnect = mongoose.connect(CONNECTION_URL)
  console.log("mongo connected")

   
     
 }catch(err){
    console.log("data base connection failed ", err)

 }
}

export default mongoConnect;
