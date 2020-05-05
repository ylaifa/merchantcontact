import React from "react";
import faker from "faker";
import Client from "./Client";

class Clients extends React.Component {
  render() {
    let clientList = [];
    let i = 0;

    for (i; i < 12; i++) {
      let client = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        picture: faker.image.avatar(),
        job: faker.name.jobTitle()
      };
      clientList.push(client);
    }

    let clients = clientList.map(client => (
      <Client
        firstName={client.firstName}
        lastName={client.lastName}
        phone={client.phone}
        picture={client.picture}
        job={client.job}
      />
    ));

    return (
      <>
        <div className="container">
          <div className="row">{clients}</div>
        </div>
      </>
    );
  }
}

export default Clients;
