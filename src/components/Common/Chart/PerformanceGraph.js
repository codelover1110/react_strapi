import * as React from 'react' ;

import { useMeasure } from 'react-use' ;
import { connect } from 'react-redux';
import ReactApexChart from 'react-apexcharts' ;

import {
    Box
} from '@mui/material' ;

import { useStyles } from './StylesDiv/PerformanceGraph.styles';
import { useTheme } from '@mui/styles';

const PerformanceGraph = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;
    
    const chartCtrl = React.useRef() ;

    const [ setChartCtrl, {width, height} ] = useMeasure();

    const series = [
        {
            name: 'Pay-Per-View',
            type: 'line',
            data: [120, 230, 350, 460, 570, 620, 600, 650, 820, 770, 650, 570]
        },
    ] ;

    const  options =  {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar : false
        },
        colors : ['#2A85FF', '#2A85FF', '#2A85FF'],
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
            borderColor: '#EFEFEF',
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

        labels: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],

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
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.titleDiv}>Performance</Box>
            <Box className={classes.chartDiv} ref={chartCtrl}>
                <ReactApexChart options={options} series={series} type="bar" height={350} width={width - 20}/>
            </Box>
        </Box>
    )
}
PerformanceGraph.propTypes = {
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(PerformanceGraph) ;