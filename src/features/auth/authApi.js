 
export function createUser (userData) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/users',{
          method: 'POST' ,
            body: JSON.stringify(userData) ,
            headers :{ 'content-type' : 'application/json'}
        } )
        const data = response.json() ;
        resolve({data}) ; 
    })
}
 
export function updateUser (user) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/users/'+ user.id,{
          method: 'PATCH' ,
            body: JSON.stringify(user) ,
            headers :{ 'content-type' : 'application/json'}
        } )
        const data = response.json() ;
        resolve({data}) ; 
    })
}

export function checkUser (loginInfo) {

    return new Promise ( async (resolve , reject ) =>{
        
        const email = loginInfo.email ; 
        const password = loginInfo.password ; 
        const response = await fetch ( 'http://localhost:8000/users?email=' + email ) ; 
        const data = await response.json() ;
        // console.log( data[0].password) ; 
        if ( data.length ){
            if ( data[0].password === password ){
                resolve({data : data[0]})
            console.log({data}) ; 
            }
           else {
                reject( {messege : "wrong credential" }  )
           }
        }
        else {
            reject( { messege : 'user not found '}) ;
        }
         
    })
}

 