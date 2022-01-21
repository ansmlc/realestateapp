import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Children } from 'react/cjs/react.production.min';
import Navbar from './navbar';
import Footer from './footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box m="auto" maxW={"1280px"}>
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </Box>
    </>
);

export default Layout