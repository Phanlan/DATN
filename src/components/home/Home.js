import React, { Component } from 'react';
import '../../style.css'
import { CompanyTable } from '../company-table/CompanyTable';
import { HomeItem } from './HomeItem';
import '../../App.css'

export const Home =() => {
    const companies = [
        { name: "View Detail", code: 'companies' },
    ];
    const buildingEmployee = [
        { name: "View Detail", code: 'buildingEmployee' },
    ];
    const salary = [
        { name: "View Detail", code: 'salary' },
    ];
    const buildingService = [
        { name: "View Detail", code: 'buildingService' },
    ];
        return (
            <div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Manager Home View</h1>
                            <br/>
                            <br/>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                    <HomeItem options = {buildingEmployee} header ="Building Employee Table" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <HomeItem options = {companies} header ="Building Company Table" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-success text-white mb-4">
                                        <HomeItem options = {salary} header ="Salary Table" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-danger text-white mb-4">
                                        <HomeItem options = {buildingService} header ="Building Service Table" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                </div>
            </div>
        );
    }


    // import React,{useEffect} from 'react';
    // import { useTranslation } from 'react-i18next';
    // import { HomeItem } from './HomeItem';

    // export const Home = (props) => {
    //     const [ t ] = useTranslation('common');

    //     useEffect(() => {
    //         document.title = t('homepage.accounting.Reporting') ;
    //         return () => {
    //             document.title = t('title.homepage');
    //         };
    //         }, []);// eslint-disable-line react-hooks/exhaustive-deps

    //     const costRevenue = [
    //         // { name: t('acc.reports.ProductStoreIncomeStatement'), code: 'ProductStoreIncomeStatement' },
    //         // { name: t('acc.reports.ExpenseStatement'), code: 'ExpenseStatement' }
    //     ];
    //     const accountLedger = [
    //         // { name: t('acc.reports.ViewLiabilityPref'), code: 'ViewLiabilityPref' },
    //         // { name: t('acc.reports.VoucherDeclaration'), code: 'VoucherDeclaration' },
    //         // { name: t('acc.reports.LiabilityBalance'), code: 'LiabilityBalance' },
    //         // { name: t('acc.reports.LiabilitySupplier'), code: 'LiabilitySupplier' },
    //         // { name: t('acc.reports.LiabilityReceivable'), code: 'LiabilityReceivable' },
    //         // { name: t('acc.reports.LiabilityReceivableTotal'), code: 'LiabilityReceivableTotal' },
    //         // { name: t('acc.reports.MoneyInBank'), code: 'MoneyInBank' },
    //         // { name: t('acc.reports.CashDetailBook'), code: 'cashDetailBook' },
    //         // { name: t('acc.reports.BankDetailBook'), code: 'bankDetailBook' },
    //         // { name: t('acc.reports.AnalysisReport'), code: 'analysisReport' },
    //         // { name: t('acc.reports.GeneralLedger'), code: 'GeneralLedger' },
    //         // { name: t('acc.reports.GeneralJournal'), code: 'GeneralJournal' },
    //         // { name: t('acc.reports.GlAccountTrialBalance'), code: 'GlAccountTrialBalance' },
    //         // { name: t('acc.reports.GlAccountTrialBalanceOnTime'), code: 'GlAccountTrialBalanceOnTime' }
    //     ];
    //     const inventory = [
    //         // { name: t('acc.reports.reportImpExpStockWarehouseAvgCost'), code: 'reportImpExpStockWarehouseAvgCost' },
    //         // { name: t('acc.reports.getReportImpExpStockWarehouse'), code: 'getReportImpExpStockWarehouse' },
    //         // { name: t('acc.reports.cogsAverageCost'), code: 'cogsAverageCost' },
    //         // { name: t('acc.reports.getReportImpExpStockWarehouseAcc'), code: 'getReportImpExpStockWarehouseAcc' },
    //         // { name: t('acc.reports.getReportStockWarehouseAcc'), code: 'getReportStockWarehouseAcc' },
    //         // { name: t('acc.reports.InventoryAverageCosts'), code: 'inventoryAverageCosts' }
    //     ];
    //     const financialReport =[
    //         // { name: t('acc.reports.financialStatementReport'), code: 'financialStatementReport' },
    //         // { name: t('acc.reports.businessResultsReport'), code: 'businessResultsReport' },
    //     ]
    //     return (
    //         <div id="layoutSidenav_content">
    //             <main>
    //                 <div className="container-fluid px-4">
    //                     <h1 className="mt-4">Manager Home View</h1>
    //                     <br/>
    //                     <br/>
    //                     <div className="row">
    //                         <div className='p-fluid'>
    //                             <div className="p-grid">
    //                                 <div className="p-col-12 p-md-4">
    //                                     <HomeItem options = {accountLedger} header ={t('acc.reports.accountLedger')} />
    //                                 </div>
    //                                 <div className="p-col-12 p-md-4">
    //                                     <HomeItem options = {inventory} header ={t('acc.reports.inventoryReports')} />
    //                                 </div>
    //                                 <div className="p-col-12 p-md-4">
    //                                     <HomeItem options = {costRevenue} header ={t('acc.reports.costRevenue')} />
    //                                 </div>
    //                                 <div className="p-col-12 p-md-4">
    //                                     <HomeItem options = {financialReport} header ={t('acc.reports.financialReport')} />
    //                                 </div>
    //                             </div>
                                
    //                         </div>
    //                     </div>
    //                 </div>
    //             </main>
    //         </div>
    //     )
    // }



