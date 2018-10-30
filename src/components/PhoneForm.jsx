import React, { Component } from 'react'

export default class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onCreate(this.state)
    this.setState({
      name: '',
      phone: ''
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <table className="table">
            <col width="*" />
            <col width="*" />
            <col width="10%" />
            <tbody>
              <tr>
                <td>
                  <input
                    className="form-control"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                  />
                </td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                  />
                </td>
                <td>
                  <button className="btn btn-primary">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    )
  }
}
