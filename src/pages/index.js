import * as React from 'react';
import { Helmet } from 'react-helmet';

import '../css/index.css';

const IndexPage = () => {
  const [buttonText, setButtonText] = React.useState('Share This Page');

  const shareData = {
    title: "Native Share Test",
    text: 'This page is testing the functionality of utilizing native sharing on a button click.',
    url: 'https://nativesharetest.netlify.app',
  }

  const handleButtonClick = async (e) => {
    try {
      await navigator.share(shareData);
      setButtonText('Page Shared');
      console.log('[shared]');
    }
    catch (err) {
      console.log('[something went wrong]', err);
      setButtonText('Something Went Wrong');
    }
  }

  return (
    <main>
      <Helmet>
        <title>Native Share Test</title>
      </Helmet>
      <h1>Native Share Test</h1>
      <p>Clicking the button below should bring up your device's native options for sharing this page.</p>
      <button
        onClick={(e) => handleButtonClick(e)}
        disabled={true}
      >
        {buttonText}
      </button>
    </main>
  );
}

export default IndexPage
