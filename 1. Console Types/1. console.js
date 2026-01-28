// =================== 1. Basic Logging ===================
console.log("Hello World!");                      
console.info("Info message");                     
console.debug("Debug message", { a: 1, b: 2 });   
console.warn("Warning message");                  
console.error("Error message");                   
console.log("%cStyled log!", "color:white; background-color:blue; font-size:18px; padding:2px;"); 

// =================== 2. Variables, Arrays, Objects ===================
let number = 123;
let floatNumber = 45.67;
let boolValue = true;
let arr = [10, 20, 30];
let obj = { fname: "Hamdhy", age: 25 };

console.log(number, floatNumber, boolValue);
console.log(arr);
console.log(obj);

// =================== 3. Table View ===================
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]); 
console.table(new Map([["a", 1], ["b", 2]]));
console.table(new Set([100, 200, 300]));
console.table(arr);       
console.table(obj);      

// =================== 4. Assertions ===================
let x = 5;
console.assert(x > 10, "x is not greater than 10"); 
console.assert(x < 10, "x is greater than 10");    

// =================== 5. Object Inspection ===================
console.dir(obj);      
console.dirxml(document.body); 

// =================== 6. Grouping ===================
console.group("User Info Group");
console.log("Name:", obj.fname);
console.log("Age:", obj.age);
console.groupEnd();

console.groupCollapsed("Collapsed Group");
console.log("Hidden until expanded");
console.groupEnd();

// =================== 7. Counting ===================
console.count("Counter");
console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.count("Counter after reset");

// =================== 8. Timing ===================
console.time("Timer");
for (let i = 0; i < 1000; i++) Math.sqrt(i);
console.timeLog("Timer", "Midway Log");
console.timeEnd("Timer");

// =================== 9. Stack Tracing ===================
function funcA() { funcB(); }
function funcB() { funcC(); }
function funcC() { console.trace("Trace here"); }
funcA();

// =================== 10. Clearing Console ===================
//console.clear(); 

// =================== 11. Profiling / Performance ===================
// Works in Chrome/Edge DevTools
console.profile("Profile Session");
for (let i = 0; i < 1000; i++) Math.sqrt(i);
console.profileEnd("Profile Session");

// =================== 12. Experimental / Future / Browser-specific ===================
console.markTimeline && console.markTimeline("Timeline mark"); 
console.memory && console.log("Memory info:", console.memory); 

// =================== 13. Nested Groups ===================
console.group("Outer Group");
console.log("Outer log");
console.group("Inner Group");
console.log("Inner log");
console.groupEnd();
console.groupEnd();

// =================== 14. Advanced / Fun ===================
// Counting multiple labels
console.count("Alpha");
console.count("Beta");
console.count("Alpha");

// Table with complex data
let complexArr = [
  { name: "Alice", scores: [10, 20, 30], active: true },
  { name: "Bob", scores: [15, 25, 35], active: false },
];
console.table(complexArr);

// Loop with timed logs
console.time("LoopTimer");
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}
console.timeEnd("LoopTimer");

// Styled warning / error
console.warn("%cWarning with style!", "color: orange; font-weight:bold;");
console.error("%cError with style!", "color: red; font-size:16px;");

// Logging Symbols and BigInt
console.log("Symbol:", Symbol("id"));
console.log("BigInt:", 123456789012345678901234567890n);

// Logging functions
function hello(name) { return `Hello ${name}`; }
console.log("Function output:", hello("Hamdhy"));

// Logging DOM elements
console.log("Document body:", document.body);

// =================== 15. Everything combined ===================
// Large nested object
let megaObj = {
  users: [
    { id: 1, name: "Alice", roles: ["admin", "editor"] },
    { id: 2, name: "Bob", roles: ["user"] },
  ],
  settings: { theme: "dark", version: 1.2 },
};
console.dir(megaObj);
console.table(megaObj.users);

// =================== 16. Looping console logs ===================
for (let i = 0; i < 10; i++) {
  console.log(`Loop ${i}`, { value: i, square: i * i });
}

// =================== 17. Everything you can imagine ===================
console.log("%c🚀 Mega Console Playground Complete!", "font-size:20px; background:purple; color:white; padding:4px;");
