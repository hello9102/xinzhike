function Name() {
    //登陆账号
    var name = document.getElementById("name").value;
    var nameReg = /^\w{6,18}$/;
    if (!nameReg.test(name)) {
        span_name.innerHTML = "X 请输入6-18位有效字符（字母、数字、下划线）";
        span_name.style.color = "red";
        return false;
    }else {
        span_name.innerHTML = "✔";
        span_name.style.color = "#008000";
        return true;
    }
}
function Password() {
    //密码
    var pwd = document.getElementById("pwd").value;
    var pwdReg = /^[\d\D]{6,18}$/;
    if (!pwdReg.test(pwd)) {
        span_pwd.innerHTML = "X 请输入6~18位任意字符";
        span_pwd.style.color = "red";
        return false;
    }else {
        span_pwd.innerHTML = "✔";
        span_pwd.style.color = "#008000";
        return true;
    }
}
function Password2() {
    //确认密码
    var pwd = document.getElementById("pwd").value;
    var pwd2 = document.getElementById("pwd2").value;
    if (pwd !== pwd2) {
        span_pwd2.innerHTML = "X 两次输入不一致";
        span_pwd2.style.color = "red";
        return false;
    }else if (pwd2 === "") {
        span_pwd2.innerHTML = "X 不能为空";
        span_pwd2.style.color = "red";
    }else {
        span_pwd2.innerHTML = "✔";
        span_pwd2.style.color = "#008000";
        return true;
    }
}
function Age() {
    //验证年龄
    var age = document.getElementById("age").value;
    var ageReg = /^[1-9][0-9]?$/;
    if (!ageReg.test(age)) {
        span_age.innerHTML = "X 请输入大于0的任意两位整数!";
        span_age.style.color = "red";
        return false;
    }
    else {
        span_age.innerHTML = "✔";
        span_age.style.color = "#008000";
        return true;
    }
}
function CellPhone() {
    //验证手机号
    var cellPhone = document.getElementById("cellPhone").value;
    var cellPhoneReg = /^1\d{10}$/;
    if(!cellPhoneReg.test(cellPhone)) {
        span_cellPhone.innerHTML = "X 请输入由1开头的11位整数";
        span_cellPhone.style.color = "red";
        return false;
    }else {
        span_cellPhone.innerHTML = "✔";
        span_cellPhone.style.color = "#008000";
        return true;
    }
}
function Email() {
    //邮箱验证
    var email = document.getElementById("email").value;
    var emailReg = /^[\w\d]{1,9}@[\w\d]{1,9}\.[\w]{2,3}$/;
    if (!emailReg.test(email)) {
        span_email.innerHTML = "X 如:jack@163.com";
        span_email.style.color = "red";
        return false;
    }
    else {
        span_email.innerHTML = "✔";
        span_email.style.color = "#008000";
        return true;
    }
}
function Sex(){
    //判断单选框是否选中
    var sex = document.getElementsByName("sex"); 
    var flag = 0; 
    for (var i=0;i<sex.length;i++) { 
        if (sex.item(i).checked == true) { 
            flag = 1; 
            break; 
        } 
    } 
    if (!flag) {
        span_sex.innerHTML = "请选择对应性别";
        span_sex.style.color = "red";
        return false;
    }else {
        span_sex.innerHTML = "✔";
        span_sex.style.color = "#008000";
        return true;
    }
}
function Degree(){ 
    //判断学历是否选中
    var degree= document.getElementById("degree").value; 
    if (!degree) { 
        span_degree.innerHTML = "请选择对应学历";
        span_degree.style.color = "red";
        return false;
    }else {
        span_degree.innerHTML = "✔";                
        span_degree.style.color = "#008000";
        return true;
    }
}
function checkForm() {
    //判断表单信息是否填写正确
    var check = Name() && Password() && Password2() && Degree() && Sex() && Email() && CellPhone() && Age();
    if(!check) {
        alert("请填写完整的信息");
    }
    Name() ?  true:span_name.style.color = "red";
    Password() ?  true:span_pwd.style.color = "red";
    Password2() ?  true:span_pwd2.style.color = "red";
    Degree() ?  true:span_degree.style.color = "red";
    Sex() ?  true:span_sex.style.color = "red";
    Email() ?  true:span_email.style.color = "red";
    CellPhone() ?  true:span_cellPhone.style.color = "red";
    Age() ?  true:span_age.style.color = "red";
    return check; 
}
function Reset(){
    //重置样式
    window.location.reload(true);
}