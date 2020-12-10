import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import './Encodes.css';
import encodes from '../../encodes';
import LazyLoad from 'react-lazyload';
import StackGrid from "react-stack-grid";
import { withRouter } from 'react-router';


import axios from 'axios';

import {
  Dimmer,
  Segment,
  Header,
  Icon,
  Card,
  Image,
  Loader,
} from 'semantic-ui-react';


function Downloads({ dataLoaded, setDataLoaded }) {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(!dataLoaded);

  let fetchDriveDeets;

  const trimTitles = (title) =>
    title
      .replace(/\[.*?\]\s?/g, '')
      .replace('.zip', '')
      .trim();

  useEffect(() => {
    
    setActive(!dataLoaded);
    fetchDriveDeets();

  }, [dataLoaded, fetchDriveDeets]);

  const drive = axios.create({
    baseURL:
      'https://doesthiswork.net/api/v1/neko-aws/encoded-files',
  });

  fetchDriveDeets = async () => {
    const response = await drive.get();

    setData(response.data.files);
    setDataLoaded(true);
  };

  return (
    <DocumentTitle title="Encodes">
      <div className="downloads-container">
        {/* <h1 className="downloads-header">Encodes</h1> */}
        <Dimmer.Dimmable className="dimmer1" as={Segment} dimmed={active}>
          <Dimmer active={active}>
            <Loader />
            <Header
              as="h2"
              style={{ color: '#fff', paddingTop: '3rem', fontSize: 'large' }}
            >
              {/* <Icon name="heart" /> */}
              Loading
            </Header>
          </Dimmer>
          <StackGrid columnWidth={200}>
          {data
            ? data.map((file) => (
              <LazyLoad key={file.id} height={200} offset={100} style={{margin: '1%',height: 'auto'}} once>
                <Card >
                  <Image
                    src={
                      encodes.has(trimTitles(file.name))
                        ? encodes.get(trimTitles(file.name)).image
                        : 'https://i1.wp.com/sojapan.jp/wp-content/uploads/2017/10/DLBXWaRVYAAPErj.jpg'
                    }
                    wrapped
                    ui={false}
                    className='encode-img'
                  />

                  <Card.Content className='encode-content'>
                    <Card.Header>{trimTitles(file.name)}</Card.Header>
                    <Card.Meta>
                      {encodes.has(trimTitles(file.name))
                        ? encodes.get(trimTitles(file.name)).year
                        : 'XXXX'}
                    </Card.Meta>
                    <Card.Description
                      className='encode-desc'>
                      {encodes.has(trimTitles(file.name))
                        ? encodes.get(trimTitles(file.name)).description
                        : 'Daniel is a comedian living in Nashville.'}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra className="dl-links-container">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        encodes.has(trimTitles(file.name))
                          ? encodes.get(trimTitles(file.name)).mal
                          : ''
                      }
                    >
                      <Icon name="info circle" />
                      MAL
                    </a>
                    <span>&nbsp; &nbsp; &nbsp;</span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        encodes.has(trimTitles(file.name))
                          ? encodes.get(trimTitles(file.name)).imdb
                          : ''
                      }
                    >
                      <Icon name="imdb" />
                      IMDB
                    </a>
                  </Card.Content>
                  <Card.Content extra className="dl-links-container">
                    <a
                      className="dl-link-nyaa"
                      style={{borderWidth: "5px solid red"}}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        encodes.has(trimTitles(file.name))
                          ? encodes.get(trimTitles(file.name)).nyaa
                          : ''
                      }
                    >
                      <Icon name="magnet" />
                      Nyaa
                    </a>
                    <a
                      className="dl-link-ddl"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={file.webViewLink}
                    >
                      <Icon name="download" />
                      DDL
                    </a>
                  </Card.Content>
                  
                </Card>
                </LazyLoad>
              ))
            : ''}
            </StackGrid>
        </Dimmer.Dimmable>
      </div>
    </DocumentTitle>
  );
}

export default withRouter(Downloads);
