const { age, date } = require('../../lib/utils')
const Member = require('../models/Member')


module.exports = { 
    index(req, res) {
        return res.render('members/index', { members: data.members })
    },
    create(req, res) {
        return res.render('members/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields')
            }
        }
        
        let { avatar_url, birth, name, services, gender } = req.body
        
        return
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            // req.body.avartar_url é igual req.body[key]
            if (req.body[key] == "") {
                return res.send('Please, fill all fields')
            }
        }

        return
    },
    delete(req, res) {
        return
    },
}