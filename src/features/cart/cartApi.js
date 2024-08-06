 
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
