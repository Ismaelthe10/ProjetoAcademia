exports.post = function(req, res){

    const keys = Object.keys(req.body)
    
    for(key of keys){

    if(req.body[key] == ""){

        return res.send('preencha todos os campos!') 
    }
    
 }
 
    return res.send(req.body)
}