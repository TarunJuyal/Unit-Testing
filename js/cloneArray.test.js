const cloneArray = require("./cloneArray");

test('clones array properly',()=>{
    let array=[1,2,3,8];
    expect(cloneArray(array)).toEqual(array);
    expect(cloneArray(array)).not.toBe(array); 
})