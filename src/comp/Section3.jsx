import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import questions from "../data/quiz.json";

export default function Trending() {
  const data = questions.mathematics;
  let [topics, setTopics] = React.useState([]);
  let [bank, setBank] = React.useState([]);
  const [topicIndex, setTopicIndex] = React.useState(0);
  useEffect(() => {
    data.topics.map((topic) => {//eslint-disable-line
      //eslint-disable-line
      if (topic.hasSubTopics) {
        topics = [...topics, ...topic.subs];//eslint-disable-line
      } else {
        topics = [...topics, topic];
      }
    });
    setTopics(topics);
  }, [data]);
  useEffect(() => {
    setBank(data.bank.filter((item) => item.topic === topics[topicIndex]));
    console.log(data.bank.filter((item) => item.topic === topics[topicIndex]));
  }, [topicIndex, topics, data.bank]);
  function showQuiz() {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          maxHeight: "900px",
          overflow: "auto",
          width: "100%",
          minWidth: "300px",
          maxWidth: "800px",
          backgroundColor: "#F8F8F8",
          border: "1px solid #E8E8E8",
          padding: "5px",
        }}
      >
        {bank[0]?.topic}
        {bank.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                marginBottom: "20px",
              }}
            >
              <Typography
                sx={{ position: "relative", color: "#0b6e4f", top: "50px" }}
                align="left"
                variant="h4"
                component="h4"
              >
                {index + 1}.
              </Typography>
              <Box
                sx={{
                  padding: "0 10%",
                }}
              >
                <Typography align="left" variant="body2" component="body2">
                  {item.title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "start",
                  }}
                >
                  {item.options.map((opt, i) => {
                    return (
                      <>
                        <label
                          for={opt}
                          style={{
                            margin: "5px",
                            width: "100%",
                            textAlign: "left",
                            backgroundColor: `${
                              item.reveal
                                ? opt === item.answer
                                  ? "#AEE8D6"
                                  : opt === item.choice && opt !== item.answer
                                  ? "#F9BFBF"
                                  : null
                                : null
                            }`,
                            borderRadius: "10px",
                            padding: "3px",
                          }}
                        >
                          <input
                            style={{
                              color: "blue",
                            }}
                            key={index}
                            type="radio"
                            value={opt}
                            name={index}
                            onChange={(e) => {
                              // console.log(e.target.value);
                              // console.log(e.target.name);
                              let newBank = [...bank];
                              newBank[e.target.name].choice = e.target.value;
                              setBank(newBank);
                              // console.log(bank)
                            }}
                          />
                          {opt}
                        </label>
                      </>
                    );
                  })}
                </div>
                <div>
                  {item.reveal ? (
                    <>
                      <Card
                        sx={{
                          margin: "10px 0",
                          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        }}
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0 15px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              color: `${
                                item.choice === item.answer ? "green" : "red"
                              }`,
                            }}
                            align="left"
                            variant="body2"
                            component="body2"
                          >
                            {item.choice === item.answer
                              ? "Answer is correct!"
                              : "Answer is incorrect."}
                          </Typography>
                          <Typography
                            align="left"
                            variant="body2"
                            component="body2"
                          >
                            Explanation
                          </Typography>
                          <Typography align="left" variant="body2" component="body2">
                              Answer : {item.answer}
                          </Typography>
                          <Typography align="left" variant="body2" component="body2">
                            {item.exp}
                          </Typography>
                        </CardContent>
                      </Card>
                    </>
                  ) : null}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#13AE7E",
                      margin: "3px",
                      "&:hover": {
                        backgroundColor: "#13AE7E",
                      },
                    }}
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                      console.log(item.answer);
                      let newBank = [...bank];
                      newBank[index].reveal = true;
                      setBank(newBank);
                    }}
                  >
                    Answer & solution
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      backgroundColor: "gray",
                      margin: "3px",
                      "&:hover": {
                        backgroundColor: "gray",
                      },
                    }}
                    variant="contained"
                    size="small"
                  >
                    Join the discussion
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      margin: "3px",
                    }}
                    variant="contained"
                    size="small"
                  >
                    Save for later
                  </Button>
                </div>
              </Box>
            </div>
          );
        })}
      </Box>
    );
  }
  return (
    <React.Fragment>
      <Box
        sx={{
          margin: "auto",
          padding: "0 16vw",
          backgroundColor: "#fffff4",
        }}
      >
        <Typography variant="body2" component="body2">
          lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum
          dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit
          amet consectetur adipisicing elit. lorem ipsum dolor sit amet
          consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur
          adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#fffff4",
          minHeight: "100vh",
          justifyContent: "space-evenly",
          padding: "5vh 10vw",
        }}
        id="question_wrapper"
      >
        <div id="accordion">
          {data.topics.map((topic) => {
            return (
              <Accordion
                elevation={0}
                square
                key={topic.title}
                sx={{
                  minHeight: "fit-content",
                  "&:before": {
                    display: "none",
                  },
                  width: "fit-content",
                }}
              >
                <AccordionSummary
                  expandIcon={topic.hasSubTopics ? <ExpandMore /> : null}
                  id={topic.title}
                  sx={{
                    padding: "0",
                    marginRight: "1rem",
                    minHeight: "fit-content",
                  }}
                >
                  <button
                    style={{
                      background: "inherit",
                      fontWeight: "bold",
                      width: "100%",
                      border: "none",
                      backgroundColor: "#fffff4",
                      color: `${
                        topicIndex === topics.indexOf(topic) ||
                        topic.subs?.includes(topics[topicIndex])
                          ? "#0b6e4f"
                          : "gray"
                      }`,
                      margin: "0",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (!topic.hasSubTopics)
                        setTopicIndex(topics.indexOf(topic));
                    }}
                  >
                    {topic.title}
                  </button>
                </AccordionSummary>

                {topic.hasSubTopics ? (
                  <AccordionDetails
                    sx={{
                      padding: "0",
                    }}
                  >
                    {topic.subs.map((subTopic) => {
                      return (
                        <div key={subTopic}>
                          <button
                            style={{
                              fontWeight: "bold",
                              background: "inherit",
                              width: "100%",
                              border: "none",
                              backgroundColor: "#fffff4",
                              color: `${
                                topicIndex === topics.indexOf(subTopic)
                                  ? "#0b6e4f"
                                  : "gray"
                              }`,
                              cursor: "pointer",
                            }}
                            label={subTopic}
                            onClick={(e) => {
                              setTopicIndex(topics.indexOf(subTopic));
                            }}
                          >
                            {subTopic}
                          </button>
                        </div>
                      );
                    })}
                  </AccordionDetails>
                ) : null}
              </Accordion>
            );
          })}
        </div>
        <div>
          {showQuiz()}
          <Box>
            <Button
              sx={{
                textTransform: "none",
                float: "left",
              }}
              disabled={topicIndex === 0}
              onClick={() => {
                setTopicIndex((prev) => {
                  return prev - 1;
                });
                console.log(topicIndex);
              }}
            >
              Previous Topic
            </Button>
            <Button
              sx={{
                textTransform: "none",
                float: "right",
              }}
              disabled={topicIndex === topics.length - 1}
              onClick={() => {
                setTopicIndex((prev) => {
                  return prev + 1;
                });
                console.log(topicIndex);
              }}
            >
              Next Topic
            </Button>
          </Box>
        </div>
      </Box>

      <Divider />
    </React.Fragment>
  );
}
