// run http-server before executing


// snip below for codepen.io
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
const margin={top:20,right:20,bottom:70,left:40}
const w = 600-margin.left-margin.right;
const h = 300-margin.top-margin.bottom;

const barHeight=20

var svg=d3.select("body")
.append("svg")
.attr("height",h+margin.top+margin.bottom)
.attr("width",w+margin.left+margin.right) 
.selectAll('rect')
.data(dataset)
.enter()
.append('rect').attr('width', function(d) {  return d; })
.attr('height', barHeight - 1)
.attr('transform', function(d, i) {
  return "translate(0," + i * barHeight + ")";})

svg.append("g")
     .attr("id", "x-axis")
  .attr("transform", "translate(0," + w + ")")
  //.call(xAxis)

svg.append("g")
     .attr("id", "y-axis")
  .attr("transform", "translate(0," + h + ")")
  //.call(yAxis)

//var xScale = d3.scale.ordinal().rangeRoundBands([0, w], .05);

var yScale = svg.scale.linear().range([h, 0]);

var yAxis = d3.svg.axis()
.scale(yScale)
.orient("left")
.ticks(10);
/*
var xAxis = d3.svg.axis()
.scale(xScale)
.orient("bottom")
.ticks(10);

*/


/*
.append("g")
.attr("id","x-axis")
.attr("transform", "translate(0," + h + ")")
.append("g")
.attr("id","y-axis")
.attr("transform", "translate("+w+",0)")
*/
/*
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