import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFile,
} from "mdb-react-ui-kit";
function X_Ray_form() {
  return (
    <>
      {/*---------------------------- Form starts ---------------------------- */}

      <MDBContainer fluid className="h-custom">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" className="m-5">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow>
                  {/* ---------------------------- Starting of Form 1 ---------------------------- */}
                  <MDBCol md="6" className="p-5 bg-white">
                    <h1 className="fw-normal mb-3" style={{ color: "#4835d4" }}>
                      Medical Form 2
                    </h1>
                    {/* ---------------------------- Form 1 information ---------------------------- */}
                    <p style={{ textAlign: "justify" }}>
                      X-ray images are a common medical imaging technique used
                      to visualize the internal structures of the body. X-rays
                      are a form of electromagnetic radiation that can penetrate
                      through soft tissues in the body, but are absorbed by
                      denser materials such as bone, creating a contrast in the
                      image. X-ray images can be used to diagnose a variety of
                      medical conditions, including bone fractures, dental
                      problems, and lung diseases such as pneumonia. The process
                      of obtaining an X-ray image is quick and painless. The
                      patient is positioned on a table or standing against a
                      flat surface and an X-ray machine is positioned on the
                      opposite side of the body part being imaged. The machine
                      emits a controlled amount of radiation, which passes
                      through the body and is detected by a sensor on the other
                      side. The image is then processed and displayed on a
                      screen or printed on film. While X-ray images are a
                      valuable tool in medical diagnosis, they do come with some
                      risks. Exposure to radiation can be harmful, especially
                      with repeated exposure over time. To minimize these risks,
                      doctors will only order X-rays when necessary and will use
                      the lowest possible dose of radiation to obtain the needed
                      image.
                    </p>
                    {/* ---------------------------- Date of Reports----------------------------  */}
                  </MDBCol>

                  {/* ---------------------------- Input Parameters ---------------------------- */}
                  <MDBCol
                    md="6"
                    className="bg-indigo p-5"
                    style={{
                      borderRadius: "1.5rem",
                      background: "rgb(2,0,36)",
                      background:
                        "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                    }}
                  >
                    <h3 className="fw-normal mb-5 text-white">X-Ray Results</h3>
                    <MDBInput
                      wrapperClass="mb-4"
                      labelClass="text-white"
                      label="Patient UID"
                      size="lg"
                      id="form2"
                      type="number"
                    />

                    <MDBRow className="mb-5">
                      <MDBFile
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="X-Ray Images"
                        size="lg"
                        id="form2"
                        type="file"
                        accept=".jpg,.png"
                      />
                    </MDBRow>
                    <MDBRow className="mb-5">
                      <MDBFile
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="X-Ray Screenshot"
                        size="lg"
                        id="form2"
                        type="file"
                        accept=".jpg,.png"
                      />
                    </MDBRow>
                    <MDBRow className="mb-5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Experts Comments"
                        size="lg"
                        id="form2"
                        type="text"
                      />
                    </MDBRow>
                    <MDBRow className="mb-5">
                      <MDBInput
                        wrapperClass="mb-5"
                        labelClass="text"
                        label="Date of Report"
                        size="lg"
                        id="form2"
                        type="date"
                      />
                    </MDBRow>

                    <MDBBtn color="light" size="lg">
                      Submit
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default X_Ray_form;
