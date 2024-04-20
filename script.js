// window.addEventListener("load", function() {
//     var iframe = document.getElementById('igraph');
//     var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
//     if (iframeWin.document.body) {
//       iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
//     }
//   });

window.addEventListener('load', function() {
    const iframe = document.getElementById('igraph');
    if (iframe.contentWindow) {
        // Function to set size
        const resizeIframe = () => {
            try {
                const body = iframe.contentWindow.document.body;
                const html = iframe.contentWindow.document.documentElement;
                const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                iframe.style.height = height + 'px';
            } catch (error) {
                console.error('Error resizing iframe:', error);
            }
        };

        // Set initial size
        resizeIframe();

        // Optional: Resize on window resize or orientation change
        window.addEventListener('resize', resizeIframe);
        window.addEventListener('orientationchange', resizeIframe);
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const toggleNavButton = document.getElementById('toggleNav');
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');

    // Function to toggle navigation open/close
    toggleNavButton.addEventListener('click', function() {
        if (navbar.classList.contains('nav-closed')) {
            navbar.classList.remove('nav-closed');
            navbar.classList.add('nav-open');
        } else {
            navbar.classList.remove('nav-open');
            navbar.classList.add('nav-closed');
        }
    });

    // Function to handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetSection = document.querySelector(this.getAttribute('href'));

            if (targetSection) {
                // Scroll to the section smoothly
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });

                // Close the navigation after clicking
                navbar.classList.remove('nav-open');
                navbar.classList.add('nav-closed');
            }
        });
    });
});

function updateProgress() {
    var sections = document.querySelectorAll("section");
    var scrollPosition = window.scrollY || window.pageYOffset;
    var total = sections.length;
    var currentSectionIndex = 0;

    // Check which section the current scroll position is passing
    sections.forEach((section, index) => {
        if (scrollPosition >= section.offsetTop) {
            currentSectionIndex = index + 1;
        }
    });

    var progressPercentage = (currentSectionIndex / total) * 100;
    document.getElementById("progressBar").style.width = progressPercentage + "%";
    console.log('Current Section Index:', currentSectionIndex, 'Progress:', progressPercentage + '%');
}



window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);
document.addEventListener('DOMContentLoaded', updateProgress);
window.addEventListener('load', updateProgress);  // Use if content size changes post DOMContentLoaded




// Introduction 

// Age, sexuality, gender

document.addEventListener('DOMContentLoaded', function() {

const triangleChartCtx = document.getElementById('triangleChart').getContext('2d');
const triangleChart = new Chart(triangleChartCtx, {
    type: 'radar',
    data: {
        labels: ['Ages 13-34', 'Ages 35-49', 'Age 50+'], // Age groups as the axes of the radar
        datasets: [
       
            {
                label: 'Trans',
                data: [11, 8, 8], // Hypothetical data for Trans across the 3 age groups
                backgroundColor: 'rgba(242, 105, 95, 0.2)',
                borderColor: 'rgba(242, 105, 95, 1)',
                pointBackgroundColor: 'rgba(242, 105, 95, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(242, 105, 95, 1)'
            },
            {
                label: 'Non-binary, other or multiple',
                data: [45, 21, 7], // Hypothetical data for Other or multiple gender identities across the 3 age groups
                backgroundColor: 'rgba(35, 153, 181, 0.2)',
                borderColor: 'rgba(35, 153, 181, 1)',
                pointBackgroundColor: 'rgba(35, 153, 181, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(35, 153, 181, 1)'
            },
            {
                label: 'Straight, Gay, or Lesbian',
                data: [29, 48, 76], // Hypothetical data for Straight, Gay, or Lesbian across the 3 age groups
                backgroundColor: 'rgba(126, 188, 100, 0.2)',
                borderColor: 'rgba(126, 188, 100, 1)',
                pointBackgroundColor: 'rgba(126, 188, 100, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(126, 188, 100, 1)'
            },
            {
                label: 'Bisexual, pansexual, queer, other',
                data: [71, 52, 24], // Hypothetical data for Bisexual, pansexual, queer, other across the 3 age groups
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(153, 102, 255, 1)'
            },
            {
                label: 'Cisgender',
                data: [44, 72, 85], // Hypothetical data for Cisgender across the 3 age groups
                backgroundColor: 'rgba(258, 206, 67, 0.2)',
                borderColor: 'rgba(258, 206, 67, 0.5)',
                pointBackgroundColor: 'rgba(258, 206, 67, 0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(258, 206, 67, 0.2)'
            }
        ]
    },
    options: {
        responsive: true, // The chart will grow to fill the container
        maintainAspectRatio: false, // The chart will not maintain the aspect ratio
        layout: {
      
            padding: 0,
        },
        scales: {
            r: {
                ticks: {
                    // Adjust the font of the radial axis ticks (labels)
                    display: true,
                    font: {
                        size: 10, // Sets the font size
                        family: 'Arial', // Sets the font family
                    }
                },
                angleLines: {
                    display: false
                },
                grid: {
                    circular: true
                }, 
                suggestedMin: 0,
                suggestedMax: 100,
                pointLabels: {
                    // This is where you adjust the font for the point labels around the radar
                    font: {
                        size: 14, // Set the font size for the point labels
                        family: 'Arial' // Set the font family for the point labels
                    }, 
                }
            }
        },
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        const value = context.raw;
                        label += value + '%'; // Append a '%' sign to each value
                        return label;
                    }
                }
            },
            // title: { // Add this block for the chart title
            //     display: true,
            //     text: 'Gender identity and sexual orientation, by age group.', 
            //     padding: {
            //         top: 10,
            //         bottom: 10
            //     },
            //     font: {
            //         size: 14,
            //         family: 'Arial',
            //         weight: 'bold'
            //     },
            //     color: '#2399B5'
            // }
        
            
            
        },
        elements: {
            line: {
                borderWidth: 3
            }
        }
    }
});

});

