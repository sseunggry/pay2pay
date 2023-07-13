$(function(){
	$(".payment-method input[type=\"checkbox\"]").on("change", function(){
		const $this = $(this);
		const hanaCardCon = $this.closest("dl").siblings(".hana-card-con");
		if($this.is(":checked")){
			hanaCardCon.show();
		} else{
			hanaCardCon.hide();
		}
	});

	$(".accordion-wrap .icon-more").on("click", function(){
		const $this = $(this);
		const detail = $this.parent().siblings(".detail");
		
		detail.toggle();
	});
});
