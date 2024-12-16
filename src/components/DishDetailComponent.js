import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import {Component} from "react";

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.dish,
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.dish !== this.props.dish) {
            this.setState({dish: this.props.dish});

        }
    }
    renderDish(dish) {
            if(dish != null) {
                return (
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                )
            }else {
                return (<div></div>)
            }

    }

    render() {
        return (
            <div>
                {this.renderDish(this.state.dish)}
            </div>
        );
    }
}

export default DishDetail;
