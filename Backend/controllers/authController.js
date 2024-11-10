const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//Signup 
exports.signup= async(req,res)=>{
    const{name,email,password,role,location}=req.body;
    try{
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:'User already Exist with same Email'});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,
            email,
            password:hashedPassword,
            role,
            location
        });

        await newUser.save();
        res.status(200).json({message:'Signup Successfully' , user:newUser});


    } catch(error){
        res.status(500).json({message:'User Not Register ', error});
    }

};

//Login
exports.signin = async (req,res)=>{
    const {email,password}= req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message:'Invalid credentials'});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({message:'Invalid credentials'});

        const token = jwt.sign({userId:user._id , role:user.role } , process.env.JWT_SECRET,{ expiresIn: '1h'});

        res.status(200).json({message:'Login successful'},token);

    } catch(error){
        res.status(500).json({message:'Error logging in ' , error})
    }
};