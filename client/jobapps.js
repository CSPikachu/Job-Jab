import React, { Component } from "react";
import {
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Button,
  Text,
} from "@chakra-ui/react";
import NewAppModal from "./newAppModal";
import ViewModal from "./viewModal";

class JobApps extends Component {
  constructor() {
    super();
    this.state = {
      apps: [],
      colors: {
        1: "yellow",
        2: "orange",
        3: "blue",
        4: "purple",
        5: "grey",
        6: "red",
        7: "green",
        8: "pink",
      },
      sourceImage: {
        LinkedIn:
          "https://www.flaticon.com/svg/static/icons/svg/174/174857.svg",
        Indeed:
          "https://pbs.twimg.com/profile_images/465901126684913664/sTJZxF5G.jpeg",
        Monster:
          "https://media.glassdoor.com/sqll/3411/monster-worldwide-squarelogo-1439837319741.png",
      },
    };
  }

  componentDidMount() {
    fetch("/jobapps")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ apps: data });
      });
  }

  deleteApp(app) {
    fetch(`/jobapps/${app}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newApps = this.state.apps.slice();
    for (let i = 0; i < newApps.length; i++) {
      if (newApps[i].id === app) {
        newApps.splice(i, 1);
      }
    }
    this.setState({ ...this.state, apps: newApps });
  }

  render() {
    const apps = this.state.apps.map((el, idx) => {
      return (
        <Flex
          key={idx}
          style={{
            border: "1px solid grey",
            borderRadius: "10px",
            marginTop: "4px",
            padding: "20px",
          }}
        >
          <Avatar src={this.state.sourceImage[el.sourcename]} />
          <Box ml="3">
            <Text fontWeight="bold">
              {el.application_name}
              <Badge ml="1" colorScheme={this.state.colors[el.status_id]}>
                {el.status}
              </Badge>
            </Text>
            <Text fontSize="sm">{el.application_folder_link}</Text>
            <Text fontSize="sm">{el.date_submitted}</Text>
            <Badge colorScheme="teal">{"$" + el.offer_salary}</Badge>
            <Button
              onClick={() => {
                this.deleteApp(el.id);
              }}
            >
              Delete Application
            </Button>
            <ViewModal props={el.id} />
          </Box>
        </Flex>
      );
    });
    return (
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Heading style={{ padding: "20px" }}>Your Job Apps</Heading>
        <NewAppModal />
        <Heading>{apps}</Heading>
      </div>
    );
  }
}

export default JobApps;
