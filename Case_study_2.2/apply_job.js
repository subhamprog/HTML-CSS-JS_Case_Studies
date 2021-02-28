function validate()
{

    if(document.getElementById("fname").value=="" || document.getElementById("lname").value=="" || document.getElementById("email").value=="" || document.getElementById("phone").value=="" || document.getElementById("address").value=="" ||
    document.getElementById("city").value=="" || document.getElementById("state").value=="" || document.getElementById("zip").value=="" || document.getElementById("country").value=="select" || document.getElementById("edulevel").value=="select"
    || document.getElementById("edutype").value=="select" || document.getElementById("file").value=="")
    {
        alert("Please fill all the fields.");
        return false;
    }
    
    // if(document.getElementById("phone").value.length !== 10)
    // {
    //     alert("Phone number should contain 10 digits only");
    // }
}

function checkStatus(checkbox)
{
    if(checkbox.checked == true)
    {
        newFunction();
    }
    if(checkbox.checked == false)
    {
        document.getElementById("groupnew").value = "";
    }
}


function newFunction() {
    var label1 = document.createElement("label");
    label1.htmlFor = "current";
    label1.appendChild(document.createTextNode("Current Employer : "));

    var text1 = document.createElement("input");
    text1.type = "text";
    text1.id = "current";
    text1.placeholder = "Current Employer";

    var br = document.createElement('br');

    var label2 = document.createElement("label");
    label2.htmlFor = "years";
    label2.appendChild(document.createTextNode("Years of Experiences : "));

    var text2 = document.createElement("input");
    text2.type = "number";
    text2.id = "years";
    text2.placeholder = "Years of Experience";

    var container = document.getElementById("groupnew");
    container.appendChild(label1);
    container.appendChild(text1);
    container.appendChild(br);
    container.appendChild(label2);
    container.appendChild(text2);
}

// function checkMail() 
// {
//     newFunction0();

//     function newFunction0() {
//         var txt = document.getElementById("email").value;
//         if (txt.length > 5 && txt.indexOf('@') > 0) {
//             alert("Enter a valid email address.");
//             return false;
//         }
//     }
// }

