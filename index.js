var employeePromise = d3.json("employee.json");

var getPic = function(employee){
    return employee.photo;
}

var getFirstName = function(employee){
    return employee.firstName;
}

var getLastName = function(employee){
    return employee.lastName;
}

var getTitle = function(employee){
    return employee.title;
}

var getUnit = function(employee){
    return employee.unit;
}

var getPhone = function(employee){
    return employee.phone;
}

var getEmail = function(employee){
    return employee.email;
}

var getBio = function(employee){
    return employee.bio;
}

var successFun = function(employee)
{
    
    var rows = d3.select("tbody")
        .selectAll("tr")
        .data(employee)
        .enter()
        .append("tr")
    
    rows.append("td")
        .append("img")
        .attr("src", getPic);
    
    rows.append("td")
        .text(getFirstName);
    
    rows.append("td")
        .text(getLastName);
    
    rows.append("td")
        .text(getTitle);
    
    rows.append("td")
        .text(getUnit);
    
    rows.append("td")
        .text(getPhone);
    
    rows.append("td")
        .text(getEmail);
    
    rows.append("td")
        .text(getBio);
}

var failFun = function(error)
{
    console.log("Error:", error);
}

employeePromise.then(successFun, failFun)