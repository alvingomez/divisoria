import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        {/*  Containers are used to contain, pad, and (sometimes) 
           center the content within them. 
           >>container, which sets a max-width at each responsive breakpoint
      */}
        <Container>
         <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
