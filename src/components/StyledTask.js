import styled from "styled-components";

const StyledTask = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  .Task__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      margin-top: 24px;
    }

    p {
      margin-top: 16px;
    }

    strong {
      padding: 2px 4px;
      border-radius: 4px;
      background-color: rgba(108, 152, 223, 0.24);
      font-weight: normal;
    }
  }

  a {
    color: rgba(108, 152, 223, 1);
  }

  .Tack__schemaContainer {
    margin: 0 auto;
    margin-top: 24px;
  }
`;

export { StyledTask };
