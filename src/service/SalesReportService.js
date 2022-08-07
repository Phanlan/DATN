import { Const, ServiceHandle } from '../utilities';

export class SalesReportService {

    olapChartTxtForWeek(params) {
        return ServiceHandle.get(Const.API.OlapChartTxtForWeek, {params: params}).then((res) => res.data);
    }

    olapChartColTopTorSalesExec(params) {
        return ServiceHandle.get(Const.API.OlapChartColTopTorSalesExec, {params: params}).then((res) => {
            return {
                labels: res.data.xAxis,
                datasets: [
                    {
                        data: res.data.yAxis,
                        backgroundColor: Const.COLOR[0],
                        barThickness: '30'
                    }
                ]
            }
        });
    }

    olapChartColTorProdStoreMini(params) {
        return ServiceHandle.get(Const.API.OlapChartColTorProdStoreMini, {params: params}).then((res) => {
            return {
                labels: res.data.xAxis,
                datasets: [
                    {
                        data: res.data.yAxis,
                        backgroundColor: Const.COLOR[0],
                        barThickness: '30'
                    }
                ]
            }
        });
    }

    olapChartColTopTorProductMini(params) {
        return ServiceHandle.get(Const.API.OlapChartColTopTorProductMini, {params: params}).then((res) => {
            return {
                labels: res.data.xAxis,
                datasets: [
                    {
                        data: res.data.yAxis,
                        backgroundColor: Const.COLOR[0],
                        barThickness: '30'
                    }
                ]
            }
        });
    }

    olapChartColTopQtyProductMini(params) {
        return ServiceHandle.get(Const.API.OlapChartColTopQtyProductMini, {params: params}).then((res) => {
            return {
                labels: res.data.xAxis,
                datasets: [
                    {
                        data: res.data.yAxis,
                        backgroundColor: Const.COLOR[0],
                        barThickness: '30'
                    }
                ]
            }
        });
    }

    olapChartPieSynTorSales(params) {
        return ServiceHandle.get(Const.API.OlapChartPieSynTorSales, {params: params}).then((res) => {
            let backgroundColor = [], hoverBackgroundColor = [];
            let count = 0;
            res.data.xAxis.forEach(() => {
                backgroundColor.push(Const.COLOR[count]);
                hoverBackgroundColor.push(Const.LIGHTCOLOR[count]);
                count++;
            });

            return {
                labels: res.data.xAxis,
                datasets: [
                    {
                        data: res.data.yAxis,
                        backgroundColor: backgroundColor,
                        hoverBackgroundColor: hoverBackgroundColor
                    }
                ]
            }
        });
    }

    olapChartLineSynQtyProduct(params) {
        return ServiceHandle.get(Const.API.OlapChartLineSynQtyProduct, {params: params}).then((res) => {
            let datasets = [];
            let count = 0;
            for (const [key, value] of Object.entries(res.data.yAxis)) {
                let temp = {
                    label: key,
                    data: value,
                    fill: false,
                    borderColor: Const.COLOR[count++],
                    tension: .4
                }
                datasets.push(temp);
            }

            return {
                labels: res.data.xAxis,
                datasets: datasets
            }
        });
    }

    olapChartLineSynTorSales(params) {
        return ServiceHandle.get(Const.API.OlapChartLineSynTorSales, {params: params}).then((res) => {
            let datasets = [];
            let count = 0;
            for (const [key, value] of Object.entries(res.data.yAxis)) {
                let temp = {
                    label: key,
                    data: value,
                    fill: false,
                    borderColor: Const.COLOR[count++],
                    tension: .4
                }
                datasets.push(temp);
            }

            return {
                labels: res.data.xAxis,
                datasets: datasets
            }
        });
    }

    olapChartLineSynQtyOrder(params) {
        return ServiceHandle.get(Const.API.OlapChartLineSynQtyOrder, {params: params}).then((res) => {
            let datasets = [];
            let count = 0;
            for (const [key, value] of Object.entries(res.data.yAxis)) {
                let temp = {
                    label: key,
                    data: value,
                    fill: false,
                    borderColor: Const.COLOR[count++],
                    tension: .4
                }
                datasets.push(temp);
            }

            return {
                labels: res.data.xAxis,
                datasets: datasets
            }
        });
    }

    olapChartTxtTorOrderStatus(params) {
        return ServiceHandle.get(Const.API.OlapChartTxtTorOrderStatus, {params: params}).then((res) => {
            let data = res.data.data;
            let values = [];
            for (const [key, value] of Object.entries(data)) {
                let temp = {
                    statusId: key,
                    orders: value
                }
                values.push(temp);
            }

            return values;
        });
    }
}