import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }

  postEmployer(companyName, webAdress, phoneNumber) {
    axios.post("http://localhost:8080/api/employers/add", {
      companyName: companyName,
      webAdress: webAdress,
      phoneNumber: phoneNumber,
    });
  }
}

