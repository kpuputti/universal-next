import React from 'react';
import Head from 'next/head';

export default (props) => {
  const { className, title, children } = props;
  return (
    <div className={ className }>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" type="text/css" href="/static/build/bundle.css"/>
      </Head>
      { children }
    </div>
  );
};
