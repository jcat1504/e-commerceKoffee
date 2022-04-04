import React from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import CustomButton from '../custom-button/custom-button.component';
import { ButtonsBarContainer } from "./contact-form.styles";

const ContactForm = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="10">
      <form>
        <p className="h4 text-center mb-4">Write to us</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Subject
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="6" />
        <div className="text-center mt-4">
                <ButtonsBarContainer>
                    <CustomButton type='submit'> Submit </CustomButton>
                    {/* <CustomButton
                    type='button'
                    onClick={googleSignInStart}
                    isGoogleSignIn
                    > */}
                    {/* </CustomButton> */}
                </ButtonsBarContainer>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
      );
    };

    export default ContactForm;