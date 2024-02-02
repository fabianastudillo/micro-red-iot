// const Chart = require('chart.js')
// import Chart from 'chart.js/auto'

class MyElement extends HTMLElement{
  
  constructor(){
    super()
  }

  connectedCallback(){
    let date = new Date(this.getAttribute('datetime')
 || Date.now());
 this.innerHTML = new Intl.DateTimeFormat('default', {
 year: this.getAttribute('year') || undefined,
 month: this.getAttribute('month') || undefined,
 day: this.getAttribute('day') || undefined,
 hour: this.getAttribute('hour') || undefined,
 minute: this.getAttribute('minute') || undefined,
 second: this.getAttribute('second') || undefined,
 timeZoneName: this.getAttribute('time-zone-name')
 || undefined,
 }).format(date);
  }

  disconnectedCallback(){

  }

  static get observedAttributes(){
    return [

    ]
  }

  attributeChangedCallback(name, oldValue, newValue){

  }

  adoptedCallback(){

  }
}

customElements.define('my-element', MyElement);



(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Potencia en tiempo Real',
            data: data.map(row => row.count),
            // yAxisID: 'yAxis',
            
          }
        ]
      },
      options:{
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Potencia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
      }
      


    }
  );
})();

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions2'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Potencia en tiempo Real',
            data: data.map(row => row.count),
            // yAxisID: 'yAxis',
            
          }
        ]
      },
      options:{
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Potencia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
      }
      


    }
  );
})();

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions3'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Potencia en tiempo Real',
            data: data.map(row => row.count),
            // yAxisID: 'yAxis',
            
          }
        ]
      },
      options:{
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Potencia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
      }
      


    }
  );
})();

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions4'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Potencia en tiempo Real',
            data: data.map(row => row.count),
            // yAxisID: 'yAxis',
            
          }
        ]
      },
      options:{
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Potencia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
      }
      


    }
  );
})();

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions5'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Potencia en tiempo Real',
            data: data.map(row => row.count),
            // yAxisID: 'yAxis',
            
          }
        ]
      },
      options:{
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Potencia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
      }
      


    }
  );
})();

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions6'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Potencia en tiempo Real',
            data: data.map(row => row.count),
            // yAxisID: 'yAxis',
            
          }
        ]
      },
      options:{
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Potencia'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tiempo'
                }
            }
        }
      }
      


    }
  );
})();



const telemetryItem = document.querySelectorAll('.telemetry-item')
const divCard= document.querySelector('.div-card')

telemetryItem.forEach((item, index)=>{
  item.addEventListener('click',()=>{
    divCard.classList.remove('hidden')
  })
})


divCard.addEventListener(('click'),()=>{
   divCard.classList.add('hidden')
})