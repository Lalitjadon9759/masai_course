function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(1, 0, "David");
    console.log("Contains 'Eve'?", students.includes("Eve")); 

   
    console.log("Student list:", students.join(","));  
}

function runTests() {
    console.log("=== Test 1: Default Scenario ===");
    manageStudents();

    console.log("\n=== Test 2: Add at Start ===");
    let students1 = ["Alice", "Bob", "Charlie"];
    students1.splice(0, 0, "Zara");
    console.log(students1.join(","));  

    console.log("\n=== Test 3: Add at End ===");
    
    let students2 = ["Alice", "Bob", "Charlie"];
     students2.splice(students2.length, 0, "Zara");
    console.log(students2.join(","));  

    console.log("\n===Test 4:  Existing Name ===");
    let students3 = ["Alice", "Bob", "Charlie"];
      console.log("Contains 'Bob'?", students3.includes("Bob"));  

    console.log("\n===Test 5:Non-existing Name ===");
    console.log("Contains 'Zoe'?", students3.includes("Zoe"));  
}

runTests();
