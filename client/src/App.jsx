import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Chatbot from "./Chatbot";

function App() {
  return (
    <div id="main" className="mx-auto max-w-7xl h-[100dvh] text-stone-200">
      <Header />
      <Landing />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
