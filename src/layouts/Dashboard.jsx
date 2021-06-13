import React from "react"
import Employers from "../pages/Employers"
import Employees from "../pages/Employees"
import JobAds from "../pages/JobAds"
import JobPositions from "../pages/JobPositions"

export default function Dashboard() {
    return(
        <div>
            <Employees/>
            <Employers/>
            <JobAds/>
            <JobPositions/>
        </div>
    )
}