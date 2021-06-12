import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobAdService from "../services/jobAdService"

export default function JobAds() {
    const [jobAds, setJobAds] = useState([]);

    useEffect(() => {
      let jobAdService = new JobAdService();
      jobAdService
        .getJobAds()
        .then((result) => setJobAds(result.data.data));
    });
    

    return (
    <div>
      JobAds
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Poziston adi</Table.HeaderCell>
            <Table.HeaderCell>firma adi</Table.HeaderCell>
            <Table.HeaderCell>aciklamasi</Table.HeaderCell>
            <Table.HeaderCell>sehri</Table.HeaderCell>
            <Table.HeaderCell>min maas</Table.HeaderCell>
            <Table.HeaderCell>max maas</Table.HeaderCell>
            <Table.HeaderCell>Acik pozisyon sayisi</Table.HeaderCell>
            <Table.HeaderCell>ilan yayinlanma tarihi</Table.HeaderCell>
            <Table.HeaderCell>ilan sonlanma tarihi</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAds.map((jobAd) => (
            <Table.Row key={jobAd.id}>
              <Table.Cell>{jobAd.jobPosition.positionName}</Table.Cell>
              <Table.Cell>{jobAd.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAd.description}</Table.Cell>
              <Table.Cell>{jobAd.city}</Table.Cell>
              <Table.Cell>{jobAd.minSalary}</Table.Cell>
              <Table.Cell>{jobAd.maxSalary}</Table.Cell>
              <Table.Cell>{jobAd.startingDate}</Table.Cell>
              <Table.Cell>{jobAd.endingDate}</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
