const people = [ {
    name: "Alice",
    address: { city: "New York", 
    street: { name: "Broadway",
    number: 123 
    } 
  }
 },
{ 
    name: "Bob",
    address: { city: "Los Angeles",
      street: { name: "Sunset Boulevard",
      number: 456 
      } 
    }
  } 
 ]
 const result=[]
 for(let i of people){
     const {name,
            address:{
                city,
            street:{name:streetName}
            }
            }=i;
        result.push(`${name} lives in ${city} on ${streetName}`)
 }

 console.log(result)
 