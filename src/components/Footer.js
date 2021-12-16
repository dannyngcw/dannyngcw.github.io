import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return(
    <div>
      <div className="footercontainer">
        <div className="contain">
          <div className="row">
            <div className="col">
              <p>&copy; 2021 by Danny Ng</p>
            </div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
              <div className="row">
                <div className="col">
                  <p className="text-center"><b>Email</b><br></br><a href="mailto:dngcw@hotmail.com">dngcw@hotmail.com</a></p>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer