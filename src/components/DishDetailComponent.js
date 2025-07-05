import {
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle
} from 'reactstrap';
import {Component} from "react";

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.dish,
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

                    </div>

                </div>
            </div>

        )
    }
}

export default DishDetail;
