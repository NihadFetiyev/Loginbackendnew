import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouer>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/*" element={<BlogApp />} />
        <Route path="/users/*" element={<UserApp />} />
      </Routes>
    </BrowserRouer>
  );
}

export default App;
