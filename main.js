for (let i = 0; i < 2; i++) {
    console.log("Hello." + i);
}
for (let a = 1; a <= 2; a++) {
    console.log("Pakistan Zindabad " + a);
    console.log("sultan");
}
let arr = [10, 20, 30, 40];
for (var index1 in arr) {
    console.log(index1); // prints indexes: 0, 1, 2, 3
}
let i = 5;
do {
    console.log("Block statement execution no." + i);
    i++;
} while (i < 10);
//^^^^^^^^
for (let i = 0; i <= 9; i++) {
    console.log(1 + i);
}
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//******* 
function addNumbers(...nums) {
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//  ******
function calculate_discount(price, rate = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
export {};
