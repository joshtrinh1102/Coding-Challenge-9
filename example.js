
function initializepage(){
    d3.select("body").append("div")
        .text("New Div");//create div elements as dataponts.

    d3.selectall("div").addEventListener("mouseover",style())
    d3.selectall("div").addEventListener("mouseout",style())// Add event listeners./
};