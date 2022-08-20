import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
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
    data.topics.map((topic) => {
      //eslint-disable-line
      if (topic.hasSubTopics) {
        topics = [...topics, ...topic.subs];
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
                        topicIndex === topics.indexOf(topic)
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
        <Box
          sx={{
            minHeight: "70vh",
            width: "100%",
            maxWidth: "800px",
            backgroundColor: "#F8F8F8",
            border: "1px solid #E8E8E8",
          }}
        >
          {}
        </Box>
      </Box>

      <Divider />
    </React.Fragment>
  );
}
