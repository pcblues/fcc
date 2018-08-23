// run http-server before executing


// snip below for codepen.io
/*
const url ='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'

*/

const url ='http://localhost:8080/data/GDP-data.json'

//const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
var dataset = []
svgWidth = 500
svgHeight= 500

const margin={top:40,right:40,bottom:70,left:40}
const gWidth = svgWidth-margin.left-margin.right;
const gHeight = svgHeight-margin.top-margin.bottom;


d3.json(url, function(err, data) { 

    dataset=data.data
    ndataset = []  
    dataset.forEach(
      function(d) {
        var elem= {}
        elem.x = d[0]
        elem.y = d[1]
        ndataset.push(elem)
      }
    )

    // set up svg
    var svg=d3.select("body")
    .append("svg")
      .attr("height",gHeight+margin.top+margin.bottom)
      .attr("width",gWidth+margin.left+margin.right) 
      .style("border", "1px solid black");

    // various variables

    var numItems = Object.keys(ndataset).length


    var maxY = d3.max(ndataset, function(d) { 
      return d.y; 
    })

    // x axis

    var minDate=d3.min(ndataset,function(d){
      return new Date(d.x)
    })
    var maxDate= d3.max(ndataset,function(d){
      return new Date(d.x)
    })
    
    
    var xScale = d3.scaleTime()
    .range([margin.left,gWidth+margin.right])
    .domain([minDate,maxDate])
    
    var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5)

    var xAxisBottom = gHeight+margin.top

    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0," + xAxisBottom + ")")
      .call(xAxis)
  
    // y axis
    var yScale = d3.scaleLinear()
    .range([gHeight,0])
    .domain([0, maxY])
    
    var yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(10);

    svg.append("g")
         .attr("id", "y-axis")
      .attr("transform", "translate("+margin.left+","+margin.top+")")
      .call(yAxis)

    var tooltip = d3.select("body")
    .append("div")
    .attr("class", "toolTip")
    .attr("id","tooltip")
   
    // data
    var bar=svg.selectAll('rect')
    .data(ndataset)
    .enter()
  
    const barSize=(gWidth/numItems)
    
    bar.append('rect')
      .attr('height', function(d,i) {
          var barHeight = (d.y/maxY)*gHeight
          return barHeight
        })
      .attr('x',function(d,i){
        return margin.left+(i*barSize)})
      .attr('y',function(d){return yScale(d.y)})
      .attr('width', barSize)
      .attr('class','bar')
      .attr('data-date',function(d){
        return d.x
      })
      .attr('data-gdp',function(d){
        return d.y
      })
      .attr('transform', function(d, i) {
        
        var yTrans=  margin.top
        var xTrans = 0
        return "translate("+ xTrans +","+yTrans+" )"
  
      })
        .on("mousemove", function(d){
          tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .style("display", "inline-block")
            .html("Date:"+(d.x) + "<br>GDP:" + (d.y))
            .attr('data-date',d.x)
      })
      .on("mouseout", function(d){ tooltip.style("display", "none");});

})

   
  
