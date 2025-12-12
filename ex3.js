let correctEmail = "johnza007@gmail.com";
let correctPassword = "johnlovecoding555";
let userEmail = "johnza007@gmail.com";
let userPassword = "johnlovecoding555";

let isEmailCorrect = userEmail === correctEmail ? true : false;
let isPasswordCorrect = userPassword === correctPassword ? true : false;

if (isEmailCorrect && isPasswordCorrect) {
  console.log("ยินดีต้อนรับเข้าสู่ระบบ ✨");
} else {
  console.log("กรุณาตรวจสอบ Email หรือ Password ใหม่อีกครั้ง ❌");
}
