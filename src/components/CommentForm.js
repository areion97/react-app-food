import {Component, useState} from "react";
import {LocalForm} from 'react-redux-form'


class CommentForm extends Component {
    state = {
        isModalVisible: false
    }


    toggleModal() {
        this.setState({...this.state, isModalVisible: true});

    }

    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
    return (
        <div>
            <LocalForm onSubmit={(comment) => this.handleSubmit(comment)}>



                <button onClick={this.toggleModal()}>Add Review</button>
                {this.state.isModalVisible  &&

                    <div style={{ flex: "auto", margin: "auto", top: "100px", position: "fixed", border: "1px solid blue", width: "700px", height: "800px", backgroundColor: "white", color: "blue", padding: '10px' }}>
                        <p style={{fontSize: "20", color: "blue", backgroundColor: "aqua"}}>This is a Modal</p>


                        <button type={"submit"} onSubmit={this.submitComment()}>Submit Comment</button>


                    </div>
                }
            </LocalForm>
        </div>
        )
        }
}

export default CommentForm;