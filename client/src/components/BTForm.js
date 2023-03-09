import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcons,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
}
from 'mdb-react-ui-kit';
function Blood_Test_form() {
  return (
    <>
    {/*---------------------------- Form starts ---------------------------- */}
    
    <MDBContainer fluid className='h-custom'>
    
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCol col='12' className='m-5'>

        <MDBCard className='card-registration card-registration-2' style={{borderRadius: '15px'}}>

          <MDBCardBody className='p-0'>

            <MDBRow>
                {/* ---------------------------- Starting of Form 1 ---------------------------- */}
              <MDBCol md='6' className='p-5 bg-white'>
                <h1 className="fw-normal mb-3" style={{color: '#4835d4'}}>Medical Form 1</h1>
                {/* ---------------------------- Form 1 information ---------------------------- */}
                <p style={{textAlign:'justify'}}>Blood tests are medical laboratory tests that measure different components of blood to determine the overall health status of an individual. Blood tests are used to diagnose medical conditions, monitor the effectiveness of treatments, and identify potential health problems before they become serious. Some of the most common blood tests include a complete blood count (CBC), which measures the number and types of blood cells, a blood chemistry test that measures electrolytes, glucose, cholesterol, and other substances in the blood, and a blood clotting test that evaluates the ability of the blood to clot properly. Blood tests are generally safe and relatively painless, and they are an essential tool for healthcare professionals to make accurate diagnoses and provide effective treatments.</p>
                {/* ---------------------------- Date of Reports----------------------------  */}
              </MDBCol>

              {/* ---------------------------- Input Parameters ---------------------------- */}
              <MDBCol md='6' className='bg-indigo p-5'style={{borderRadius:"1.5rem",background: 'rgb(2,0,36)', background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}}>

              <h3 className="fw-normal mb-5 text-white" >Blood Test Results</h3>
              <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Patient UID' size='lg' id='form1' type='number'/>
                <MDBRow>
                  <MDBCol md='5'>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Mean Corpuscular Hemoglobin (MCH)' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='LDL Cholesterol' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='HDL Cholesterol (RBC)' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Cholesterol ' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Blood Sugar (Fasting)' size='lg' id='form1' type='number'/>
                  </MDBCol>

                  <MDBCol md='7'>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Hemoglobin (Hb)' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Red Blood Cells (RBC)' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='White Blood Cells (WBC) ' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Platelet Count' size='lg' id='form1' type='number'/>
                  <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Mean Corpuscular Volume (MCV)' size='lg' id='form1' type='number'/>
                  </MDBCol>

                  <MDBCol md="9">
                  <MDBInput wrapperClass='mb-5' labelClass='text-white' label='Date of Report' size='lg' id='form1' type='date'/>
                  </MDBCol>

                </MDBRow>
                
                <MDBBtn color='light' size='lg'>Submit</MDBBtn>

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

export default Blood_Test_form;
