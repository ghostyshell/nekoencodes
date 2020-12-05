import React, { useState, useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import './Encodes.css';
import encodes from '../../encodes';

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

export default function Downloads({ dataLoaded, setDataLoaded }) {
  const [data, setData] = useState(null);
  const [active, setActive] = useState(!dataLoaded);

  // console.log(encodesMap);
  // console.log(encodes.get('K-On!').year);

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

  // useEffect(() => {
  //   if (data) {
  //     setActive();
  //     dataLoaded(true);
  //   }
  // });

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
          {data
            ? data.map((file) => (
                <Card key={file.id}>
                  <Image
                    src={
                      encodes.has(trimTitles(file.name))
                        ? encodes.get(trimTitles(file.name)).image
                        : 'https://i1.wp.com/sojapan.jp/wp-content/uploads/2017/10/DLBXWaRVYAAPErj.jpg'
                    }
                    wrapped
                    ui={false}
                  />

                  <Card.Content>
                    <Card.Header>{trimTitles(file.name)}</Card.Header>
                    <Card.Meta>
                      {encodes.has(trimTitles(file.name))
                        ? encodes.get(trimTitles(file.name)).year
                        : 'XXXX'}
                    </Card.Meta>
                    <Card.Description>
                      {encodes.has(trimTitles(file.name))
                        ? encodes.get(trimTitles(file.name)).description
                        : 'Daniel is a comedian living in Nashville.'}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra className="dl-links-container">
                    <a
                      className="dl-link-nyaa"
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
                    <a style={{ minWidth: '1rem' }} href={'/encodes'}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
              ))
            : ''}
        </Dimmer.Dimmable>
      </div>
    </DocumentTitle>
  );
}
