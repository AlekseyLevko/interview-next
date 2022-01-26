import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <div className="[ Layout__innerContainer ]">
        <Header />
        <main className="[ Layout__main ]">{children}</main>
        <Footer />
      </div>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  .Layout__innerContainer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .Layout__main {
    flex: 1;
  }
`;

export { Layout };
