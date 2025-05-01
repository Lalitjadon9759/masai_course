async function fetchProduct() {
    try{
    let response= await fetch("https://fakestoreapi.com/products")  
        let data = await response.json();
        console.log("data form async/await",data)

        if (!response.ok) {
            throw new Error('Network response was not ok');
          }

    const totalPrice =data.reduce((i,j)=>i+j.price,0)
    console.log(totalPrice.toFixed(2))

    }catch(err){
        console.log("Failed to fetch products. Please try again later" ,err)
    }
}
fetchProduct()