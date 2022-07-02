import styled from "styled-components";

const lineHeight = "2em";

export const Container = styled.div`
  line-height: ${lineHeight};
  margin: 0;
  display: grid;
  min-height: 100%;
  grid-template-areas:
    "summary"
    "tech-cloud"
    "details";
  grid-template-rows: auto 1fr;
`;

export const Summary = styled.div`
  grid-area: summary;
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 2em;
  border-radius: 1em;
`;

export const TechCloud = styled.div`
  grid-area: tech-cloud;
  font-size: 2.9em;
  *{
    padding: 0 0.4em 0.4em 0;
  }
`;

export const SummaryImage = styled.img`
  border-radius: 50%;
  width: 7em;
`;

export const SummaryInfo = styled.div`
  border-radius: 50%;
  width: 11em;
`;

export const Details = styled.div`
  grid-area: details;
  word-wrap: break-word;
  width: 100%;

  code {
    font-size: 1.2em;
  }

  p {
    font-size: 1.2em;
  }

  hr {
    opacity: 10%;
    margin-top: 3em;
    margin-bottom: 3em;
  }

  .hrSmall {
    border: 3px dashed #fff;
  }
`;
