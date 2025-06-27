import React from 'react'

class Person extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.name}</span><br />
        <span>{this.props.surname}</span><br />
        <span>{this.props.age}</span>
      </div>
    );
  }
}

export default Person