import * as React from 'react' ;

import { useMeasure } from 'react-use' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import ReactApexChart from 'react-apexcharts' ;

import {
    Box, colors
} from '@mui/material' ;

import { useStyles } from './StylesDiv/StatisticsGraph.styles';
import { useTheme } from '@mui/styles';

const CustomersGraph = (props) => {
    const theme = useTheme() ;
    const classes = useStyles() ;
   

    const {
    } = props ;
    
    const chartCtrl = React.useRef() ;

    const [ setChartCtrl, {width, height} ] = useMeasure();

    const series = [
        {
            name: 'Subscriptions',
            type: 'line',
            data: [1000, 650, 1485, 990, 1900, 1200, 1600, 1050, 1170, 1200, 1900, 700]
        },
    ] ;

    const  options =  {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar : false
        },
        colors : ['#2A99FF'],
        stroke: {
            width: [5],
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
        labels: ['Apr', '', 'May', '', 'Jun', '', 'Jul', '', 'Aug', '', '', 'Sep'],

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
            },
            style: {
                fontSize: '20px',
                colors: ['red'],
                background : 'red'
            },
        }
    } ;
    
    React.useEffect(() => {
    }, []) ;

    React.useEffect(() => {
        setChartCtrl(chartCtrl.current);
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
CustomersGraph.propTypes = {
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomersGraph) ;