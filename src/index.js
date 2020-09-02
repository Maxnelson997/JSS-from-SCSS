import Layout from './components/layout/layoutWithHooks';
import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Layout>
        <h1>content here.</h1>
    </Layout>,
    document.getElementById('layout-wrapper')
)

module.hot.accept();