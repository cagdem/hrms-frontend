import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService"

export default function JobPositions() {
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
      let jobPositionService = new JobPositionService();
      jobPositionService
        .getJobPositions()
        .then((result) => setJobPositions(result.data.data));
    });
    

    
    return(
        <div>
            JobPositions
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPosition) => (
            <Table.Row key={jobPosition.id}>
              <Table.Cell>{jobPosition.positionName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}