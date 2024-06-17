//U22275330
function main(){
    d3.select("body").append("div")
        .text("New Div");//create div elements as dataponts.

    d3.selectall("div")
.on("mouseover", function(){
    d3.select(this)
        .style("background-color","firebrick")})
.on("mouseout", function(){
    d3.select(this)
        .style("background-color","lightgreen")})// Add event listeners./
};//Add hover interactivity to div elements.
