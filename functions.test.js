const{returnTwo,greeting,add,multiply,divide,subtract}=
require('./functions.js');

test('returnTwo should return int two',()=>{
    expect(returnTwo()).toBe(2);
})

test('should say hello name in string',()=>{
    expect(greeting("James")).toBe("Hello James!");
    expect(greeting("Jill")).toBe("Hello Jill!");
})

test('Should add sum of param ',()=>{
    expect(add(1,2)).toBe(3)
    expect(add(5,9)).toBe(14);
})
test('should multiply sum of param',()=>{
    expect(multiply(3,6)).toBe(18)
    expect(multiply(5,8)).toBe(40)
})
test('should divide sum of param',()=>{
    expect(divide (24,6)).toBe(4)
    expect(divide(60,5)).toBe(12);
})
test('should subtract sum of param',()=>{
    expect(subtract (50,25)).toBe(25)
    expect(subtract (1756,1326)).toBe(430)
})