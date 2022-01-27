import React from 'react';
import '../css/App.css';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //  input: ""
  }

    this.buttonClick = this.buttonClick.bind(this);
  //  this.inputTyped = this.inputTyped.bind(this);

  }
  componentDidMount(){
    console.log('componentDidMount')
      window.ctx = document.getElementById('myChart').getContext('2d');
      window.Chart = Chart;
      //console.log('ready::::',Chart);
      window.init();
  }
  render() {
    return (
            <div>
              <div><span className="dcHead">Death Count - England and Wales (year-on-year)</span>&nbsp;<a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/deaths/datasets/monthlyfiguresondeathsregisteredbyareaofusualresidence" target="_blank">Data from Office of National Statistics</a></div>
                <div className="dcHead">note:these figures are the amount of people recorded as having died in each month regardless of cause.</div>
                <div className="hasPopover">
                  <canvas id='canvas' width='5' height='5'></canvas>
                  <div className='popover'></div>
                </div>
                <div className='chart-container'>
                <canvas id='myChart' onClick={this.buttonClick} ></canvas>
                <div className='tabular'></div>
              </div>
            </div>
    )
  };

  buttonClick() {

    var el = document.querySelector('.popover');
      //  console.log(el.style.display,'<<clicking call');
    if (el.style.display ==='block'){
      //el.style.display ='none';
      //transition: margin-right 2s ease-in-out .5s;
      //el.style.transition = 'display 2s none .5s';
      window.fadeOut(el);
    };
  };

};
