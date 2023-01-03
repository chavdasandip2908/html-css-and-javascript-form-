

const options = {
	method: 'GET'
};
fetch('https://hub.dummyapis.com/employee?noofRecords=50&idStarts=1001', options)
	.then(response => response.json())
	.then(function(response){

        var newElement=document.createElement("h1");
        var newText=document.createTextNode("Employee Data");
        newElement.appendChild(newText);
        document.getElementById("contener").appendChild(newElement);

        var bodyElelment=document.querySelector("tbody");
        var headElelment=document.querySelector("thead");
        headElelment.innerHTML=`<th>Profile</th>
        <th>ID</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Age</th>
        <th>DOB</th>
        <th>Address</th>`

        for(var employee=0; employee < response.length; employee++){
            bodyElelment.innerHTML+=
            `<tr>
                <td><img src="${response[employee].imageUrl}" alt="Profile" height="40px" weight="40px"></td>
                <td>${response[employee].id}</td>
                <td>${response[employee].firstName}</td>
                <td>${response[employee].lastName}</td>
                <td>${response[employee].email}</td>
                <td>${response[employee].contactNumber}</td>
                <td>${response[employee].age}</td>
                <td>${response[employee].dob}</td>
                <td>${response[employee].address}</td>
            </tr>`

        }

        // console.log(response);
    })
	.catch(err => console.error(err));
    
