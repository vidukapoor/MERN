const userModel = require('../models/user');

class UserHandlers{
    constructor(){
        this.self = this;
        // console.log("user constructor called");
    }
    
    createuser(dataTosave, cb){
        var newUser = userModel(dataTosave);
        try{
            newUser.save((err, res) => {  
                if (err) {
                    cb({success:false, result:err});
                }
                if(cb){
                    cb({success:true, result:res._id});  
                }
            });
        }catch(e){
            cb({success:false, result:e.message});
        }   
    }

    getusers(cb){
        try{
            userModel.find((err,res)=>{
                cb({success:true,result:res});       
            });
        }catch(e){
            cb({success:false, result:e.message});
        }
    }

    finduser(payload, cb){
        const userId = payload.userId;
        try{
            userModel.findOne({_id:userId},(err, res)=>{
                if(res)
                    cb({success:true, result:res})
                else
                    cb({success:false, result:"Invalid user"})    
            })
        }catch(e){
            cb({success:false, result:e.message})
        }
    }
}
const userHandlers = new UserHandlers();
module.exports = userHandlers;

//lean(); use for the finding of the like fetch is 
// const abc = await userModel.find().count().lean().exec();