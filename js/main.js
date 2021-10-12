// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

function changeCircleColor() {
  circle.attr('fill', "rgb(" + (Math.round(Math.random() * 255)) + ", "
      + (Math.round(Math.random() * 255)) + ", "
      + (Math.round(Math.random() * 255)) + ")")
}

function changeBothColors() {
  let color = "rgb(" + (Math.round(Math.random() * 255)) + ", "
      + (Math.round(Math.random() * 255)) + ", "
      + (Math.round(Math.random() * 255)) + ")"
  rect.attr('fill', color)
  circle.attr('fill', color)
}

// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on("click", changeCircleColor)
  .on("dblclick", changeBothColors)
  .on("mouseover", function () {
    d3.select(this).attr('stroke', '#000000')
    .attr('stroke-width', '5')})
  .on("mouseout", function () {
    d3.select(this).attr("stroke", "none")})

// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on("mouseover", function () {
    d3.select(this).attr('stroke', '#000000')
    .attr('stroke-width', '5')})
  .on("mouseout", function () {
    d3.select(this).attr("stroke", "none")})
  .call(d3.drag()
    .on("drag", function(event) {
    let coords = d3.pointer(event, svg)
    d3.select(this)
    .attr("x", coords[0])
    .attr("y", coords[1])
  }));
