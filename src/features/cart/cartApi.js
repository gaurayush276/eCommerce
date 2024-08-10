 
export function  addToCart (item) {
    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/cart',{
          method: 'POST' ,
            body: JSON.stringify(item) ,
            headers :{ 'content-type' : 'application/json'}
        } )
        const data = response.json() ;
        resolve({data}) ; 
    })
}


export function fetchAllProductByUserId( userId ) {
    return new Promise(async (resolve) =>{
       const response = await fetch('http://localhost:8000/cart?user=' + userId )
        const data = await response.json();
        resolve({data}) ; 
        console.log(data) ; 
    }
    );
  }

 
  export function updateCart (update) {
  // console.log( update ) ;
    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/cart/' + update.id ,{
          method: 'PATCH' ,
            body: JSON.stringify(update) ,
            headers :{ 'content-type' : 'application/json'}
        } )
        const data = response.json() ;
        resolve({data}) ; 
    })
}
 
  export function deleteItem (id) {
    return new Promise ( async (resolve) =>{
        const response = await fetch ( 'http://localhost:8000/cart/' +  id ,{
          method: 'DELETE' ,
            body: JSON.stringify(id) ,
            headers :{ 'content-type' : 'application/json'}
        } )
        const data = response.json() ;
        resolve({data}) ; 
    })
}
  export function resetCart (id) {
    return new Promise ( async(resolve) => {
      const response = await fetchAllProductByUserId(id)  ;
      const items = response.data ; 
      for ( let item in items){
        console.log( items[item].id) ;  
        await deleteItem(items[item].id) ;
      }


      resolve({status : 'success'}) ; 
    })

    } 
 