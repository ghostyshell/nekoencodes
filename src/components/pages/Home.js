import React from 'react';
import '../../App.css';
import DocumentTitle from 'react-document-title';

export default function Home() {
  return (
    <DocumentTitle title='Neko Encodes'>
        <div className='home'>
          <div className="home-logo"></div>
        </div>
    </DocumentTitle>
  );
}
