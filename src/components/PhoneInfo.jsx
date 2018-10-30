import React, { Component } from 'react'

export default class PhoneInfo extends Component {
  handleRemove = () => {
    this.props.onRemove(this.props.info.id)
  }
  render() {
    const { name, phone } = this.props.info
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <div className="float-right">
          <button onClick={this.handleRemove} className="btn btn-sm btn-danger">Delete</button>
        </div>
        <div className="clearfix"></div>
      </div>
    )
  }
}
