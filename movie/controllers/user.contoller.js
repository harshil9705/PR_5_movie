const { user, movie } = require("../models/user.schema");

// home 
const welcome = (req,res)=>{
    res.send('Welcome to the movie API')
}

// all user
const alldata = async(req,res)=>{
    const data = await user.find()
    res.send(data)
}
// signup
const signup = async(req,res)=>{
    const data = await user.findOne({email : req.body.email})
    if(data){
        res.send('your account already exist')
    }
    else{
        const create = await user.create(req.body)
        res.status(201).send(create)
    }
}
 // delete user
const dlt = async(req,res)=>{
    const {id} = req.params
    const data = await user.findByIdAndDelete(id)
    res.send({message: 'User deleted successfully'})
}

// login
const login = async(req,res)=>{
    const data = await user.findOne({username : req.body.username, password : req.body.password})
    if(data){
        res.send({message:'Logged in successfully'})
    }
    else{
        res.status(401).json({error:"Invalid username or password"})
    }
}

const moviecreate = async(req,res)=>{
    const data = await movie.create(req.body)
    console.log(data);
    res.status(201).send(data)
} 

    

module.exports = {welcome,signup,dlt,login,alldata,moviecreate}