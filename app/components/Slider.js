import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  static propTypes () {
    min: PropTypes.number;
    max: PropTypes.number;
    step: PropTypes.number;
    value: PropTypes.number;
    orientation: PropTypes.string;
    tooltip: PropTypes.bool;
    reverse: PropTypes.bool;
    labels: PropTypes.object;
    handleLabel: PropTypes.string;
    format: PropTypes.func;
    onChangeStart: PropTypes.func;
    onChange: PropTypes.func;
    onChangeComplete: PropTypes.func;
  };

  static defaultProps() {
    min: 1;
    max: 3;
    step: 1;
    value: 0;
    orientation: 'horizontal';
    tooltip: true;
    reverse: false;
    labels: {};
    handleLabel: '';
  };
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 1
    }
  }

  handleChangeStart() {
    console.log('Change event started')
  };

  handleChange(value)  {
    this.setState({
      value: value
    })
  };

  handleChangeComplete() {
    console.log('Change event completed')
  };

  render () {
    const { value } = this.state
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={3}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>
      </div>
    )
  }
}

export default Horizontal