import * as React from 'react' ;

import { useMeasure } from 'react-use' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import ReactApexChart from 'react-apexcharts' ;

import {
    Box
} from '@mui/material' ;

import { useStyles } from './StylesDiv/StatisticsGraph.styles';
import { useTheme } from '@mui/styles';

const StatisticsGraph = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;

    const {
    } = props ;
    
    const chartCtrl = React.useRef() ;

    const [ setChartCtrl, {width, height} ] = useMeasure();

    const series = [
        {
            name: 'Subscriptions',
            type: 'line',
            data: [600, 750, 420, 590, 830, 580, 700, 600, 450, 300, 500, 760]
        },
        {
            name: 'Pay-Per-View',
            type: 'line',
            data: [470, 350, 300, 480, 530, 400, 600, 650, 820, 570, 650, 870]
        },
        {
            name: 'Tips',
            type: 'line',
            data: [300, 250, 200, 370, 390, 270, 400, 430, 250, 340, 450, 350]
        }
    ] ;

    const  options =  {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar : false
        },
        colors : ['lightgreen', '#FF2A2A', '#2A99FF'],
        stroke: {
            width: [5, 5, 5],
            curve: 'smooth'
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        grid: {
            show: true,
            borderColor: theme.palette.success.main,
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.5
            },  
            column: {
                colors: undefined,
                opacity: 0.5
            },  
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
        fill: {
            opacity: [0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        // labels: ['01/01/2003', '01/02/2003', '01/03/2003', '01/04/2003', '01/05/2003', '01/06/2003', '01/07/2003',
        //   '01/08/2003', '01/09/2003', '01/10/2003', '01/11/2003'
        // ],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

        markers: {
            size: 0
        },
        xaxis: {
            // type: 'datetime'
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            // labels: {
            //     show: false,
            //     maxWidth: 50,
            //     formatter: function (val) {
            //         return "$" + val;
            //     }
            // },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            
                }
            }
        }
    } ;
    
    React.useEffect(() => {
    }, []) ;

    React.useEffect(() => {
        setChartCtrl(chartCtrl.current);
        // console.log(width, height);
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.titleDiv}>Statistic</Box>
            <Box className={classes.chartDiv} ref={chartCtrl}>
                <ReactApexChart options={options} series={series} type="bar" height={350} width={width - 20}/>
            </Box>
        </Box>
    )
}
StatisticsGraph.propTypes = {
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsGraph) ;