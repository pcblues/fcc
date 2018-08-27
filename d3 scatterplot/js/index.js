// run http-server before executing


// snip below for codepen.io
/*
const url ='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'

*/

const url ='http://localhost:8080/data/cyclist-data.json'

//const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
var dataset = []
svgWidth = 700
svgHeight= 500

const margin={top:80,right:40,bottom:70,left:60}
const gWidth = svgWidth-margin.left-margin.right;
const gHeight = svgHeight-margin.top-margin.bottom;

d3.json(url, function(err, data) { 
    ndataset=data

    // various variables
    var numItems = Object.keys(ndataset).length
    var minY = d3.min(ndataset, function(d) { 
      return new Date((d.Seconds-10)*1000); 
    })

    var maxY = d3.max(ndataset, function(d) { 
      return new Date((d.Seconds+10)*1000); 
    })
    
    var xAxisBottom = gHeight+margin.top
    
    var minDate=d3.min(ndataset,function(d){
      return new Date(d.Year)
    })
    
    var maxDate= d3.max(ndataset,function(d){
      return new Date(d.Year)
    })

    // x axis
    var xValue= function(d) {return d.Year}
    
    var xScale = d3.scaleLinear()
    .range([margin.left,gWidth])
    .domain([minDate-1,maxDate])
    
    var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickFormat(d3.format('d'))

    var xMap = function(d){return xScale(xValue(d))}

    // y axis
    var yValue = function(d) {
      return new Date(d.Seconds*1000)
    }

    var yScale = d3.scaleTime()
    .range([gHeight+margin.bottom,margin.top])
    .domain([minY,maxY])

    var yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(5)
    .tickFormat(d3.timeFormat("%M:%S"))
   
    var yMap = function(d) { return yScale(yValue(d))}

    // colour
    var cValue = function(d) {
      var result
      if (d.Doping==="") {
        result = 1
      } else {
        result = 2
      }
      return result
    }

    var  color = d3.scaleOrdinal(d3.schemeCategory10)

    // set up svg
    var svg=d3.select("body")
    .append("svg")
      .attr("height",gHeight+margin.top+margin.bottom)
      .attr("width",gWidth+margin.left+margin.right) 
      .style("border", "1px solid black");

    var xAxisTrans = gHeight+margin.bottom
    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0,"+xAxisTrans+")")
      .call(xAxis)
  
    svg.append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate("+margin.left+",0)")
      .call(yAxis)


    var tooltip = d3.select("body")
    .append("div")
    .attr("class", "toolTip")
    .attr("id","tooltip")
      
    // data
    var dots=svg.selectAll('dot')
    .data(ndataset)
    .enter()
    .append('circle')
    .attr("class","dot")
    .attr('r',5)
    .attr('cx',xMap)
    .attr('cy',yMap)
    .attr('data-xvalue',function(d){return d.Year})
    .attr('data-yvalue',function(d){return new Date(d.Seconds*1000)})
    .style('fill',function(d){return color(cValue(d))})
    .on("mousemove", function(d){
          tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .attr('data-year',d.Year)
            .style("display", "inline-block")
            .html((d.Name)+"<BR><BR>Year:"+(d.Year) + "<br>Time:" + (d.Time)+
          '<br><br>'+(d.Doping))
            .attr('data-date',d.Year)
      })
    .on("mouseout", function(d){ tooltip.style("display", "none");});

  // draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr('id','legend')
      .attr("transform", function(d, i) { return "translate(20," + (i+1) * 20 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", gWidth - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", gWidth - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { 
         if (d===2) {
        result= "Suspected of Doping"
      } else {
        result = "Not Suspected of Doping"
      }
      return result})


})

   
  
