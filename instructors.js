const fs = require('fs')
const data = require("./data.json")
//const { isBuffer } = require('util')
//Create
exports.post = function(req, res){
    //re.query
    //req.body
    //{"avatar_url":"https://google.com","birth":"2000-02-23","gender":"M","services":"llalala"}

    const keys = Object.keys(req.body)
    
    for(key of keys){

    if(req.body[key] == ""){

        return res.send('preencha todos os campos!') 
    }
    
 }

    let { avatar_url, name, birth, gender, services } = req.body


    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)

    data.instructors.push({
        id,
        name,
        avatar_url,
        birth,
        gender,
        services,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){

        if (err) return res.send("Write file error")

        return res.redirect("/instructors")

    } )


    // return res.send(req.body)
}