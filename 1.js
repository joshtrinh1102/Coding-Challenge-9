
function initializepage(){
    d3.select("body").append("div")
        .text("New Div");//create div elements as dataponts.

    d3.selectall("div").addEventListener("mouseover",style("background-color","firebrick"))
    d3.selectall("div").addEventListener("mouseout",style("background-color","lightgreen"))// Add event listeners./
};//Add hover interactivity to div elements.
