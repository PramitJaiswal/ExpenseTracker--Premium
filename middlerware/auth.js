 const jwt = require('jsonwebtoken');
const User = require('../models/signUpUser');
require('dotenv').config();

exports.authentication = (req,res,next) => {
         
             try {
                   const token = req.header('Authorization');
                    
               const user = jwt.verify(token , process.env.JWT)
                     
                   console.log('>>>> User Verified :',user.userId)
                   User.findByPk(user.userId)
                   .then((user)=> {

                         req.user = user;
                        

                         next();
                   })
                    
             } catch (error) {
                   console.log(error,'Middleware error');
             }
   }

   