import {Component, useState} from "react";
import {Button, Col, Label, Row} from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form';

const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => (val) && (val.length <= len);

class CommentForm extends Component {
    state = {
        isModalVisible: false
    }

    toggleModal() {
        this.setState({isModalVisible: true});

    }

    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(values));
        this.setState({isModalVisible: false});

    }

    render() {
    return (
        <div>


                <button onClick={()=>this.toggleModal()}>Add Review</button>

                {this.state.isModalVisible  &&



                    <div style={{ flex: "auto", margin: "auto", top: "100px", position: "fixed", border: "1px solid blue", width: "700px", height: "800px", backgroundColor: "white", color: "blue", padding: '10px' }}>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>


                            <Col md={10}>
                                <Control.select model=".rating" id="rating" name="rating"
                                              placeholder="Rating"
                                              className="form-control"
                                >

                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>



                            </Col>
                        </Row>



                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text validators={{minLength: minLength(2),
                                                            maxLength: maxLength(15)}}
                                                model=".author" id="firstname" name="firstname"
                                              placeholder="First Name"
                                              className="form-control"
                                />
                                <Errors className={"text-danger"}
                                        model={".author"}
                                        show={"touched"}
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'

                                        }}
                                    ></Errors>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea model=".comment" id="message" name="message"
                                                  rows="12"
                                                  className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    </div>


                }

        </div>
        )
        }
}

export default CommentForm;