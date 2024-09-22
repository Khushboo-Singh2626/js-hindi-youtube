const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key) -> js
                        cpp
                        rb   
                        swift
**********BUT IF************
     console.log(myObject[key]) => javascript
                                      C++
                                       RUBY

                            
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    CONSOLE.LOG(key) => 0
    1
    2
    3
    4  
    //console.log(programming[key]);
}

*************************************
    Major difference between for of and for in is 
in FOR OF default values are values 
in FOR IN default values are keys

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
