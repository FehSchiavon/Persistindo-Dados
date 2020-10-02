const { age, date } = require('../../lib/utils')

module.exports = { 
    index(req, res) {
        return res.render('instructors/index')
    },
    create(req, res) {
        return res.render('instructors/create')
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            // req.body.avartar_url é igual req.body[key]
            if (req.body[key] == "") {
                return res.send('Please, fill all fields')
            }
        }
        
        const query = `
            INSERT INTO instructos (
                name,
                avatar_url,
                gender,
                services,
                birth,
                created_at
            ) VALUE ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            req.body.name,
            req.body.avatar_url,
            req.body.gender,
            req.body.services,
            data(req.body.birth).iso,
            data(Date.now()).iso
        ]
        
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