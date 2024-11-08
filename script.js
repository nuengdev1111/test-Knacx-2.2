let arr = [1,5,7,4,3,2,1,5,9,0,4,2,4,5,7,2];

// ลบค่าที่ซ้ำออกโดยใช้ Set และเรียงลำดับจากน้อยไปมาก
let sortedUniqueArr = [...new Set(arr)].sort((a, b) => a - b);

console.log(sortedUniqueArr);
