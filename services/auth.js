const sessionid=new Map()

function setid(id,user){
    sessionid.set(id,user)
    

}

function getid(id){
    return sessionid.get(id)

}

module.exports={setid,getid}