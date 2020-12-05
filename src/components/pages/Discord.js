import React from 'react';
import DocumentTitle from 'react-document-title';
import Iframe from 'react-iframe';

import './Discord.css';

export default function Discord() {
  return (
    <DocumentTitle title="Discord">
      <div className="discord">
        {/* <h1>Discord</h1> */}
        <Iframe
          src="https://discord.com/widget?id=207923824983932931&theme=dark"
          title="discord"
          height="75%"
          allowtransparency="true"
          frameBorder="0"
          className="discord-widget"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      </div>
    </DocumentTitle>
  );
}
