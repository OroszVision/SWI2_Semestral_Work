import React from "react";
import './chat_styles.css';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBTypography,
    MDBTextArea,
    MDBCardHeader,
} from "mdb-react-ui-kit";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
    return (
        <MDBContainer fluid className="py-5 gradient-custom">
            <MDBRow>
                <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
                    <h5 className="font-weight-bold mb-3 text-center text-white">
                        Member
                    </h5>

                    <MDBCard className="mask-custom">
                        <MDBCardBody>
                            <MDBTypography listUnStyled className="mb-0">
                                <li
                                    className="p-2 border-bottom"
                                    style={{
                                        borderBottom: "1px solid rgba(255,255,255,.3) !important",
                                    }}
                                >
                                    <a
                                        href="#!"
                                        className="d-flex justify-content-between link-light"
                                    >
                                        <div className="d-flex flex-row">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                                alt="avatar"
                                                className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                                width="60"
                                            />
                                            <div className="pt-1">
                                                <p className="fw-bold mb-0">John Doe</p>
                                                <p className="small text-white">
                                                    Hello, Are you there?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <p className="small mb-1 text-white">Just now</p>
                                            <span className="badge bg-danger float-end">1</span>
                                        </div>
                                    </a>
                                </li>
                                {/* ... (similar conversion for other list items) ... */}
                            </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol md="6" lg="7" xl="8">
                    <MDBTypography listUnStyled className="text-white">
                        <li className="d-flex justify-content-between mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                alt="avatar"
                                className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                                width="60"
                            />
                            <MDBCard className="mask-custom">
                                <MDBCardHeader
                                    className="d-flex justify-content-between p-3"
                                    style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}
                                >
                                    <p className="fw-bold mb-0">Brad Pitt</p>
                                    <p className="text-light small mb-0">
                                        <MDBIcon far icon="clock" /> 12 mins ago
                                    </p>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </li>
                        {/* ... (similar conversion for other list items) ... */}
                        <li className="mb-3">
                            <MDBTextArea label="Message" id="textAreaExample" rows={4} />
                        </li>
                        <MDBBtn color="light" size="lg" rounded className="float-end">
                            Send
                        </MDBBtn>
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Chat;
