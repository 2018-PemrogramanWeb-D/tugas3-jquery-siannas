$(function(){

	$("#btn1").click(function(){
		$(".sample").slideToggle("slow");
	});
	
	$("#btn2").click(function(){
		var textBox = $(".kabar input:only-child");
		
		if(textBox.val() == ""){
			textBox.css( "border", "2px red solid" );
		}else{
			var value = $(".kabar p");
			value.text("Hai "+textBox.val());
			textBox.css( "border", "2px blue solid" );
		}
		
	});
	
	$("#btn3").click(function(){
		$(".content tr").filter(":odd").css({"font-weight":"bold","background-color":"#e6b3b3"});
	});
});