function resizeCanvas() {
    var canvas = document.getElementById('triangleChart');
    if (!canvas) return;
    // Set the dimensions explicitly, avoiding continuous growth or zero dimensions
    canvas.width = document.getElementById('column2').offsetWidth;
    canvas.height = Math.min(window.innerHeight * 0.75, 400);  // Limiting height to avoid it becoming too large
    // Re-instantiate the chart or update its size here if necessary
}

// Ensure resize logic is called on appropriate events
window.addEventListener('resize', resizeCanvas);
window.addEventListener('DOMContentLoaded', resizeCanvas);



// RACE, ETHNICITY, AND ACCESS TO SERVICES


// Initial category to display

let currentCategory = 'mentalHealth';

// Data for each category (simplified structure; expand according to your data)
const dataCategories = {
    mentalHealth: [16.7, 9.1, 13, 8.5, 14.8, 6.5],
    chronicConditions: [8.3, 13, 7.8, 4.1, 4.2, 15.2], 
    majorHealthEvents: [0, 20, 11.1, 5.1, 21.4, 16.7], 
    reproductiveHealth: [10, 10, 17.9, 7.8, 11.1], 
    jobRelatedIssues: [0, 50, 28.6, 32.2, 33.3, 33.3], 
    environmentalHealth: [0, 23.5, 20, 20.4, 85.7, 7.7], 
    abuse: [40, 40, 30, 22.5, 50, 25], 
    substanceAbuse: ['NA',0,16.7,11.1,'NA',0], 
};

function sortDataAndLabels(data, labels) {
    // Combine the labels and data into an array of objects to keep them together during sorting
    const combined = labels.map((label, index) => {
        return { label, data: data[index] };
    });

    // Sort the combined array based on the data, in descending order
    combined.sort((a, b) => b.data - a.data);

    // Separate the combined array back into sorted labels and data arrays
    const sortedLabels = combined.map(item => item.label);
    const sortedData = combined.map(item => item.data);

    return { sortedLabels, sortedData };
}

// Use the function to sort the initial data and labels
const sortedInitial = sortDataAndLabels(dataCategories[currentCategory], [
    'Asian, Asian American or Pacific Islander', 
    'Black, not Latinx/Hispanic', 
    'Latinx or Hispanic', 
    'White, not Latinx/Hispanic', 
    'Another race or ethnicity', 
    'Multiracial, not including Black or Latinx/Hispanic'
]);

