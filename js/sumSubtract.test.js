const { sum , subtract } =require("./sumSubtract");

test('adds two numbers properly',()=>{
    expect(sum(1,2)).toBe(3);
})

test('subtract two numbers properly',()=>{
    expect(subtract(10,2)).toBe(8);
})