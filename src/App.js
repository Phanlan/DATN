
import React, { useRef } from "react";
import Menu from "./components/home/menu/Menu";
import Header from "./components/home/header/Header";
import RouterSystem from "./routes/routes";
import { Toast } from 'primereact/toast';
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";


export const ToastContext = React.createContext();

const App =() => {
    const toast = useRef();
    
    return (
        <ToastContext.Provider value={toast}>
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-2">
                        <Menu/>
                    </div>
                    <Toast ref={toast} />
                    <div className="col-lg-10 mt-5">
                        <RouterSystem/>
                    </div>
                </div>
            </div>
        </ToastContext.Provider>
    );
}

export default App;

