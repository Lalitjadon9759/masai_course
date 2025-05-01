let data=fetch("https://jsonplaceholder.typicode.com/users")
data
.then((response)=>{
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    return response.json()
}).then((response)=>{
    console.log(response)
})
.then((users)=>{
    users.forEach(user => {
        console.log(user.name);
    });
})
.catch((err)=>{
    console.log(err)
})