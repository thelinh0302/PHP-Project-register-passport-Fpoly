//Kiểm tra giá trị nhập vào ở slide 1
function trans2(){

    //Get giá trị id của input
    var username = document.getElementById('username').value;
    var datepicker1 = document.getElementById('datepicker1').value;
    // var gender = document.getElementById('gender').value;
    var wherebirth = document.getElementById('wherebirth').value;
    var identity = document.getElementById('identity').value;
    var datepicker2 = document.getElementById('datepicker2').value;
    var whereidentity = document.getElementById('whereidentity').value;
    var enthic = document.getElementById('enthic').value;
    var religion = document.getElementById('religion').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var district = document.getElementById('district').value;
    var namedistrict = document.getElementById('namedistrict').value;
    var job = document.getElementById('job').value;
    var wherejob = document.getElementById('wherejob').value;

    //Set điều kiện nếu input rỗng sẽ thông báo alert cho user
    if(username == ''){
        alert('Vui lòng nhập tên');
    }else if(datepicker1 == null){
        alert('Vui lòng chọn ngày sinh');
    }else if(gender ==''){
        alert('vui lòng chọn giới tính ')
    }else if(wherebirth == null){
        alert('vui lòng chọn nơi sinh ');
    }else if(identity ==''){
        alert('vui lòng nhập cmnd ');
    }else if(datepicker2 ==''){
        alert('vui lòng chọn ngày làm  ');
    }else if(whereidentity == null){
        alert('vui lòng chọn nơi làm cmnd  ');
    }else if(enthic == null){
        alert('vui lòng chọn dân tộc ');
    }else if(religion == null){
        alert('vui lòng chọn tôn giáo ');
    }else if(phone ==''){
        alert('vui lòng điền số điện thoại  ');
    }else if(address ==  null){
        alert('vui lòng nhập địa chỉ  ');
    }else if(district ==''){
        alert('vui lòng nhập địa chỉ  ');
    }else if(namedistrict ==''){
        alert('vui lòng nhập điạ chỉ  ');
    }else if(job ==''){
        alert('vui lòng chọn công việc  ');
    }else if(wherejob ==''){
        alert('vui lòng chọn nơi làm việc  ');
    }
    //Nếu input không trống sẽ chuyển sang slide 2
    else{
        document.getElementById("type1").style.opacity=0;
        document.getElementById("type2").style.opacity=1;

        document.getElementById("page1").style.opacity=1;
        document.getElementById("page2").style.opacity=0;
        document.getElementById("page2").style.display ='none';
        document.getElementById("page1").style.display ='block';

        document.getElementById("type1").style.zIndex=1;
        document.getElementById("type2").style.zIndex=9999;
        return true;
    }
    
    return false;
}
//Kiểm tra giá trị nhập vào ở slide 2
function validateForm2(){
    var namefather = document.getElementById('namefather').value;
    var datepicker3 = document.getElementById('datepicker3').value;
    var namemother = document.getElementById('namemother').value;
    var datepicker4 = document.getElementById('datepicker4').value;
    var namevo = document.getElementById('namevo').value;
    var datepicker5 = document.getElementById('datepicker5').value;
    var nearidenty = document.getElementById('nearidenty').value;
    var datepicker6 = document.getElementById('datepicker6').value;
    var addresspass = document.getElementById('addresspass').value;

    if (namefather == ''){
        alert('Bạn chưa nhập tên cha');
    }
    else if (datepicker3 == '')
    {
        alert('Bạn chưa nhập năm sinh cha');
    }else if(namemother == ''){
        alert ('Bạn chưa nhập họ tên mẹ');
    }else if(datepicker4 == ''){
        alert ('Bạn chưa nhập năm sinh cha');
    }else if(namevo == ''){
        alert ('Bạn chưa nhập họ tên vợ/chồng');
    }else if(datepicker5 == ''){
        alert ('Bạn chưa nhập ngày tên vợ/chồng');
    }else if(nearidenty == ''){
        alert ('Bạn chưa nhập hộ chiếu');
    }else if(datepicker6 == ''){
        alert ('Bạn chưa nhập ngày');
    }else if(addresspass == ''){
        alert ('Bạn chưa nhập địa chỉ');
    }
    else{
        alert('Thành công');
        return true;
    }
    return false;
}
function trans1(){
    document.getElementById("type1").style.opacity=1;
    document.getElementById("type2").style.opacity=0;

    document.getElementById("page1").style.opacity=0;
    document.getElementById("page2").style.opacity=1;
    document.getElementById("page1").style.display ='none';
    document.getElementById("page2").style.display ='block';

    document.getElementById("type1").style.zIndex=2;
    document.getElementById("type2").style.zIndex=1;
}  

      