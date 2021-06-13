import axios from "axios";


export default class EmployeeService {
  getEmployees() {
    return axios.get("http://localhost:8080/api/employees/getall");
  }
  postEmployee(firstName, lastName, natId, birthDate, email, password) {

      axios.post("http://localhost:8080/api/employees/add", {
        firstName: firstName,
        lastName: lastName,
        natId: natId,
        birthDate: birthDate,
        email: email,
        password: password
      })
    }
  }



