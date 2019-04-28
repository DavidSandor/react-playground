import React from 'react';
import './App.css';
import Layout from './HOC/Layout/Layout';
import AppHeader from './Components/AppHeader/AppHeader';
import PlayGroundArea from './Containers/PlayGroundArea/PlayGroundArea';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Layout>
      <AppHeader />
      <PlayGroundArea/>
    </Layout>
  );
}

export default App;
