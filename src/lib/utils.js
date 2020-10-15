module.exports = {
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)
    
        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()
    
        if (month < 0 || 
            month == 0 && 
            today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }
    
        return age
    },
    date(timestamp) {
            const date = new Date(timestamp)
            
            const year = date.getUTCFullYear()
            const month = `0${date.getUTCMonth() + 1}`.slice(-2)
            const day = `0${date.getUTCDate()}`.slice(-2)

            return {
                day,
                month,
                year,
                iso: `${year}-${month}-${day}`,
                birthDay: `${day}/${month}`,
                format: `${day}/${month}/${year}`
            }
    },
    blood(members) {
        const converterBlood = members.find(function(member) {
            if ('A1' == member.blood) {
                member.blood = 'A+'
            } else if ('A0' == member.blood) {
                member.blood = 'A-'
            } else if ('B1' == member.blood) {
                member.blood = 'B+'
            } else if ('B2' == member.blood) {
                member.blood = 'B-'
            } else if ('AB1' == member.blood) {
                member.blood = 'AB+'
            } else if ('O1' == member.blood) {
                member.blood = 'O+'
            } else if ('O0' == member.blood) {
                member.blood = 'O-'
            } return blood 
            })
        }
}