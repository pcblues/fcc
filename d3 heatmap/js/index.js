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

const margin={top:50,right:40,bottom:70,left:100}
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
    
    var xScale = d3.scaleBand()
    .rangeRound([0,gWidth])
    .domain(ndataset.map(function(val){return val.year}))

    var xAxis = d3.axisBottom()
    .scale(xScale)
    .tickValues(xScale.domain().filter(function(year){
      return year%25===0
    }))
    .tickFormat(function(d){return d}) 
    .tickSize(10,1)

    var xMap = function(d){return xScale(xValue(d))}

    // y axis
    var yScale = d3.scaleBand()
    .rangeRound([0,gHeight],0,0)
    .domain([0,1,2,3,4,5,6,7,8,9,10,11])
    
    var yAxis = d3.axisLeft()
    .scale(yScale)
    .tickValues(yScale.domain())
    .tickFormat(function(month) {
      
        var mNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mNames[month];
        
    })
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

    var xAxisTrans = gHeight+margin.top

    svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate("+margin.left+","+xAxisTrans+")")
      .call(xAxis)
      .append('text')
      .attr('transform','translate(0,0)')
      .style('text-anchor','middle')
      .text('Years')
  
    svg.append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate("+margin.left+","+margin.top+")")
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
    
    // colors
    // ['#ffffb2','#fed976','#feb24c','#fd8d3c','#f03b20','#bd0026']
    legendColors= ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]


  // draw legend
  legendColors= ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
  legendWidth = 400
  legendHeight = 300/legendColors.length

  var legendX = d3.scaleLinear()
  .domain([minTemp,maxTemp])
  .range([0, legendWidth])

  var legendThreshold = d3.scaleThreshold()
  .domain((function(min,max,count){
    array = []
    step = (max-min)-count;
    var base = min
    for (i=1;i<count;i++) {
      array.push(base+i*step)
    }
    return array
  })(minTemp,maxTemp,legendColors.length))
  .range(legendColors)

  var legendXAxis = d3.axisBottom()
  .scale(legendX)
  .tickSize(10,0)
  .tickValues(legendThreshold.domain())
  .tickFormat(d3.format(".1f"))


    var legend = svg.append('g')
    .classed('legend',true)
    .attr('id','legend')
    .attr('transform','translate(10,10)')


  legend.append('g')
      .selectAll("rect")
      .data(legendThreshold.range().map(function(color){
        var d = legendThreshold.invertExtent(color);
        if(d[0] == null) d[0] = legendX.domain()[0];
        if(d[1] == null) d[1] = legendX.domain()[1];
        return d;
      }))
    .enter().append("g")
      .attr("class", "legend")
      .attr('id','legend')
      .attr("transform", function(d, i) { 
        return "translate(20," + (i+1) * 20 + ")"; })
      

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
      return d})
  
      legend.append("g")
      .attr("transform", "translate(" + 0 + "," + legendHeight + ")")
      .call(legendXAxis);
  
      //heading
      var heading = svg.append("heading");
      heading.append("h1")
        .attr('id', 'title')
        .text("Monthly Global Land-Surface Temperature");
      heading.append("h3")
        .attr('id', 'description')
        .html(ndataset[0].year + " - " + ndataset[ndataset.length-1].year + ": base temperature " + nbaseline + "&#8451;");
      
// map
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
      return yScale(d.month)
    })
    .attr('width', function(d){
      5
      //return xScale.range(d.year)
    })
    .attr('height', function(d){
      10
      //return yScale.range(d.month)
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


    })

   
