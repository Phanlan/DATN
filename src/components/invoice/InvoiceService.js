import axios from "axios";
const INVOICE_API_URL = "http://localhost:8080/public-api/v1.0.0/invoice"

class InvoiceService{
    getAllInvoice(){
        return axios.get(INVOICE_API_URL + '/list');
    }
    createInvoice(invoice){
        return axios.post(INVOICE_API_URL + '/create', invoice)
    }

    // deleteInfrastructure(id){
    //     return axios.delete(INFRASTRUCTURE_API_URL + '/delete/'+ id);
    // }

}

export default new InvoiceService();