import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Row, Label, Col, Button
} from 'reactstrap';
import {Component} from "react";
import {Control, Errors, LocalForm} from "react-redux-form";


const minLength = (len) => (val) => (val) && (val.length >= len);
const maxLength = (len) => (val) => (val) && (val.length <= len);

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.dish,
        }
    }

    static CommentForm = class extends Component {
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





componentDidUpdate(prevProps) {
        if (prevProps.dish !== this.props.dish) {
            this.setState({dish: this.props.dish});
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>)
        } else {
            return (<div></div>)
        }
    }

    fetchComments(comments) {
        let commentList = [];

        comments.forEach(el => {
            commentList.push(
                <li>
                    {el.comment}<br/>
                    {"-- " + el.author + " " + el.date}
                    <br/>
                    <br/>
                </li>
            )
        })
        return commentList;
    }

    renderComments(comments) {

        if (comments != null) {
            return (this.fetchComments(comments))

        } else {
            return (<div></div>)
        }


    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.renderDish(this.state.dish)}
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {this.renderComments(this.state.dish.comments)}
                        </ul>
                        <DishDetail.CommentForm />

                    </div>

                </div>
            </div>

        )
    }
}

export default DishDetail;
