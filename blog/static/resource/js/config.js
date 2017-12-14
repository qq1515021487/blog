/**
 * @author QuanQqqqq
 * @create 2016-10-8 12:47
 * @version 1.0
 */


/*变量*/
var myPath = "/ACM";
var COOKIE_PSW_ERROR = "password";
var COURSE_CODE = "10001";


var myUrlString = {
	fixPersonalContent : myPath + "/fixPersonalCon",
	fixEnroll : myPath + "",
	getNickName : myPath + "/getNickName",
	fixNickName : myPath + "/fixNickName",
	courseEnroll : myPath + "/courseEnroll",
	logout : myPath + "/logOut",
	wejudgeOut : "https://oj.bnuz.edu.cn/account/logout",
}

/*培训过期初始化*/
$(function(){
	var dateLine = "2016-10-05";
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = nowDate.getMonth() + 1;
	var day = nowDate.getDate();
	var today = year + "-";
	if(month < 10)
		today += "0" + month + "-";
	else
		today += month +"-";
	if(day < 10)
		today += "0" + day;
	else
		today += day;
//	console.log(today + " " + dateLine);
	if(dateLine <= today){
		$('#source-button').text("报名已截止");
		$('#source-button').removeClass("btn-primary");
		$('#source-button').addClass("btn-danger");
		$('#source-button').attr("disabled","true");
		$("#source-button").removeAttr("onclick");
	}
	
})