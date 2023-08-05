import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <h1>Welcome to proshop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
