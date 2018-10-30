import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {
  render() {
    const { onRemove, onUpdate } = this.props
    const list = this.props.infos.map(
      info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} onUpdate={onUpdate} />)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
