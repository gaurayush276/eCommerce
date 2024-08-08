 
export function  createOrder (item) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/orders',{
          method: 'POST' ,
            body: JSON.stringify(item) ,
            headers :{ 'content-type' : 'application/json'}
        } )
        const data = response.json() ;
        resolve({data}) ; 
    })
}


 