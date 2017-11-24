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

    getuser(cb){
        try{
            userModel.find((err,res)=>{
                cb({success:true,result:res});       
            });
        }catch(e){
            cb({success:false, result:e.message});
        }
    }
}
const userHandlers = new UserHandlers();
module.exports = userHandlers;

//lean(); use for the finding of the like fetch
// const abc = await userModel.find().count().lean().exec();