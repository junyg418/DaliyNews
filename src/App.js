import './App.css';
import Header from "./components/header/Header";
import PaperSummation from "./components/paper_summation/PaperSummation";
import KeywordNewsList from "./components/keyword_news/KeywordNewsList";


function App() {
  return (
    <div className="main-container">
        <Header/>
        <div className="content">
            <div className="left-container">

            </div>
            <div className="verticleLine"></div>
            <div className="right-container">
                <KeywordNewsList/>
                <PaperSummation
                    title = "The Dragon Hatchling: The Missing Link between the Transformer and Models of the Brain"
                    description = "AI가 드디어 뇌 맛을 봤다!"
                    paper_link={"https://google.com"}
                    is_booked = {false}
                />
                <PaperSummation
                    title = "The Dragon Hatchling: The Missing Link between the Transformer and Models of the Brain"
                    description = "AI가 드디어 뇌 맛을 봤다!"
                    paper_link={"https://google.com"}
                    is_booked = {true}
                />
                <PaperSummation
                    title = "The Dragon Hatchling: The Missing Link between the Transformer and Models of the Brain"
                    description = "AI가 드디어 뇌 맛을 봤다!"
                    paper_link={"https://google.com"}
                    is_booked = {false}
                />
                <PaperSummation
                    title = "The Dragon Hatchling: The Missing Link between the Transformer and Models of the Brain"
                    description = "AI가 드디어 뇌 맛을 봤다!"
                    paper_link={"https://google.com"}
                    is_booked = {false}
                />
                <PaperSummation
                    title = "The Dragon Hatchling: The Missing Link between the Transformer and Models of the Brain"
                    description = "AI가 드디어 뇌 맛을 봤다!"
                    paper_link={"https://google.com"}
                    is_booked = {true}
                />
            </div>
        </div>
    </div>
  );
}

export default App;
