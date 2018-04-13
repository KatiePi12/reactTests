import React from 'react';
import analysis from './analysis.svg';

class ZoomButtons extends React.Component {
    render () {
        return (
            <div>
                <button className="btn btn-default" name="Zoom in" onClick = {this.props.onZoomInClick}>Zoom in
                    <img src={analysis} className="button-logo" alt="logo" />
                </button>
                <button className="btn btn-default" onClick = {this.props.onZoomOutClick}>Zoom out</button>
            </div>
        );
    }
}

export default ZoomButtons;