/*获取个人问题js*/
function gainProblems(id){
	var url = "ajax.php";
	var data = {"id":id};
	var success = function(respons){
		var problems = eval('(' + respons + ')');
		if(problems['data'] == "true"){
			$('#mySmallModalLabel').text("查询结果");
			$('#info_err').text(problems['problems']);
			$('#modal_reg').modal('show');
			$('#button_false').hide();
		}
		else{
			$('#mySmallModalLabel').text("查询结果");
			$('#info_err').text("找不到该用户");
			$('#modal_reg').modal('show');
			$('#button_false').hide();
		}
	}
	$.post(url,data,success);
}

/*获取注册表达的所有内容 */