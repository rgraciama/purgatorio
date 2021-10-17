import React from 'react';
import UploadImage from '../components/UploadImage';
import { CircularProgress } from '@material-ui/core';

class TestimonyForm extends React.Component {
    state = {
        loading: false,
    };

    handleClick = e => {
        // debugger;
    };

    callbackFunction = (childData) => {
        this.props.onChange({target:{name: "imageUrl", value: childData}});
        this.setState({loading: false})
    }

    loadingStatus= (loadingStatus) => {
          this.setState({loading: true});
    }

    render() {

        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    { this.state.loading &&
                    <CircularProgress color="secondary" />
                    }
                    <UploadImage parentCallBack={this.callbackFunction} loadingStatus={this.loadingStatus}/>
                    {this.props.formValues.imageUrl !== "" &&
                    <>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                onChange={this.props.onChange}
                                className="form-control"
                                type="text"
                                name="name"
                                value={this.props.formValues.name}
                            />
                        </div>

                        <div className="form-group">
                            <label>Mensaje</label>
                            <input
                                onChange={this.props.onChange}
                                className="form-control"
                                type="text"
                                name="message"
                                value={this.props.formValues.message}
                            />
                        </div>

                        <div className="form-group" onChange={this.props.onChange}>
                            <label>Voto</label>
                            <label>
                                <input
                                    name="vote"
                                    type="radio"
                                    value="hell"
                                />
                                INFIERNO
                            </label>
                            <label>
                                <input
                                    name="vote"
                                    type="radio"
                                    value="heaven"
                                />
                                CIELO
                            </label>
                        </div>
                        {this.props.formValues.name !== "" && this.props.formValues.message !== "" && this.props.formValues.vote !== "" &&
                        <button onClick={this.handleClick} className="btn btn-primary">
                            Enviar
                        </button>
                        }
                    </>
                    }

                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        );
    }
}

export default TestimonyForm;
