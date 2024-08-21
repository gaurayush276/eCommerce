 
export function createUser (userData) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/auth/signup',{
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
 
export function signOut (userId) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/users/'+ userId )
         
        resolve({Status : "User signed out "}) ; 
    })
}

export function checkUser (loginInfo) {

    return new Promise ( async (resolve , reject ) =>{
        
        const email = loginInfo.email ; 
        const password = loginInfo.password ; 
        const response = await fetch ( 'http://localhost:8000/auth/login',{
            method: 'POST' ,
              body: JSON.stringify(loginInfo) ,
              headers :{ 'content-type' : 'application/json'}
          } ) ; 

          if ( response.ok ) {
              const data = await response.json() ;
              resolve({data})  ;
          }
          else{
            const err = await response.json() ; 
            reject({err})  ;
          }
        // console.log( data[0].password) ; 
        // if ( data.length ){
        //     if ( data[0].password === password ){
        //         resolve({data : data[0]})
        //     console.log({data}) ; 
        //     }
        //    else {
        //         reject( {messege : "wrong credential" }  )
        //    }
        // }
        // else {
        //     reject( { messege : 'user not found '}) ;
        // }
         
    })
}



 