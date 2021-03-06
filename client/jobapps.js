import React, { Component } from 'react';
import {
  Heading,
  Box,
  Badge,
  Flex,
  Avatar,
  Spacer,
  Button,
  Text,
  Link,
  extendTheme,
} from '@chakra-ui/react';
import NewAppModal from './newAppModal';
import ViewModal from './viewModal';
import './css/styles.scss';

class JobApps extends Component {
  constructor() {
    super();
    this.state = {
      apps: [],
      colors: {
        1: 'yellow',
        2: 'orange',
        3: 'blue',
        4: 'purple',
        5: 'grey',
        6: 'red',
        7: 'green',
        8: 'pink',
      },
      sourceImage: {
        LinkedIn:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8whMEUe73f6vTl8PdBjcYuhcIogcBsoc77/f5Zmsxso88gfr5zqNOnx+Lh7faUvd3C2uy71Onu9fquzOSMt9q60ObP4fB9r9Y2isTs9PmcwN5NlcnH3OyhxeHX5/Jdns6NudsAdrtCkMcAcbl3gN63AAAD1klEQVR4nO2cfXOiMBCHJQopGF/BChQr1fv+n/Go9sVDdtvehWSy93tmOtM/ZNzHzcsmBCYTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEFeH4rn5WaV+w5kJI67xihjjFJxufEdzAgcW2V09IZWVeE7IMuku0+9q6NpZ76Dskk+N1EfHe99h2WR5l6wU0yOvuOyxkAGry1VyqC6HBbsFB9S37FZYVYRglGkHn0HZ4UdlcIuiZmEJOaaFOySuPUdngUe6RR2SZz7Ds8CJZfDKBYwnJ5Zw0jAnKhYQS2gBucNTfjzRSrecHLiDQVMFwnfDwUsMFp2LE1WvuP7d9bsjN/4Ds8Cey6HZu07PBs0jKKERjqZbOlmakrfwVkhfaCTKGQ3akpNGErMluJhuK4R0kYvFHqgoUoS7Eabqq+otYiJ4pPZ/HTrqFUloFzrsV8Yo7vW2v0ZlYkZY25J86Jss3PTLp6mErbYhknzOpdrBwAAAPgh/cB3JGNw3D51NVLbxlUVZ+3ueSNiR+Sdejs35lLnXtdlr8WuMVF58HIrqy4XNL1tjPplPczL7T2qY1mZwZ0RrePd1KnchVl1/a0H6cUzPZlhbm4WTxfDem/r6qR0vvkzi+l4kr4hdR/n4/7G3emq+0SqteNxx6rhPuG20N8/7Pi4lU3D5dCGzz06cbrCtmjIHFzpf/45SMPFtwWjSD0FaFj+QLC7Yhmc4fOPBLvOeAjLcMPepRs0rFxNGlYMdfHFuZwBnG2qWzGM6AOONMrRtGjH8G/QrZt26s8wMm4GG4+GupVuGGknBwN9GhonlY3XHJ6lG0bKxXLYq6GT6nQkQ/2tpaJ2UddYN9RGJ0mcZc3rf199tnGw+2bZ0Jj59vhWq0yL5qsLTB2YodbrP5Oyjfk0uqhNbRrq890UvsrYdaNxsGNj0VBnA72q5g4/Ojnfac+QeEyqZs/oOhhM7RkmxKixZJKoHwIyJLtUyqz/QzLUMfkVBfMAYECGzKhY018RkmHMzN0LspkGZKgXzHeQjxqHZMiuEujrQjLkbu7m5LNHARlWXAmdknVNOIaDBdsHaSbAcM7t7oowZN+/IMIQOQzfEDkM31B+DmEYviH6YfiGyGH4hsghDEcEhregH1KIMEQOwzdEDmE4ImiltyCHFCIMkcPwDeXnEIbhG6Ifhm+IHIZviBzCcERgeAv6IYUIQ+QwfEPkEIYj8h8YVsS7n17pG/5SBCf27QFpQ12nslHlLuTFkqZ38DddkbAP9Kb7DYW89xUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+xm9wWFbk8D1jiwAAAABJRU5ErkJggg==',
        Indeed:
          'https://www.apkmirror.com/wp-content/uploads/2020/03/5e72b408f1a87.png',
        Monster:
          'https://media.glassdoor.com/sqll/3411/monster-worldwide-squarelogo-1439837319741.png',
        Other:
          'https://i.pinimg.com/originals/58/d4/1b/58d41bb62483f837f04b4399c0560e0d.jpg',
      },
    };
    this.renderApps = this.renderApps.bind(this);
  }
  renderApps() {
    fetch('/jobapps')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ apps: data });
      });
  }
  componentDidMount() {
    this.renderApps();
  }
  deleteApp(app) {
    fetch(`/jobapps/${app}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
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
      let date = new Date(el.date_submitted);
      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      let day = days[date.getDay()];
      let dateNum = date.getDate();
      let month = months[date.getMonth()];
      let year = date.getFullYear();
      date = day + ' ' + dateNum + ' ' + month;

      return (
        <Flex
          key={idx}
          style={{
            border: '1px solid grey',
            borderRadius: '10px',
            marginTop: '4px',
            padding: '20px',
            backgroundColor: 'white',
          }}
        >
          <Avatar
            src={this.state.sourceImage[el.sourcename]}
            style={{ margin: '15px' }}
          />
          <div>
            <div>
              <Text fontWeight='bold'>
                {el.application_name}
                <Badge
                  style={{ alignContent: 'center' }}
                  ml='1'
                  colorScheme={this.state.colors[el.status_id]}
                >
                  {el.status}
                </Badge>
              </Text>
            </div>
            <Link
              href={el.application_folder_link}
              target='#'
              style={{ color: 'blue' }}
              fontSize='sm'
            >
              Application URL
            </Link>
            <Link
              href={el.resume_doc_link}
              target='#'
              style={{ color: 'purple', marginLeft: '50px' }}
              fontSize='sm'
            >
              Resume Doc
            </Link>
          </div>
          <div
            style={{
              marginLeft: '10px',
            }}
          >
            <Text
              style={{
                border: '1px solid lightgrey',
                borderRadius: '10px',
                paddingLeft: '10px',
                paddingRight: '10px',
              }}
              fontSize='sm'
            >
              {date}
            </Text>
          </div>
          <Spacer />
          <Badge
            colorScheme={el.offer_salary > 150000 ? 'blue' : 'teal'}
            style={{ height: '40px' }}
          >
            {el.offer_salary > 0 ? '$' + el.offer_salary : 'N/A'}
          </Badge>
          <Spacer />
          <div style={{ display: 'flex' }}>
            <Button
              style={{
                display: 'inline',
                margin: '5px',
                color: 'red',
              }}
              onClick={() => {
                this.deleteApp(el.id);
              }}
            >
              Delete Application
            </Button>
            <ViewModal
              style={{
                display: 'inline',
                marginLeft: '10px',
              }}
              applicationId={el.id}
              renderApps={this.renderApps}
            />
          </div>
        </Flex>
      );
    });
    return (
      <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        <Heading className='jobAppHeading'>Your Job Apps</Heading>
        <div className='newAppButton'>
          <NewAppModal renderApps={this.renderApps} />
        </div>
        <Heading
          style={{
            marginBottom: '200px',
            display: 'block',
          }}
          className='apps'
        >
          {apps}
        </Heading>
      </div>
    );
  }
}

export default JobApps;
