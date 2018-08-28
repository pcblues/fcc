// run http-server before executing


// snip below for codepen.io
/*
var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json";

*/

const url ='http://localhost:8080/data/global-temperature.json'

//const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
var dataset = []
svgWidth = 700
svgHeight= 500

const margin={top:80,right:40,bottom:70,left:60}
const gWidth = svgWidth-margin.left-margin.right;
const gHeight = svgHeight-margin.top-margin.bottom;

d3.json(url, function(err, data) { 
    ndataset=data.monthlyVariance
    nbaseline = data.baseTemperature

    // various variables
    var numItems = Object.keys(ndataset).length
    var xAxisBottom = gHeight+margin.top
    
    // domains
    var minY = d3.min(ndataset, function(d) { 
      return d.month; 
    })

    var maxY = d3.max(ndataset, function(d) { 
      return d.month; 
    })
    
    var minX=d3.min(ndataset,function(d){
      return d.year
    })
    
    var maxX= d3.max(ndataset,function(d){
      return d.Year
    })

    var variance = ndataset.map(function(val){
      return val.variance
    })

    var minTemp= nbaseline+Math.min.apply(null,variance)
    var maxTemp= nbaseline+Math.max.apply(null,variance)

    // x axis
    var xValue= function(d) {return d.Year}
    
    var xScale = d3.scaleOrdinal()
    .range([0,gWidth],0,0)
    .domain(ndataset.map(function(val){return val.year}))

    
    var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues(xScale.domain().filter(function(year){
      return year%10===0
    }))
    .tickFormat(function(d){return d}) //todo
    .tickSize(10,1)

    var xMap = function(d){return xScale(xValue(d))}


    // y axis
    var yValue = function(d) {
      return new Date(d.Seconds*1000)
    }

    var yScale = d3.scaleOrdinal()
    //.range([gHeight+margin.bottom,margin.top])
    .range([0,gHeight])
    .domain([1,2,3,4,5,6,7,8,9,10,11,12])

    var yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues(yScale.domain())
    .tickFormat(d3.timeFormat("%B")) // todo
    .tickSize(10,1)
   
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
      .attr('id','description')
      .style("border", "1px solid black");

    var xAxisTrans = gHeight+margin.bottom
    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(0,"+xAxisTrans+")")
      .call(xAxis)
      .append('text')
      .attr('transform','translate(100,100)')
      .style('text-anchor','middle')
      .text('Years')
  
    svg.append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate("+margin.left+",0)")
      .call(yAxis)
      .append('text')
      .attr('transform','rotate(-90)')
      .attr('y',100)
      .attr('x',100)
      .attr('dy','1em')
      .style('text-anchor','middle')
      .text('Months')

    var tooltip = d3.select("body")
    .append("div")
    .attr("class", "toolTip")
    .attr("id","tooltip")
      
    // data
    svg.append('g')
    .classed('map',true)
    .attr('transform','translate('+margin.left+','+margin.top+')')
    .selectAll('rect')
      .data(ndataset)
    .enter()
    .append('rect')
    .attr("class","cell")
    .attr('data-month',function(d){return d.month})
    .attr('data-year',function(d){return d.year})
    .attr('data-temp',function(d){return nbaseline+d.variance})
    .attr('data-xvalue',function(d){return d.year})
    .attr('data-yvalue',function(d){return d.month})
    .style('fill',function(d){return color(cValue(d))})
    .attr('x',function(d,i){
      return xScale(d.year);
    })
    .attr('y', function(d,i){
      return yScale(d.month);
    })
    .attr('width', function(d,i){
      return xScale.range(d.year);
    })
    .attr('height', function(d,i){
      return yScale.range(d.month);
    })
    .on("mousemove", function(d){
          tooltip
            .style("left", d3.event.pageX - 50 + "px")
            .style("top", d3.event.pageY - 70 + "px")
            .attr('data-year',d.Year)
            .style("display", "inline-block")
            .html((d.Name)+"<BR><BR>Year:"+(d.year) + "<br>Time:" + (d.yime)+
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

   
  
