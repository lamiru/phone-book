import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {
  render() {
    const list = this.props.infos.map(
      info => (<PhoneInfo key={info.id} info={info} />)
    )
    return (
      <div>
        {list}
      </div>
    )
  }
}
