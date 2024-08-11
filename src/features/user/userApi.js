 
export function  fetchLoggedInUser(userId) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/orders/' + userId )
        const data = response.json() ;
        resolve({data}) ; 
    })
}
 
export function  fetchLoggedInUserOrder(userId) {

    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/orders?user.id=' + userId )
        const data = response.json() ;
        resolve({data}) ; 
    })
}
 



 