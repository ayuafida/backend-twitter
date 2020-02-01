const User = require('../models/user')
const jwt =  require('jsonwebtoken')


exports.listUser =  async (req,res) => {
    let data = await User.find()
    res.send(JSON.stringify({"status" : 200, "error" : null, "response " : data}))
}

exports.detailUser =  async (req,res) => {
    const data = await User.findById(req.params.id)
    res.send(JSON.stringify({"status" : 200, "error" : null, "response " : data}))
}

exports.tambahUser = async  (req,res) => {
    const users = new User(req.body);
    const status = await users.save();
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.ubahUser = async  (req,res) => {
    const {id} = req.params;
    const status = await User.update({_id: id},req.body)
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.hapusUser = async  (req,res) => {
    let {id} =  req.params;
    const status = await User.remove({_id: id})
    res.send(JSON.stringify({"status": 200, "error": null, "response": status}))
}

exports.getToken = async (req, res)=>{
    let { username,password} = req.body
    const cek = await User.findOne({username : username, password :password  })
    if (cek !=null){
        const user = {
            username : cek.username,
            password: cek.password
           
            
        }
        jwt.sign({user}, 'secretkey', (err,token) =>{
           res.send(JSON.stringify({"status" : 200, "error" :null,"token": token }))
          
        })
    } else{
        res.sendStatus(403)
    }
}
