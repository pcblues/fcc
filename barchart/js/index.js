// run http-server before executing


// snip below for codepen.io
/*
const url ='https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'

*/

const url ='http://localhost:8080/data/GDP-data.json'

//const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
var dataset = []
svgWidth = 1000
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

    var minDate=d3.min(ndataset,function(d){
      return d.x
    })
    var maxDate= d3.max(ndataset,function(d){
      return d.x
    })

    var maxY = d3.max(ndataset, function(d) { 
      return d.y; 
    })

    // x axis
    
    var xScale = d3.scaleOrdinal()
    .range([margin.left,gWidth])
    .domain([minDate,maxDate])
    
    var xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(1)

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
      .attr('width', barSize - 1)
      .attr('class','bar')
      .attr('data-date',function(d){
        return d.x
      })
      .attr('data-gdp',function(d){
        return d.y
      })
      .attr('transform', function(d, i) {
        var barHeight = (d.y/maxY)*gHeight
        var yTrans= xAxisBottom-barHeight
        var xTrans =  margin.left+(i * barSize)
        return "translate("+ xTrans +","+yTrans+" )"
        //return "translate("+ d.x +","+d.y+" )"
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

   
  

//var xScale = d3.scale.ordinal().rangeRoundBands([0, w], .05);



/*
var xAxis = d3.svg.axis()
.scale(xScale)
.orient("bottom")
.ticks(10);

const x=d3.scale.ordinal()
.rangeRoundBands([0,w],.1)

const y=d3.scale
.linear().range([h,0])

const xAxis=d3.svg.axis()
.scale(x)-
.orient("bottom")
.ticks(10)

const yAxis=d3.svg.axis()
.scale(y)
.orient("left")
.ticks(10)

var svg = d3.select("body")
.append("svg")
.attr("height",h+margin.left+margin.right)
.attr("width",w+margin.top+margin.bottom)
.append("g")
.attr("transform",
     "translate(" + margin.left +","+ margin.top + ")")



x.domain(data.map(function(d) { return d.date; }));
y.domain([0, d3.max(data, function(d) { return d.value; })]);

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + h + ")")
  .call(xAxis)
  
.selectAll("text")
  .style("text-anchor", "end")
  .attr("dx", "-.8em")
  .attr("dy", "-.55em")
  .attr("transform", "rotate(-90)" );

svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end")
  .text("Value ($)");

svg.selectAll("bar")
  .data(data)
.enter().append("rect")
  .style("fill", "steelblue")
  .attr("x", function(d) { return x(d.date); })
  .attr("width", x.rangeBand())
  .attr("y", function(d) { return y(d.value); })
  .attr("height", function(d) { return height - y(d.value); });
  
  */