// Define a function to find the max and min values in the dataset
function findMinMaxValues(data) {
    let min = data[0], max = data[0];
    data.forEach(value => {
        if (value !== 'NA') {
            if (value > max) max = value;
            if (value < min) min = value;
        }
    });
    return { min, max };
}

// Adjust getColorForValue to dynamically use max and min for normalization
function getColorForValue(value, min, max, category) {
    const gradients = {
        mentalHealth: {start: {r: 35, g: 153, b: 181}, end: {r: 242, g: 105, b: 95} },
        chronicConditions: { start: {r: 258, g: 206, b: 67}, end: {r: 242, g: 105, b: 95}  },
        majorHealthEvents: {start: {r: 35, g: 153, b: 181}, end: {r: 242, g: 105, b: 95} },
        reproductiveHealth: { start: {r: 258, g: 206, b: 67}, end: {r: 242, g: 105, b: 95}  },
        jobRelatedIssues: { start: {r: 35, g: 153, b: 181}, end: {r: 242, g: 105, b: 95} },
        environmentalHealth: { start: {r: 126, g: 188, b: 100}, end: {r: 242, g: 105, b: 95} },
        abuse: { start: {r: 258, g: 206, b: 67}, end: {r: 242, g: 105, b: 95} },
        substanceAbuse: {start: {r: 35, g: 153, b: 181}, end: {r: 242, g: 105, b: 95} },
    };

    const categoryGradient = gradients[category] || gradients['mentalHealth'];
    const normalizedValue = (value - min) / (max - min);

    const r = Math.round(categoryGradient.start.r + (categoryGradient.end.r - categoryGradient.start.r) * normalizedValue);
    const g = Math.round(categoryGradient.start.g + (categoryGradient.end.g - categoryGradient.start.g) * normalizedValue);
    const b = Math.round(categoryGradient.start.b + (categoryGradient.end.b - categoryGradient.start.b) * normalizedValue);

    return `rgb(${r},${g},${b})`;
}

// Initial setup for the bar chart
const ctx = document.getElementById('accessToCareChart').getContext('2d');
let accessToCareChart; // Define it here so it can be re-used/updated

