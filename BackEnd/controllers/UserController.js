const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//helpers
const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')


module.exports = class UserController{
        //register
        static async register(req, res){
        
            const {name, email, phone, password, confirmpassword} = req.body
    
        // Validations
            if(!name){
                res.status(422).json({message:'O nome é obrigaório'})
                return
            }
            if(!email){
                res.status(422).json({message:'O Email é obrigaório'})
                return
            }
            if(!phone){
                res.status(422).json({message:'O telefone é obrigaório'})
                return
            }
            if(!password){
                res.status(422).json({message:'A senha é obrigaória'})
                return
            }
            if(!confirmpassword){
                res.status(422).json({message:'A confirmação de senha é obrigaória'})
                return
            }
            if(password !== confirmpassword){
                res.status(422).json({message: 'A senha e a confirmação de senha precisam ser iguais'})
                return
            }
    
            //check if user exists
            const userExists = await User.findOne({email: email})
    
            if(userExists){
                res.status(422).json({
                    message: 'Por favor, utilize outro e-mail',
                })
                return
            }
    
            // crate a password
            const salt = await bcrypt.genSalt(12)
            const passwordHash = await bcrypt.hash(password, salt)
    
            // create a user
            const user = new User({
                name,
                email,
                phone,
                password: passwordHash,
            })
    
            try{
    
                const newUser = await user.save()
                await createUserToken(newUser, req,res)
    
            }catch(error){
                res.status(500).json({message: error})
            }
        }
            //Login
    static async login(req,res){
        const{email, password} = req.body

        if(!email){
            res.status(422).json({message:'O Email é obrigaório'})
            return
        }
        if(!password){
            res.status(422).json({message:'A senha é obrigaória'})
            return
        }

        //check if user exists
        const user = await User.findOne({email: email})

        if(!user){
            res.status(422).json({
                message: 'Não há usuário cadastrado com este e-mail!',
            })
            return
        }
        // check if password match with db password
        const checkPassword = await bcrypt.compare(password, user.password)
        
        if(!checkPassword){
            res.status(422).json({
                message: 'A senha está incorreta'
            })
            return
        } 
        await createUserToken(user,req,res)       
    }

}