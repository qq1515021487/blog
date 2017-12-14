/*
@author QuanQqqqq
@create time 2016-11-24
@version 1.0.0
*/

var writeData = [
	'#ifdef BNUZACM',
	'#include <acmicpc.h>',
    '#include <bnuz.h>',
    '#include <bnuzacm.h>',
	'#else',
	    '#include <stdio.h>',
	'#endif',
	'#define GANBADIE 3',
	'int main()',
	'{',
	    'printf("大家好，一年一届的北京师范大学珠海分校ACM-ICPC新生赛开始报名了。\n");',
	    'printf("你想"");',
	    'if(printf("加入ACM协会吗？\n") || printf("成为编程达人吗？\n"))',
	    '{',
	        'printf("来参加新生赛吧！\n");',
	        'if(printf("让我们看到你出众的实力\n"))',
	        '{',
	            'printf("没有学过ACM你都不知道你自己有多菜，若没有拿过气球，你还敢说你是程序员？\n");',
	            'for(int i = 0; i < GANBADIE; ++i)',
	               'printf("我要成为北师最腻害的程序员！\n");',
	        '}',
	        'printf("千万不要错过每一次展示自己的机会。");',
	    '}',
	    'return 0;',
	'}',
];
function machineWrite(idName){
	var content = "";
	var time = 0;
	writeData.forEach(function(e){  
	    var len = e.length;
	    $('#' + idName).html(content);
	    if(time <= e.length)
	    	setInterval('printContent(e,time++);', 500);
	    content += "<p>" + e + "</p>";
	})  
}

function printfContent(str,time){
	if(time % 2)
		
}
/*

	#ifdef BNUZACM
	#include <acmicpc.h>
    #include <bnuz.h>
    #include <bnuzacm.h>
	#else
	    #include <stdio.h>
	#endif
	#define GANBADIE 3
	int main()
	{
	    printf("大家好，一年一届的北京师范大学珠海分校ACM-ICPC新生赛开始报名了。\n");
	    printf("你想"");
	    if(printf("加入ACM协会吗？\n") || printf("成为编程达人吗？\n"))
	    {
	        printf("来参加新生赛吧！\n");
	        if(printf("让我们看到你出众的实力\n"))
	        {
	            printf("没有学过ACM你都不知道你自己有多菜，若没有拿过气球，你还敢说你是程序员？\n");
	            for(int i = 0; i < GANBADIE; ++i)
	               printf("我要成为北师最腻害的程序员！\n");
	        }
	        printf("千万不要错过每一次展示自己的机会。");
	    }
	    return 0;
	}
*/