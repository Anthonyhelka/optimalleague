import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{paddingTop: '10px'}}>
        <Message warning icon='wrench' header='This Page (About Us) is Still Under Development' content='Please head over to Standings or Stats to see our currently available content! We are sorry for the inconvenience.' />
      </div>
    )
  }
}

export default AboutContainer;
