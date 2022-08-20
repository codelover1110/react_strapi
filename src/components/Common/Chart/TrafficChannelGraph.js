import * as React from 'react' ;

import { useMeasure } from 'react-use' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
// import { EarningBalanceList } from '../../../redux/actions/dashboard';

import ReactApexChart from 'react-apexcharts' ;

import {
    Box
} from '@mui/material' ;

import { useStyles } from './StylesDiv/EarningGraph.styles';
import { useTheme } from '@mui/styles';

const TrafficChannelGraph = (props) => {
    const classes = useStyles() ;
    const theme = useTheme() ;

    const chartCtrl = React.useRef() ;

    const [ setChartCtrl, {width, height} ] = useMeasure();

    const {
        // EarningBalanceList
    } = props ;
    
    // const series = [{
    //     name: 'Inflation',
    //     data: [27, 22, 31, 19, 28, 16, 24]
    // }] ;
    const series = [
        {
            name: 'PRODUCT A',
            data: [46, 30, 15, 28, 40, 30, 36],
        },
        {
            name: 'PRODUCT B',
            data: [1, 9, 1, 1, 1, 6, 1],
        },
        {
            name: 'PRODUCT C',
            data: [2, 1, 2, 1, 11, 1, 1],
        },
        {
            name: 'PRODUCT D',
            data: [1, 1, 8, 1, 1, 1, 1],
        },
        {
            name: 'PRODUCT E',
            data: [2, 2, 2, 8, 1, 1, 1],
        }
    ]

    // const colors = [ '#B5E4CA', '#FFBC99', '#2A85FF', '#B5E4CA', '#B5E4CA', '#FFBC99', '#B5E4CA']

    const options = {
        chart: {
            height: '350px',
            type: 'bar',
            stacked : true,
            stackType: '100%',
            toolbar: {
                show: false,
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
                }
            }
        }],
        grid: {
            show: true,
            // borderColor: theme.palette.green,
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
        plotOptions: {
            bar: {
                borderRadius: 5,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
                // distributed: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return  "";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                // colors: [theme.palette.green.G200]
            }
        },
        fill: {
          opacity: 1,
          colors: ['#2A85FF', '#CABDFF', '#B1E5FC', '#FFBC99', '#FFD88D']
        },
        // fill: {
        //     type: 'gradient',
        //     gradient: {
        //     type: "vertical",
        //         gradientToColors: ['#a32cb9','#2c37b9'],
        //         stops: [0, 100]
        //     }
        // },
        xaxis: {
            categories: [22, 23, 24, 25, 26, 27, 28],
            position: 'bottom',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            tooltip: {
                enabled: false,
            },
            labels: {
                show: true,
                rotate: -45,
                rotateAlways: false,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: false,
                minHeight: undefined,
                maxHeight: 120,
                style: {
                    // colors: [theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200],
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
                offsetX: 0,
                offsetY: 0,
                format: undefined,
                formatter: undefined,
                datetimeUTC: true,
                datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yy",
                    day: 'dd MMM',
                    hour: 'HH:mm',
                },
            },
        },
        yaxis: {
            min: 0,
            max: 200,
            categories: [5, 10, 15, 20, 25, 30],
            position : 'bottom',
            // axisBorder: {
            //     show: false
            // },
            // axisTicks: {
            //     show: false,
            // },
            // labels: {
            //     show: true,
            //     hideOverlappingLabels: true,
            //     showDuplicates: false,
            //     trim: false,
            //     minHeight: undefined,
            //     maxHeight: 120,
            //     style: {
            //         // colors: [theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200, theme.palette.green.G200],
            //         fontSize: '12px',
            //         fontFamily: 'Helvetica, Arial, sans-serif',
            //         fontWeight: 400,
            //         cssClass: 'apexcharts-xaxis-label',
            //     },
            //     offsetX: 0,
            //     offsetY: 0,
            // },
        },
        tooltip : {
            show: true,
            enabled : true,
        },
        
    } ;

    React.useEffect(() => {
        // EarningBalanceList() ;
    }, []) ;

    React.useEffect(() => {
        setChartCtrl(chartCtrl.current);
        // console.log(width, height);
    }, []);

    return (
        <Box className={classes.root}>
            <Box className={classes.chartDiv} ref={chartCtrl}>
                <ReactApexChart options={options} series={series} type="bar" height={350} width={width - 20}/>
            </Box>
        </Box>
    )
}
TrafficChannelGraph.propTypes = {
    // EarningBalanceList : PropTypes.func.isRequired
}
const mapStateToProps = state => ({

})
const mapDispatchToProps = {
    // EarningBalanceList
}
export default connect(mapStateToProps, mapDispatchToProps)(TrafficChannelGraph) ;