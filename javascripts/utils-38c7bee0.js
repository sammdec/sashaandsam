(function(){var n;n=$("body").data("stripe"),Stripe.setPublishableKey(n),$.fn.toggleInputError=function(n){return this.toggleClass("has-error",n),n&&this.addClass("shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){return $(this).removeClass("shake")}),this},window.showModal=function(n,t){return animate({el:n,opacity:[0,1],easing:"easeInQuart",duration:600,begin:function(n){return $(n).show()}}),animate({el:t,opacity:[0,1],translateY:[-30,0],delay:700})}}).call(this);