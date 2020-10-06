const Instructor = require('../models/instructor')

module.exports = { 
    index(req, res) {
        Instructor.all(function(instructors) {
            return res.render('instructor/index', { instructors })
        })
    },
    create(req, res) {
        return res.render('instructors/create')
    },
    post(req, res) {
        Instructor.create(req.body, function(instructor) {
            return res.redirect(`/instructors/${instructor.id}`)
        })
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