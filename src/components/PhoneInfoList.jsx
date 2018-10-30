import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {
  render() {
    const { onRemove } = this.props
    const list = this.props.infos.map(
      info => (<PhoneInfo key={info.id} info={info} onRemove={onRemove} />)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
