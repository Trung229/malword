import './App.css';
import Layout from './Layouts/index'
import UpdatePage from './Page/UpdatePage'

const arr = []

function App() {
  for(let i = 0; i < 100; i++){
    arr.push(i)
  }
  return (
    <Layout>
      <UpdatePage />
    </Layout>
  );
}

export default App;
