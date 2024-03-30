import styled from "styled-components";

export const PageDetailsStyle = styled.div`
  .parallax-body-container {
    height: 70vh;
  }
  .parallax-container {
    height: 100vh;
    margin-bottom: 6rem;
    @media screen and (min-width: 420px) {
      margin-bottom: 9rem;
    }
    .name-container {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .name {
        font-size: 2.3rem;
        text-align: center;
        @media screen and (min-width: 420px) {
          font-size: 3.2rem;
        }
        @media screen and (min-width: 600px) {
          font-size: 4.4rem;
        }
        @media screen and (min-width: 730px) {
          font-size: 5rem;
        }
        background-color: ${(props) => props.theme.darkBlue};
        padding: 20px;
        border-radius: 20px;
        color: ${(props) => props.theme.white};
      }
    }
  }

  .project-container {
    margin: 0rem 1rem;

    @media screen and (min-width: 380px) {
      margin: 0rem 2rem;
    }
    @media screen and (min-width: 500px) {
      margin: 0rem 3rem;
    }
    @media screen and (min-width: 700px) {
      margin: 0rem 4rem;
    }
    @media screen and (min-width: 1000px) {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0rem 4rem;
    }
  }

  section {
    margin-top: 5rem;
    margin-bottom: 5rem;
    /* @media screen and (min-width: 900px) {
      margin-bottom: 5rem;
    } */

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
        font-size: 1.8rem;
        @media screen and (min-width: 600px) {
          font-size: 2.5rem;
        }
        @media screen and (min-width: 800px) {
          font-size: 3rem;
        }
        @media screen and (min-width: 1200px) {
          font-size: 3.5rem;
        }
        font-weight: 600;
      }
      .container {
        display: flex;
        flex-flow: column;
        margin-top: 3rem;
        height: 100%;
        position: relative;
        width: 100%;
        justify-content: space-between;

        @media screen and (min-width: 900px) {
          flex-flow: row;
        }

        .description-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .visit {
            align-self: center;
            margin: 4rem 0rem;
            font-weight: 600;
            @media screen and (min-width: 900px) {
              align-self: flex-start;
            }
          }
        }

        .no-website {
          margin: 3rem 0rem;
        }

        .notes {
          display: flex;
          flex-direction: column;
          align-self: center;

          @media screen and (min-width: 900px) {
            align-self: auto;
            margin-left: 2rem;
          }
          @media screen and (min-width: 1000px) {
            margin-left: 3rem;
          }

          .note-container {
            display: flex;
            flex-direction: column;
            width: max-content;
            margin-bottom: 0.7rem;
            a {
              color: ${(props) => props.theme.green};
              &:hover {
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
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 3rem;

    @media screen and (min-width: 575px) {
      flex-direction: row;
      align-items: flex-end;
    }

    @media screen and (min-width: 1000px) {
      justify-content: end;
    }

    .repo {
      margin-right: 2rem;
      @media screen and (max-width: 575px) {
        margin-bottom: 0.5rem;
      }
    }
  }
  .technical {
    @media screen and (min-width: 900px) {
      margin-top: 4rem;
    }
  }
  .learnings {
    @media screen and (min-width: 900px) {
      margin-top: 4rem;
    }
  }
  .technical,
  .learnings {
    margin-left: auto;
    margin-right: auto;
    a {
      color: ${(props) => props.theme.green};
      &:hover {
        color: ${(props) => props.theme.grey};
      }
    }
  }
  .kiln,
  .runs {
    max-width: 380px !important;
  }
  .ad {
    max-width: 602px !important;
  }
  .speak {
    max-width: 602px !important;
  }
  .image-container {
    background: ${(props) => props.theme.blue};
    padding: 8px;
    border-radius: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;

    @media screen and (min-width: 800px) {
      margin-top: 4rem;
    }
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
  a {
    color: ${(props) => props.theme.green};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.darkBlue};
    }
  }
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
  &:hover {
    transform: translate3d(0, 5px, 0);
    cursor: pointer;
  }
  &:after {
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
