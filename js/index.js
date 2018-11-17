
$(function() {
	// 设置默认的左右外级元素的高度
	$(".leftPane").height($(window).height());
	$(".rightPane").height($(window).height());
	// 给左侧侧边栏绑定事件 ，加载右侧内容区
	$(".myNav li").click(function(){
		var index = $(this).index();
		$(".myNav li").eq(index).attr("class","option").siblings().removeAttr("class");
		var text=$(this).children().children()[1].innerHTML;
		if(text=="首页"){
			$(".rightContent").load('pages/homepage.html');
		}else if(text=="栏目管理"){
			$(".rightContent").load('pages/columnpage.html');
		}else if(text=="资讯管理"){
			$(".rightContent").load('pages/informationpage.html');
		}else if(text=="用户管理"){
			$(".rightContent").load('pages/userpage.html');
		}
	});
	// 默认点击首页
	$(".myNav li:first").trigger('click');
})