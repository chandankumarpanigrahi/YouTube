var tObj = {};
function loginContent(page) {
	//chk_sess();
	// console.log("fhgfh");
	var xhttp;

	if (window.XMLHttpRequest) {
		// code for modern browsers
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			// alert(xhttp.responseText);
			$("#page_content").load(xhttp.responseText);
			$("#load_js").html("<script src='js/" + page + ".js'></script>");
			console.log(page);
		}
	};
	// alert(page);
	xhttp.open("GET", "include/pages.php?page=" + page, true);
	xhttp.send();
}


// =========================================================================================
// Name- Prabhu Charan Ojha
// Date- 13-04-2023
// Details- The below code is for initialize toaster
// ==========================================================================================
// var Toast = Swal.mixin({
// 	toast: true,
// 	position: "top-end",
// 	showConfirmButton: false,
// 	timer: 3000,
// });

// =========================================================================================
// Name- Prabhu Charan Ojha
// Date- 13-04-2023
// Details- The below function is for success message
// ==========================================================================================
// function success(title) {
// 	Toast.fire({
// 		icon: "success",
// 		title: title,
// 	});
// }
// =========================================================================================
// Name- Prabhu Charan Ojha
// Date- 13-04-2023
// Details- The below function is for error message
// ==========================================================================================
// function error(title) {
// 	Toast.fire({
// 		icon: "error",
// 		title: title,
// 	});
// }


// =========================================================================================
// Name- Prabhu Charan Ojha
// Date- 17-04-2023
// Details- The below function is for success message
// ==========================================================================================
function success(title) {
	new bootstrap.Toast(document.querySelector("#liveToast")).show();
	$("#succes").show();		
	$("#error").hide();			
	$("#success_msg").html(title);		
}
// =========================================================================================
// Name- Prabhu Charan Ojha
// Date- 17-04-2023
// Details- The below function is for error message
// ==========================================================================================
function error(title) {
	new bootstrap.Toast(document.querySelector("#liveToast")).show();
	$("#succes").hide();			
	$("#error").show();			
	$("#error_msg").html(title);	
}


// ==================================================
// Name: Prashant Kumar
// Date: 13-04-2023
// Details: To convert string into camel case and validate blank/null data
// ============================================================
function camelCase(str) {
	if (str != null) {
		return str
			.split(" ")
			.map(function (word, index) {
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			})
			.join(" ");
	} else {
		return "";
	}
}
// ==================================================
// Name: Prashant Kumar
// Date: 13-04-2023
// Details:validate blank/null data
// ============================================================
function checkData(data) {
	if (data == "null" || data == null || data == "" || data == undefined) {
		return "N/A";
	} else {
		return data;
	}
}



