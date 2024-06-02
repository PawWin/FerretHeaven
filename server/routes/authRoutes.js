const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser,getProfile, logoutUser,adopt,adoptions,authenticateToken,removeAdoption} = require('../controllers/authController');

router.use(cors({
    credentials: true,
    origin:'http://localhost:3000'
}));

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logoutUser)
router.post('/adopt', adopt)
router.get('/adoptions',authenticateToken,adoptions)
router.delete('/adoptions/:id',removeAdoption)
module.exports = router;