 
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


 