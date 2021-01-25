import styled from "styled-components";
import db from "../db.json";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import QuizBackground from "../src/components/QuizBackground";
import GitHubCorner from "../src/components/GitHubCorner";
import Footer from "../src/components/Footer";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>    
        <Widget>
          <Widget.Header>
            <h1>Alura Quiz Mushoku Tensei</h1>
          </Widget.Header>
          <Widget.Content>
            <p>O quanto você sabe sobre Mushoku Tensei?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>

            <p>Lorem ipsun dolor sit amet...</p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/EdsonSilvaRamos"/>
    </QuizBackground>
  );
}
