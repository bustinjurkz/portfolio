import styled from "styled-components";

export const PageDetailsStyle = styled.div`
  .parallax-body-container {
    height: 70vh;
  }
  .parallax-container {
    height: 100vh;
    .name-container {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .name {
        font-size: 5rem;
        background-color: ${(props) => props.theme.darkBlue};
        padding: 20px;
        border-radius: 20px;
        color: ${(props) => props.theme.white};
      }
    }
    margin-bottom: 9rem;
  }

  .project-container {
    margin: 0px 9em;
  }

  section {
    margin-bottom: 5rem;
    .header {
      font-weight: 600;
      font-size: x-large;
      margin-bottom: 1.5rem;
    }
  }

  .intro {
    .snapshot {
      .tagline {
        font-family: "Inter", sans-serif;
        font-size: ${(props) => props.theme.bigFont};
        font-weight: 600;
      }
      .container {
        display: flex;
        margin-top: 3rem;
        height: 100%;
        position: relative;
        width: 100%;
        justify-content: space-between;

        .description {
          width: 70%;
          margin-right: 6rem;
        }

        .notes {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .note-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 0.7rem;
            a {
              color: ${(props) => props.theme.green};
              :hover {
                color: ${(props) => props.theme.grey};
              }
            }
          }
          .role {
            margin-bottom: 0.2rem;
          }
          .label {
            font-weight: 600;
            margin-bottom: 0.5rem;
          }
        }
      }

      .visit {
        margin: 3rem 0rem;
        font-weight: 600;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: end;
    .repo {
      margin-right: 2rem;
    }
  }
  .technical,
  .learnings {
    a {
      color: ${(props) => props.theme.green};
      :hover {
        color: ${(props) => props.theme.grey};
      }
    }
  }

  .image-container {
    background: ${(props) => props.theme.blue};
    padding: 8px;
    border-radius: 15px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 6rem;
    img {
      border-radius: 15px;
    }
    .label {
      padding: 15px 10px;
      text-align: center;
      font-size: 0.9rem;
      text-align: left;
    }
  }
`;

export const SpecialListStyle = styled.div`
  background: white;
  margin: 20px 0px 20px 20px;
  padding: 20px 15px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
`;

export const ListStyle = styled.div`
  li {
    margin: 1.5rem 0rem;
  }
  ul {
    display: block;
    margin-left: -10px;
  }

  ul li {
    display: block;
    position: relative;
  }

  ul li:not(:last-child) {
    margin-bottom: 16px;
  }

  ul li:before {
    content: "";
    position: absolute;
    top: 1.2em;
    left: -30px;
    margin-top: -0.9em;
    background: ${(props) => props.theme.grey};
    height: 12px;
    width: 12px;
    border-radius: 50%;
  }
`;

export const ArrowStyle = styled.div`
  position: relative;
  background: #fff;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transition: all 0.2s linear;
  :hover {
    transform: translate3d(0, 5px, 0);
    cursor: pointer;
  }
  :after {
    content: "";
    position: absolute;
    display: block;
    left: 0.6rem;
    width: 20px;
    height: 20px;
    border-top: 5px solid #000;
    border-left: 5px solid #000;
    top: 7px;
    transform: rotate(225deg);
  }
`;
