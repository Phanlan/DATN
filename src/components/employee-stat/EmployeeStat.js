import React, { useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../App';
import EmployeeStatService from './EmployeeStatService';

export const  EmployeeStat =() => {
    const toast = useContext(ToastContext);
    const [listStatitics, setListStatitics] = useState();
    const [month, setMonth] = useState(7);
    const [year, setYear] = useState(2022);
    const [check, setCheck] = useState(1);

     const getMonth = (event) => {
        const value = event.target.value;
        setMonth(value)
    } 

    const getYear = (event) => {
        const value = event.target.value;
        setYear(value)
    } 
    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const init =() => {
        EmployeeStatService.getAll(month, year).then((response) => {
            if(response.data.data[0] === null ) {
                toast.error('No statitic in this time !!');
                setCheck(0);
                console.log(response);
            }else{
                setListStatitics(response.data.data);
                setCheck(1);
            }
        });

    }
    return (
        <div>
            <div class="col-lg-12 ml-auto" id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-1">Bảng thống kê nhân viên</h1>
                        <br />
                        <div class="card mb-4">
                            <div class="card-body">
                                <div className="row">
                                    <div class="col-lg-2">
                                        <select className="form-select" aria-label="Default select example"
                                            onChange={(event) => getMonth(event)}>
                                            <option value="01">1</option>
                                            <option value="02">2</option>
                                            <option value="03">3</option>
                                            <option value="04">4</option>
                                            <option value="05">5</option>
                                            <option value="06">6</option>
                                            <option value="07" selected>7</option>
                                            <option value="08">8</option>
                                            <option value="09">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-2">
                                        <select className="form-select" aria-label="Default select example"
                                            onChange={(event) => getYear(event)}>
                                            <option value="2017">2017</option>
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022" selected >2022</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-2">
                                        <button type="button" class="btn btn-success" onClick={()=> init()}>Statitic</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Bảng lương
                            </div>
                            <div class="card-body">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Mã số</th>
                                            <th>Tên</th>
                                            <th>Cấp bậc</th>
                                            <th>Vị trí</th>
                                            <th>Lương</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            check !== 0 ?
                                            listStatitics?.map((statitic) => (
                                            <tr key={statitic.id} >
                                            <td> {statitic.code}</td>
                                            <td> {statitic.name}</td>
                                            <td> {statitic.salaryResponse.level}</td>
                                            <td> {statitic.salaryResponse.position}</td>
                                            <td> {statitic.salaryResponse.salary}</td>
                                            </tr>
                                            ))
                                                : ""
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
