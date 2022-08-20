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

const ActiveCustomerGraph = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;

    const {
    } = props ;
    
    const chartCtrl = React.useRef() ;

    const [ setChartCtrl, {width, height} ] = useMeasure();

    const series = [
        {
            name: 'Monthly',
            type: 'line',
            data: [480, 420, 600, 470, 630, 500, 450, 680, 470, 520, 430]
        },
        {
            name: 'Weekly',
            type: 'line',
            data: [300, 250, 280, 320, 380, 310, 270, 330, 320, 330, 330]
        },
        {
            name: 'Daily',
            type: 'line',
            data: [80, 30, 180, 120, 90, 210, 50, 100, 200, 170, 160]
        }
    ] ;

    const  options =  {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar : false
        },
        colors : ['#2A85FF', '#B5E4CA', '#B1E5FC'],
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
        labels: ['Sep 12', '', '', 'Sep 19', '', '', '', 'Sep 26', '', '', 'Oct 3'],

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
ActiveCustomerGraph.propTypes = {
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveCustomerGraph) ;