function setupOrUpdateChart(sortedData, sortedLabels, category) {
    // Find the max and min values in the current dataset
    const { min, max } = findMinMaxValues(sortedData);

    // Generate gradient colors for the sorted data
    const initialBackgroundColors = sortedData.map(value => getColorForValue(value, min, max, category));

    // Check if the chart exists, if so, update it, otherwise set it up
    if (accessToCareChart) {
        accessToCareChart.data.datasets[0].data = sortedData;
        accessToCareChart.data.labels = sortedLabels;
        accessToCareChart.data.datasets[0].backgroundColor = initialBackgroundColors;
        accessToCareChart.update();
    } else {
        accessToCareChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sortedLabels,
                datasets: [{
                    label: '% who sought care but did not receive',
                    data: sortedData,
                    backgroundColor: initialBackgroundColors,
                    borderColor: [],
                    borderWidth: 0
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

// Call setupOrUpdateChart initially with sorted data and labels
setupOrUpdateChart(sortedInitial.sortedData, sortedInitial.sortedLabels, currentCategory);

function updateChart(category) {
    const categoryData = dataCategories[category];
    const labels = [
        'Asian, Asian American or Pacific Islander', 
        'Black, not Latinx/Hispanic', 
        'Latinx or Hispanic', 
        'White, not Latinx/Hispanic', 
        'Another race or ethnicity', 
        'Multiracial, not including Black or Latinx/Hispanic'
    ];

    let filteredData = [], filteredLabels = [];
    categoryData.forEach((value, index) => {
        if (value !== 'NA' && value !== 0) {
            filteredData.push(value);
            filteredLabels.push(labels[index]);
        }
    });

    if (filteredData.length === 0) {
        console.error('All data points were filtered out. Please check the data source and conditions.');
        return;
    }

    const sorted = sortDataAndLabels(filteredData, filteredLabels);
    setupOrUpdateChart(sorted.sortedData, sorted.sortedLabels, category);
}

// Event listener for the dropdown menu
document.getElementById('categorySelect').addEventListener('change', function() {
    currentCategory = this.value;
    updateChart(currentCategory);
});


// RAINBOW CHART

const piechartdata = {
    datasets: [
      {
        label: 'Transitioning care',
        data: [53, 43],
        backgroundColor: [
          'rgba(242, 105, 95, 1.0)', // Darker Red
          'rgba(242, 105, 95, 0.5)' // Lighter Red
        ],
        borderColor: 'white',
      },
      {
        label: 'Prescriptions',
        data: [25, 15],
        backgroundColor: [
          'rgba(255, 165, 0, 1.0)', // Darker Orange
          'rgba(255, 195, 77, 0.5)' // Lighter Orange
        ],
        borderColor: 'white',
      },
      {
        label: 'Specialty care',
        data: [54, 46],
        backgroundColor: [
          'rgba(258, 206, 67, 1.0)', // Darker Yellow
          'rgba(258, 206, 67, 0.5)', // Darker Yellow
        ],
        borderColor: 'white',
      },
      {
        label: 'Primary care',
        data: [48, 40],
        backgroundColor: [
          'rgba(126, 188, 100, 1.0)', // Darker Green
          'rgba(126, 188, 100, 0.5)', // Darker Green
        ],
        borderColor: 'white',
      },
      {
        label: 'In-home health care',
        data: [50, 44],
        backgroundColor: [
          'rgba(12, 75, 126, 1.0)', // Darker Blue
          'rgba(12, 75, 126, 0.5)', // Darker Blue
        ],
        borderColor: 'white',
      },
      {
        label: 'Emergency or urgent care',
        data: [45, 40],
        backgroundColor: [
          'rgba(35, 153, 181, 1.0)', // Darker Indigo
          'rgba(142, 68, 173, 0.5)' // Lighter Indigo
        ],
        borderColor: 'white',
      },
      {
        label: 'Mental health services',
        data: [49, 45],
        backgroundColor: [
          'rgba(238, 130, 238, 0.7)', // Darker Violet
          'rgba(255, 192, 203, 0.7)' // Lighter Pink (Violet alternative)
        ],
        borderColor: 'white',
      }
    ],
    labels: ['Non-white', 'White']
  };
  
  const config = {
    type: 'pie',
    data: piechartdata,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      circumference: 180,
      rotation: -90,
      cutout: '60%',
      plugins: {
        legend: {
          display: false // This will turn off the default Chart.js legend
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              const value = context.raw;
              if (value !== undefined) {
                label += value + '%';
              }
              return label;
            }
          }
        }
      }
    },
};
  
  const rainbowChart = new Chart(
    document.getElementById('rainbowChart'),
    config
  );
  

  // HIV prevalence stacked area chart

/// STACKED AREA CHART
document.addEventListener("DOMContentLoaded", function() {
    const originalData = [
        { category: 'No or low risk', values: [{location: 'NYC', value: 85}, {location: 'New York State', value: 88}, {location: 'US', value: 83}, {location: 'US Territory or Possession', value: 68}, {location: 'Outside US', value: 69}] },
        { category: 'At risk', values: [{location: 'NYC', value: 10}, {location: 'New York State', value: 9}, {location: 'US', value: 13}, {location: 'US Territory or Possession', value: 14}, {location: 'Outside US', value: 16}] },
        { category: 'Have HIV', values: [{location: 'NYC', value: 5}, {location: 'New York State', value: 3}, {location: 'US', value: 4}, {location: 'US Territory or Possession', value: 18}, {location: 'Outside US', value: 15}] }
    ];

    // Calculate totals for each location
    const locationTotals = originalData[0].values.map((v, index) => 
        originalData.reduce((acc, category) => acc + category.values[index].value, 0)
    );

    const myColors = ['#7EBC64', '#EECE43', '#2399B5']; // Custom colors: Green, Yellow, Blue

    const datasets = originalData.map((category, index) => ({
        label: category.category,
        data: category.values.map(v => v.value),
        backgroundColor: myColors[index % myColors.length], // Assign custom colors
    }));

    const hivctx = document.getElementById('hivPrevalence').getContext('2d');
    const hivPrevalence = new Chart(hivctx, {
        type: 'bar',
        data: {
            labels: originalData[0].values.map(v => v.location), // Assuming each category has the same locations
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(tooltipItem) {
                            let value = tooltipItem.raw;
                            let total = locationTotals[tooltipItem.dataIndex];
                            let percentage = ((value / total) * 100).toFixed(0);
                            return `${tooltipItem.dataset.label}: ${percentage}%`;
                        }
                    }
                },
                title: {
                    display: false,
                    text: 'HIV Risk/Prevalence by Location'
                }
            }
        }
    });
});


// Covid-19 infection rates

document.addEventListener("DOMContentLoaded", function() {
    const covid19infectiondata = {
        labels: [
            "Asian / Pacific Islander",
            "Multiracial (not Latinx or Hispanic)",
            "White, not Latinx/Hispanic",
            "Black, not Latinx/Hispanic",
            "Another race/ethnicity",
            "Latinx or Hispanic"
        ],
        datasets: [{
            label: 'Covid-19 Infection Rates',
            data: [2, 8, 9, 13, 17, 18],
            backgroundColor: [
                'rgba(242, 105, 95, .5)',
                'rgba(242, 105, 95, .5)',
                'rgba(242, 105, 95, .5)',
                'rgba(242, 105, 95, .5)',
                'rgba(242, 105, 95, .5)',
                'rgba(242, 105, 95, .5)',

            ],
            borderColor: [
                'rgba(35, 153, 181, 1)',
                'rgba(35, 153, 181, 1)',
                'rgba(35, 153, 181, 1)',
                'rgba(35, 153, 181, 1)',
                'rgba(35, 153, 181, 1)',
                'rgba(35, 153, 181, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Calculate the total sum of the data
    const totalSum = covid19infectiondata.datasets[0].data.reduce((acc, val) => acc + val, 0);

    const config = {
        type: 'radar',
        data: covid19infectiondata,
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        // color: '#000000'
                    },
                    grid: {
                        // color: '#000000'
                    },
                    pointLabels: {
                        font: {
                            size: 10 // Increase font size here
                          

                        },
                        color: 'grey'
                    },
                    ticks: {
                        // backdropColor: 'rgba(255, 255, 255, 0.75)',
                        // color: '#000000'
                    }
                }
            },

            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(tooltipItem) {
                            let value = tooltipItem.raw;
                            let percentage = ((value / totalSum) * 100).toFixed(2);
                            return tooltipItem.dataset.label + ': ' + percentage + '%';
                        }
                    }
                },
                title: { // Add this object to include a title
                    // display: true,
                    // text: 'Covid-19 Infection Rates by Ethnicity', // Title text
                    // font: {
                    //     size: 14,
                    //     weight: 'bold'
                    // },
                    // padding: {
                    //     top: 0,
                    //     bottom: -10
                    // },
                    // align: 'center', // Options are 'start', 'center', and 'end'
                    // color: '#2399B5'

                }
            }
        },
        plugins: [] // Removed ChartDataLabels from this array
    };

    const infectionctx = document.getElementById('covidInfection').getContext('2d');
    const covidInfection = new Chart(infectionctx, config);
});






// Barriers map

