import styled from 'styled-components';
import backgroundImage from '../../assets/background.svg';

export const Section = styled.section`
  height: 100vh;
  background: url(${backgroundImage}) no-repeat;

  .content {
    width: 100%;
    height: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .content header {
    margin: 48px 0 0;
  }

  .content main {
    flex: 1;
    max-width: 660px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content main h1 {
    font-size: 64px;
    color: #333;
  }

  .content main p {
    font-size: 24px;
    margin-top: 24px;
    line-height: 38px;
  }

  .content main a {
    width: 100%;
    max-width: 360px;
    height: 72px;
    background: #79ab7f;
    border-radius: 8px;
    text-decoration: none;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-top: 40px;
  }

  .content main a span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  .content main a span svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }

  .content main a strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }

  .content main a:hover {
    background: #79ab7f;
  }

  @media (max-width: 900px) {
    .content {
      align-items: center;
      text-align: center;
    }

    .content header {
      margin: 48px auto 0;
    }

    .content main {
      align-items: center;
    }

    .content main h1 {
      font-size: 42px;
    }

    .content main p {
      font-size: 24px;
    }
  }
`;
