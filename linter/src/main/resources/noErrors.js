console.log("xor 00", xor(0,0));
console.log("xor 01", xor(0,1));
console.log("xor 10", xor(1,0));
console.log("xor 11", xor(1,1));
console.log();

console.log("nor 00", nor(0,0));
console.log("nor 01", nor(0,1));
console.log("nor 10", nor(1,0));
console.log("nor 11", nor(1,1));
console.log();

console.log("nand 00", nand(0,0));
console.log("nand 01", nand(0,1));
console.log("nand 10", nand(1,0));
console.log("nand 11", nand(1,1));
console.log();

console.log("add1 00", add1(0,0));
console.log("add1 01", add1(0,1));
console.log("add1 10", add1(1,0));
console.log("add1 11", add1(1,1));
console.log();

console.log("zadd1 000", zadd1(0, 0,0));
console.log("zadd1 001", zadd1(0, 0,1));
console.log("zadd1 010", zadd1(0, 1,0));
console.log("zadd1 011", zadd1(0, 1,1));
console.log("zadd1 100", zadd1(1, 0,0));
console.log("zadd1 101", zadd1(1, 0,1));
console.log("zadd1 110", zadd1(1, 1,0));
console.log("zadd1 111", zadd1(1, 1,1));