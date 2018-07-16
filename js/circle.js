var width = 720;
var height = 405;
var data = [{
    "x": 30,
    "y": 40,
    "r": 3
  },
  {
    "x": 150,
    "y": 80,
    "r": 2
  },
  {
    "x": -180,
    "y": -50,
    "r": 5
  },
  {
    "x": 100,
    "y": -120,
    "r": 10
  },
  {
    "x": -10,
    "y": 20,
    "r": 18
  }
];


function updateCircleViz(element, data) {
  // Note that global variables width and height are already defined.

  // Given an array of data consisting of objects with numerical
  // properties x, y, r, use d3.js to do the following.

  // Select the SVG element by its ID.
  // Then use the general update pattern:
  // Join the data to any existing circle elements.
  // For each added element, append a circle element to the SVG.
  // For each deleted element, remove the old circle.

  // Note that each datum is an object with properties x, y, r.
  // Each circle element should have the following properties
  // set as attributes:
  // "cx" = (global variable width / 2) + (the datum value of x)
  // "cy" = (global variable height / 2) + (the datum value of y)
  // "r" = (the datum value of r / 2)
  // "fill" of "green"

  // Don't forget to update the existing circle elements!
  // That means you need to implement the general update pattern correctly.
  var join = d3.select(element).selectAll("circle").data(data);
  join.attr("cx", function(d) {
    console.log(d.x);
    return (width / 2) + d.x;
  });
  join.attr("cy", function(d) {
    console.log(d.y);
    return (height / 2) + d.y;
  });
  join.attr("r", function(d) {
    console.log(dir);
    return d.r / 2;
  });
  join.attr("fill", "green")
  join.enter().append("circle").attr("cx", function(d) {
    return (width / 2) + d.x;
  }).attr("cy", function(d) {
    return (height / 2) + d.y;
  }).attr("r", function(d) {
    return d.r / 2;
  }).attr("fill", "green");
  join.exit().remove();
};
