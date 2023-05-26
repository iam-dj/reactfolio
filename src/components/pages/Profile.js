import React from "react";
import '../../components/index.css';

export default function Profile() {
  return (
    <div>
            <div className="row">
        <div className="col-12">
        <section class="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img
                        src="../IMG_3270.png"
                        // style={width=100px}
                        alt="Generic placeholder"
                        className="img-fluid imgSize"
                        // style="width: 180px; border-radius: 10px;"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Dexter Jules</h5>
                      <p className="mb-2 pb-1" >
                        Full Stack Developer
                      </p>
                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        // style="background-color: #efefef;"
                      >
                      
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  );
}
