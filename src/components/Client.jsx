import React from "react";

class Client extends React.Component {
  render() {
    let { firstName, lastName, phone, picture, job } = this.props;
    let fullName = firstName.toLowerCase() + "." + lastName.toLowerCase();
    console.log(firstName, lastName);

    const styles = {
      width: "18rem"
    };

    return (
      <div className="card col-md-4 mb-5" style={styles}>
        <img src={`${picture}`} className="card-img-top" alt="client-avatar" />
        <div className="card-body">
          <h2 className="card-title">
            {firstName} {lastName}
          </h2>
          <p className="card-text">{job}</p>
          <div class="row">
            <div class="col-sm">
              <a
                href={`mailto:${fullName}@gmail.com`}
                className="btn btn-primary"
              >
                Ecrire
              </a>
            </div>
            <div class="col-sm"></div>
            <div class="col-sm">
              <a href={`callto:${phone}`} className="btn btn-primary">
                Appeler
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
