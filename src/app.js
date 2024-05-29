import React from 'react';
import Routers from '@navigation/routers';
import Layout from '@layout/layout';
import '@styles/app.scss';

const App = () => {

    return (
        <Layout>
            <Routers />
        </Layout>

    );
};

export default App;
