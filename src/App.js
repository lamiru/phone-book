import React, { Component } from 'react'
import PhoneForm from './components/PhoneForm'
import PhoneInfoList from './components/PhoneInfoList'

export default class App extends Component {
  id= 3
  state = {
    infos: [
      {
        id: 0,
        name: 'John',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'Alice',
        phone: '010-0000-0001'
      },
      {
        id: 2,
        name: 'Bob',
        phone: '010-0000-0002'
      }
    ]
  }
  handleCreate = (info) => {
    this.setState({
      infos: this.state.infos.concat({
        id: this.id++, ...info
      })
    })
  }
  handleRemove = (id) => {
    this.setState({
      infos: this.state.infos.filter(
        info => info.id !== id
      )
    })
  }
  handleUpdate = (new_info) => {
    this.setState({
      infos: this.state.infos.map(
        info => (new_info.id === info.id) ? new_info : info
      )
    })
  }
  render() {
    return (
      <div className="container">
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          infos={this.state.infos}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}
