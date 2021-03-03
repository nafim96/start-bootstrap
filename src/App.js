
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeading from './components/TopHeading/TopHeading';
import TopButton from './components/TopButton/TopButton';
import FragElement from './components/FragElement/FragElement';





function App() {
  return (
    <div>
      <TopButton></TopButton>
      <FragElement></FragElement>
      <TopHeading></TopHeading>
    </div>
  );
}

export default App;
