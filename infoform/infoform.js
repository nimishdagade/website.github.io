jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.infoForm').submit(function() {
    var f = $(this).find('.infoform-group'),
	ferror=false,
        emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

	if(!ferror) {
		var flag=true;
		sessionStorage.setItem("12", flag);
		window.location.href="https://pmny.in/2I6qCkD5R7F7";
	}
	
	return false;
  });
	
});


function unlockbtn(){
	var flag = sessionStorage.getItem("12");
	if(flag){
	  var field1=0,field2=0,field3=0;
          
		$("#sendmessage").addClass("show");
		sessionStorage.clear();
	  	alert("Your Car Has Unlocked Successfully. Thank You!");
		var strlink="https://api.thingspeak.com/update?api_key=JXX0WSZKT9AGCDRP&field1="+field1+"&field2="+field2+"&field3="+field3;
		window.location.href=strlink;    
		
	}
}