document.addEventListener('DOMContentLoaded', function() {
    var selectedColumn = "culturally_competent"; // Default column to display
    var dataMap = {};
    var geoData;

    function updateLegendPosition(svg, width) {
        var legendX = width * 0.1, legendY = 10; // Adjusted to top-left corner
        var legendWidth = width * 0.2, legendHeight = 20, legendMargin = 10; // Adjusted size

        svg.select(".legend")
            .attr("x", legendX)
            .attr("y", legendY);

        var xLegendScale = d3.scaleLinear()
            .domain([1, 4])
            .range([0, legendWidth]);

        svg.select(".legend-axis")
            .attr("transform", `translate(${legendX}, ${legendY + legendHeight + legendMargin})`)
            .call(d3.axisBottom(xLegendScale)
                .tickSize(5)
                .tickValues([1, 2, 3, 4])
                .tickFormat(function(d) { return 'Q' + d; }));
    }

    function updateSelectPosition() {
        var selectX = 10, selectY = 10; // Adjust according to your design
        d3.select("#dataColumnSelect").style("top", selectY + "px").style("left", selectX + "px");
    }

    function redraw() {
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.8;
        d3.select("#map").selectAll("svg").remove();
        drawMap(selectedColumn, width);
        updateLegendPosition(d3.select("#map svg"), width);
        updateSelectPosition();
    }

    window.addEventListener("resize", redraw);

    // Load GeoJSON and CSV data
    d3.json("new-york-counties.geojson").then(function(geoJSONData) {
        geoData = geoJSONData;
        return d3.csv("data_map.csv");
    }).then(function(csvData) {
        csvData.forEach(function(d) {
            var countyName = d.county;
            dataMap[countyName] = {
                culturally_competent: +d.culturally_competent,
                lack_of_information: +d.lack_of_information,
                community_fear: +d.community_fear,
                support_groups: +d.support_groups,
                adequately_trained: +d.adequately_trained,
                refuse_service: +d.refuse_service
            };
        });
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.8;
        drawMap(selectedColumn, width);
        updateLegendPosition(d3.select("#map svg"), width);
        updateSelectPosition();
    });

    function drawMap(columnName, width) {
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.8;

        var svg = d3.select("#map").append("svg")
            .attr("width", width)
            .attr("height", height);

        var projection = d3.geoMercator().fitSize([width, height], geoData);
        var path = d3.geoPath().projection(projection);

        var colorScale = createCustomColorScale(columnName);

        svg.selectAll("path")
           .data(geoData.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke", "white")
           .attr("stroke-width", 1)
           .style("fill", d => {
               var countyName = d.properties.name;
               var value = dataMap[countyName] && dataMap[countyName][columnName];
               return value != null ? colorScale(value) : "#ccc";
           })
           .on("mouseover", function(event, d) {
               d3.select("#tooltip")
                 .style("visibility", "visible")
                 .text(`${d.properties.name}: ${formatValue(dataMap[d.properties.name][columnName])}`);
           })
           .on("mousemove", function(event, d) {
               d3.select("#tooltip")
                 .style("top", (event.pageY - 10) + "px")
                 .style("left", (event.pageX + 10) + "px");
           })
           .on("mouseout", function() {
               d3.select("#tooltip").style("visibility", "hidden");
           });

        drawLegend(svg, width);
    }

    function drawLegend(svg, width) {
        var legendX = width * 0.1, legendY = 10; // Adjusted to top-left corner
        var legendWidth = width * 0.2, legendHeight = 20, legendMargin = 10; // Adjusted size

        var gradients = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%");

        gradients.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "#7EBC64"); // Green (Q1)
        gradients.append("stop")
            .attr("offset", "33%")
            .attr("stop-color", "#2399B5"); // Blue (Q2)
        gradients.append("stop")
            .attr("offset", "67%")
            .attr("stop-color", "#EECE43"); // Yellow (Q3)
        gradients.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "#F2695F"); // Red (Q4)

        svg.append("rect")
            .attr("class", "legend")
            .attr("x", legendX)
            .attr("y", legendY)
            .attr("width", legendWidth)
            .attr("height", legendHeight)
            .style("fill", "url(#gradient)");

        var xLegendScale = d3.scaleLinear()
            .domain([1, 4])
            .range([0, legendWidth]);

        var legendAxis = d3.axisBottom(xLegendScale)
            .tickSize(5)
            .tickValues([1, 2, 3, 4])
            .tickFormat(function(d) { return 'Q' + d; });

        svg.append("g")
            .attr("class", "legend-axis")
            .attr("transform", `translate(${legendX}, ${legendY + legendHeight + legendMargin})`)
            .call(legendAxis);
    }

    function createCustomColorScale(columnName) {
        var values = Object.values(dataMap).map(d => d[columnName]).filter(Boolean);
        var q1 = d3.quantile(values.sort(d3.ascending), 0.25);
        var q2 = d3.quantile(values, 0.50);
        var q3 = d3.quantile(values, 0.75);

        return d3.scaleThreshold()
            .domain([q1, q2, q3])
            .range(["#7EBC64", "#2399B5", "#EECE43", "#F2695F"]);
    }

    function formatValue(value) {
        return value ? d3.format(".1%")(value) : "N/A";
    }

    d3.select("#dataColumnSelect").on("change", function() {
        selectedColumn = d3.select(this).property("value");
        redraw();
    });
});
