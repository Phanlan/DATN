import axios from "axios";
const VEHICLE_API_URL = "http://localhost:8080/public-api/v1.0.0/vehicle"

class VehicleService{
    getAllVehicle(){
        return axios.get(VEHICLE_API_URL + '/list');
    }
    createVehicle(vehicle){
        return axios.post(VEHICLE_API_URL + '/create', vehicle)
    }

    getAllVehicleType(){
        return axios.get(VEHICLE_API_URL + '/list-vehicleType');
    }

    updateVehicle(id, vehicle){
        return axios.put(VEHICLE_API_URL + '/update/'+ id, vehicle);
    }

}

export default new VehicleService();