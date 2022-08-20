import Offers from "../comp/Offers";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import data from "../data/quiz.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { useParams,useNavigate } from "react-router-dom";
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const navigate = useNavigate();
  const subject = useParams();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [chosen, setChosen] = React.useState("Geometry");
  const [sub, setSub] = React.useState("Circles");
  const [subs, setSubs] = React.useState([]);
  const [bank, setBank] = React.useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    console.log(subject)
    if (subject?.id === "english") {
      setSub("Tense");
      setChosen("Tense");
    }
  },[]);// eslint-disable-line
  useEffect(() => {
    for (let subject in data) {
      for (let topic in data[subject].topics) {
        // console.log(topic);
        if (data[subject].topics[topic].title === chosen) {
          if (data[subject].topics[topic].hasSubTopics)
            setSubs(data[subject].topics[topic].subs);
          else setSubs(chosen);
        }
      }
    }
  }, [chosen]);
  useEffect(() => {
    let questions;
    for (let subject in data) {
      // console.log(data[subject].topics);
      let ver = data[subject].topics.find((topic) => topic.title === chosen);
      // console.log(ver);

      if (ver) {
        questions = data[subject].bank.filter((item) => item.topic === sub);
      }
    }
    setBank(questions);
    // console.log(questions);
  }, [chosen, sub]);
  const drawer = (
    <div
      style={{
        color: "white",
        textAlign: "center",
        margin: "0 50px",
      }}
    >
      <Button sx={{
        backgroundColor: "#13ae7e",
        color: "white",
        fontWeight: "bold",
        margin:"20px 0",
      }} onClick={()=>{
        navigate("/")
      }} fullWidth
      variant="contained"
      >HOME</Button>
      <Divider />
      <br />
      <Typography gutterBottom variant="body1" color="inherit" noWrap>
        All Subjects
      </Typography>

      <br />
      <br />
      {Object.keys(data).map((key) => (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <Typography
            align="left"
            sx={{
              textTransform: "uppercase",
              marginBottom: "5px",
            }}
            gutterBottom
            variant="body1"
            color="inherit"
            noWrap
          >
            {key}
          </Typography>
          <Divider
            color="white"
            sx={{
              borderBottom: "1px solid white",
              marginBottom: "10px",
            }}
          />
          <div>
            {data[key].topics.map((item) => (
              <Button
                align="left"
                disableRipple
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  display: "block",
                  backgroundColor: `${chosen === item.title ? "#fff" : null}`,
                  color: `${chosen === item.title ? "#0B6E4F" : "#fff"}`,
                  "&:hover": {
                    backgroundColor: `${chosen === item.title ? "#fff" : null}`,
                    color: `${chosen === item.title ? "#0B6E4F" : "#fff"}`,
                  },
                }}
                onClick={() => {
                  setChosen(item.title);
                  setSub(item.subs ? item.subs[0] : item.title);
                  // console.log(item.subs ? item.subs[0] : item.title);
                }}
              >
                {item.title}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fffff4",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon htmlColor="#0B6E4F" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0B6E4F",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#0B6E4F",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#fffff4",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#0B6E4F",
              fontWeight: "bold",
            }}
            gutterBottom
            align="left"
            variant="body1"
            color="inherit"
            noWrap
          >
            Topic :-
          </Typography>
          {typeof subs !== "string" ? (
            subs.map((item) => (
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  border: "2px solid gray",
                  margin: "7px 20px",
                  padding: "3px",
                  backgroundColor: `${item === sub ? "#13AE7E" : "#ffffff4"}`,
                  color: `${item === sub ? "#fff" : "#13AE7E"}`,
                  "&:hover": {
                    backgroundColor: `${item === sub ? "#13AE7E" : "#ffffff4"}`,
                    color: `${item === sub ? "#fff" : "#13AE7E"}`,
                  },
                }}
                onClick={() => {
                  setSub(item);
                }}
              >
                {item}
              </Button>
            ))
          ) : (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "5px",
                border: "2px solid gray",
                margin: "7px 20px",
                padding: "3px",
                backgroundColor: `${chosen === sub ? "#13AE7E" : "#ffffff4"}`,
                color: `${chosen === sub ? "#fff" : "#13AE7E"}`,
                "&:hover": {
                  backgroundColor: `${chosen === sub ? "#13AE7E" : "#ffffff4"}`,
                  color: `${chosen === sub ? "#fff" : "#13AE7E"}`,
                },
              }}
              onClick={() => {
                setSub(chosen);
              }}
            >
              {chosen}
            </Button>
          )}
        </Box>
        <Box
          sx={{
            minHeight: "70vh",
            maxHeight: "900px",
            overflow: "auto",
            width: "100%",
            minWidth: "300px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {bank.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #E8E8E8",
                  padding: "5px",
                  borderRadius: "15px",
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
                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
                            <Typography
                              align="left"
                              variant="body2"
                              component="body2"
                            >
                              Answer : {item.answer}
                            </Typography>
                            <Typography
                              align="left"
                              variant="body2"
                              component="body2"
                            >
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
        <Offers />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
