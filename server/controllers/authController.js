const User = require('../models/user');
const Adoption  = require('../models/adoption');
const {hashPassword,comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}
//Register Endpoint
const registerUser = async (req, res) => {
    try{
        const {username, email, password } = req.body;
        if(!username){
            return res.json({
                error:'name is required'
            })
        }
        if(!password || password.length<6){
            return res.json({
                error:'Password is required and it should be at least 6 characters long'
            })
        }
        const existingEmail = await User.findOne({email:email})
        if(existingEmail){
            return res.json({
                error:'Email already taken'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        return res.json(user)
    } catch (error){
        console.log(error)
    }
}

//Login Endpoint

const loginUser = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.json({
                error:'No user found'
            })
        }
        const match = await comparePassword(password, user.password)
        if(match){
            jwt.sign({email:user.email,id:user.id,username:user.username},process.env.JWT_SECRET, {},(err,token) =>{
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }
        if(!match){
            res.json({
                error:'Password Incorrect'
            })
        }
    } catch (err){
        console.log(err)
    }
}
const getProfile = (req, res) => {
    const {token} = req.cookies;
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {},(err, user) => {
            if(err) throw err;
            res.json(user)
        })
    }else{
        res.json(null)
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('token').json({ message: 'Logged out successfully' });
};

const adopt = async (req,res)=>{
    try{
        const {email,date,hour,ferret} = req.body;
        if(!email){
            return res.json({
                error:'Email is required'
            })
        }
        if(!hour){
            return res.json({
                error:'Hour is required'
            })
        }
        if(!ferret){
            return res.json({
                error:'Ferret is required'
            })
        }
        if(!date){
            return res.json({
                error:'Date is required'
            })
        }else if(date){
            const hourTaken = await Adoption.findOne({hour})
            if(hourTaken){
                return res.json({
                    error:'Hour is already booked'
                })
            }else{
                const adoption = await Adoption.create({
                    email,
                    date,
                    hour,
                    ferret
                })
                return res.json(adoption)
            }
        }
    }catch (err){
        console.log(err)
    }
}

const adoptions = async (req,res)=>{
    try {
        const adoptions = await Adoption.find({email: req.user.email});
        res.json(adoptions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const authenticateToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];
    if (!token) return res.sendStatus(403);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const removeAdoption = async (req, res) => {
    try {
        const adoption = await Adoption.findByIdAndDelete(req.params.id);
        if (!adoption) {
            return res.status(404).json({ message: 'Adoption not found' });
        }
        res.json({ message: 'Adoption deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    logoutUser,
    adopt,
    adoptions,
    authenticateToken,
    removeAdoption
}