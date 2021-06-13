import axios from "axios";

export default class JobAdService{
    getJobAds(){
        return axios.get("http://localhost:8080/api/jobads/getall")
    }

    postJobAd(companyId, positionName, city, minSalary, maxSalary, quantity, startingDate, endingDate, description) {
        axios.post("http://localhost:8080/api/employers/add", {
            companyId: companyId,
            positionName: positionName,
            city: city,
            minSalary: minSalary,
            maxSalary: maxSalary,
            quantity: quantity,
            startingDate: startingDate,
            endingDate: endingDate,
            description: description
        });
      }
}