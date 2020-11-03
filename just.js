//Default Browser Tooltips

svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")

    .append("title")
    .text(function (d) {
        return "This value is" + d;
    });

//SVG Element Tooltips
//HTML div Tooltips

//Sorting
array.sort(function(a, b){
    //You don't need {} when you have only one line
    if (a.lastName.toLowerCase < b.lastName.toLowerCase) return -1;
    else if (b.lastName.toLowerCase > b.lastName.toLowerCase) return 1;
    return 0;
});

array.sort(function(a, b) {
    //Return positive, negative, or zero
    return a-b;
});

//Shallow copy (in case you want to preserve the original order)
var copy = orig.slice();