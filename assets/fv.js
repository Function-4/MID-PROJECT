function log()
    {
	    let username = document.getElementById('name').value;
		let pass = document.getElementById('pass').value;
		if(username == ""){
			document.getElementById('usernameError').innerHTML = "<span>&#9888;</span> Please Provide your Username";
		return false;
		}
		document.getElementById('usernameError').innerHTML = "";
		if(pass == ""){
			document.getElementById('passError').innerHTML = "<span>&#9888;</span> Please Provide your Password";
		return false;
		}
			document.getElementById('passError').innerHTML = "";
			return true;
	}
function reg(){
	let username = document.getElementById('name').value;
	let pass = document.getElementById('pass').value;
	let first = document.getElementById('first').value;
	let last = document.getElementById('last').value;
	let email = document.getElementById('email').value;
	let number = document.getElementById('number').value;

	if(username == ""){
	document.getElementById('usernameError').innerHTML = "<span>&#9888;</span> Please Provide your Username";
		return false;
	}document.getElementById('usernameError').innerHTML = "";
	if(pass == ""){
		document.getElementById('passError').innerHTML = "<span>&#9888;</span> Please Provide your Password";
		return false;
	}document.getElementById('passError').innerHTML = "";
	if(first == ""){
		document.getElementById('firstError').innerHTML = "<span>&#9888;</span> Please Provide your First Name";
		return false;
	}document.getElementById('firstError').innerHTML = "";
	if(last == ""){
		document.getElementById('lastError').innerHTML = "<span>&#9888;</span> Please Provide your Last Name";
		return false;
	}document.getElementById('lastError').innerHTML = "";
	if(email == ""){
		document.getElementById('emailError').innerHTML = "<span>&#9888;</span> Please Provide your Email";			
		return false;
	}document.getElementById('emailError').innerHTML = "";
	if(number == ""){
		document.getElementById('numberError').innerHTML = "<span>&#9888;</span> Please Provide your Contact Number";
		return false;
	}document.getElementById('numberError').innerHTML = "";
		return true;
	}
function view_w(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/view_w.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function view_s(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/view_s.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}




function b_product(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/ab_product.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}
function b_order(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/ab_order.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}


function b_complain(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/ab_complain.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}


function b_feedback(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/ab_feedback.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}




function b_reqproduct(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/ab_reqforproduct.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}




function s_complain(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/as_complain.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}




function s_Feedback(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/as_feedback.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}


function s_application(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/as_application.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}


function s_viewreq(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/as_viewreq.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function w_reg(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/worker_reg.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function s_reg(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/seller_reg.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function del_w(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/delete_W.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function del_s(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/delete_S.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function fv_salary()
{
		let w_sal = document.getElementById('wsal').value;
		if(w_sal == ""){
			document.getElementById('wsalError').innerHTML = "<span>&#9888;</span> Please provide Salary";
		return false;
		}
		if(w_sal<=9999){
			document.getElementById('wsalError').innerHTML = "<span>&#9888;</span> Please Provide Valid Ammount of Salary";
		return false;
		}
			document.getElementById('wsalError').innerHTML = "Salary Sent Successfully";
			return true;
}

function fv_salary_S()
{
		let s_sal = document.getElementById('ssal').value;
		if(s_sal == ""){
			document.getElementById('ssalError').innerHTML = "<span>&#9888;</span> Please provide Salary";
		return false;
		}
		if(s_sal<=9999){
			document.getElementById('ssalError').innerHTML = "<span>&#9888;</span> Please Provide Valid Ammount of Salary";
		return false;
		}
			document.getElementById('ssalError').innerHTML = "Salary Sent Successfully";
			return true;	
}

function bonus()
{
		let bonus = document.getElementById('b').value;
			document.getElementById('bError').innerHTML = "Bonus Sent Successfully";
			return true;	

			
}


function w_viewsalary(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/w_viewsalary.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function w_dailycost(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/w_dailycost.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}




function w_monthlysaving(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/w_monthlysaving.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}


function w_withdraw(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/w_withdraw.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function e_app(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/view_app.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}

function e_com(){
	let role = document.getElementById('r').value;
	let http = new XMLHttpRequest();
	http.open('GET', '../views/view_comp.php', true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send('uname='+role);
	http.onreadystatechange = function(){
		
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('view').innerHTML= this.responseText;
		}
	}
}


