const sessionid=new Map()

function setid(id,user){
    sessionid.set(id,user)
    // console.log(sessionid)
    

}

function getid(id){
    // console.log(sessionid.get(id),sessionid)
    return sessionid.get(id)

}

module.exports={setid,getid}