/**
 * Created by Moren on 2016/8/8.
 */
$(function () {
	$('#search-under').addClass('hidden');
});

var searchSelectedMark = new Array(0,0,0,0,0,0);
function showSelectedInfo() {
    for(var i = 0; i < searchSelectedMark.length; i++){
        console.log(i);
    }
}

//ajax请求获取下拉表单内容
function SearchMainSelectGetInfo(stepId, selectedItemId) {
	var url = "getSelectType";
	var typeName = new Array("PTypeName","finalTypeName");
	var typeId = new Array("PTypeId","finalTypeId");
    $.ajax({
        url: url,
        type: 'POST',
        data: {step: stepId, selectedItemId: selectedItemId},
        cache: false,
        dataType: 'json',
        /* data需要的内容
         data.itemId :这一条目的id名称
         data.itemName :这一条目的名字
                           三个不同的返回对象。。。
         */
        success: function (data) {
        	if(stepId != 3){
	            if(data.status){
	                var selectDropInfoName = '#select-drop-' + (stepId + 1) + '-content';
	                var newTypeId = "data.list[i]." + typeId[stepId - 1];
	                var newTypeName = "data.list[i]." + typeName[stepId - 1];
	                $(selectDropInfoName).html("");
	                $(data.list).each(function(i){
	                	var onclickFunction = 'Step' + (stepId + 1) + 'OnClick';
	                	$(selectDropInfoName).append('<li id="' + eval(newTypeId) + '" onclick="' + onclickFunction + '(this.innerHTML,this.id)">' + eval(newTypeName) + '</li>');
	                });
	            }
        	}
        	else{
        		if(data.status){
        			var selectDropInfoName = '#select-drop-5-content';
	                $(selectDropInfoName).html("");
	                console.log(data);
	                var plie = data.list[0].plies;
	                var plies = plie.split('-');
	                console.log(plies);
	                for(var pl in plies){
	                	var onclickFunction = 'Step5OnClick';
	                	$(selectDropInfoName).append('<li id="plies" onclick="' + onclickFunction + '(this.innerHTML,this.id)">' + plies[pl] + '</li>');
	                }
        		}
        	}
        }
    });
}

function Step1OnClick(inner, itemId) {
    $('#select-drop-1').html("" + inner + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
    searchSelectedMark[0] = 1;
    $('#select-drop-2-content').html("");
    $('#select-drop-3-content').html("");
    $('#select-drop-5-content').html("");
    $('#search-under').addClass('hidden');
    SearchMainSelectGetInfo(1,itemId);
    $('#select-drop-2').html("请选择设备类型" + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
    $('#select-drop-3').html("请选择设备类型" + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
}

function Step2OnClick(inner, itemId) {
    $('#select-drop-2').html("" + inner + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
    searchSelectedMark[1] = 1;
    $('#select-drop-3-content').html("");
    $('#select-drop-5-content').html("");
    $('#search-under').addClass('hidden');
    SearchMainSelectGetInfo(2,itemId);
    $('#select-drop-3').html("请选择产品类别" + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
}

function Step3OnClick(inner, itemId) {
    $('#select-drop-3').html("" + inner + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
    $('#select-drop-5').html("请选择产品层数" + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
    $('#search-under').removeClass('hidden');
    searchSelectedMark[2] = 1;
    SearchMainSelectGetInfo(3,itemId);
}

function Step5OnClick(inner, itemId) {
    $('#select-drop-5').html("" + inner + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
}



function Step6OnClick(inner, itemId) {
    $('#select-drop-6').html("" + inner + "<span class='glyphicon glyphicon-triangle-bottom'></span>");
}
