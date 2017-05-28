import React from 'react';
import styled from 'styled-components';

class ClockTextCore extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.className}>276 | 19 | 15 | 19</div>
    )
  }
}

const ClockText = styled(ClockTextCore)`
  font-family: 'AvenirNextMedium', 'Helvetica', 'sans-serif';
  color: white;
`

export default ClockText;