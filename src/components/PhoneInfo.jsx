import React, { Component } from 'react'

export default class PhoneInfo extends Component {
  state = {
    editing: false,
    id: this.props.info.id,
    name: this.props.info.name,
    phone: this.props.info.phone
  }
  handleRemove = () => {
    this.props.onRemove(this.props.info.id)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleUpdate = () => {
    if (this.state.editing) {
      this.props.onUpdate(this.state)
    }
    this.setState({
      editing: !this.state.editing
    })
  }
  render() {
    const { name, phone } = this.state
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    if (this.state.editing) {
      return (
        <div style={style}>
          <div><input className="form-control input-sm" onChange={this.handleChange} value={name} name="name" /></div>
          <div><input className="form-control input-sm" onChange={this.handleChange} value={phone} name="phone" /></div>
          <div className="float-right">
            <button onClick={this.handleUpdate} className="btn btn-sm btn-info">Save</button>
            <button onClick={this.handleRemove} className="btn btn-sm btn-danger">Delete</button>
          </div>
          <div className="clearfix"></div>
        </div>
      )
    } else {
      return (
        <div style={style}>
          <div><b>{name}</b></div>
          <div>{phone}</div>
          <div className="float-right">
            <button onClick={this.handleUpdate} className="btn btn-sm btn-info">Edit</button>
            <button onClick={this.handleRemove} className="btn btn-sm btn-danger">Delete</button>
          </div>
          <div className="clearfix"></div>
        </div>
      )
    }
  }
}
