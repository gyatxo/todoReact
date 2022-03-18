
import './App.css';
import Form from './components/Form';
import FormList from './components/FormList';
import Header from './components/Header';

function App() {
  return (
<div className="wrapper">
    <section className="content">
        <Header/>
    <div className="lecture">
        <Form/>    
        <FormList/>   
    </div>
    </section>

</div>
  );
}

export default App;
