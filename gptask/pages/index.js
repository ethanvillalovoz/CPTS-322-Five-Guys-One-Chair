import React from 'react'
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import SideNav from 'components/SideNav/SideNav';
import TaskList from 'components/TaskList/TaskList';
import Button from '@mui/material/Button';

export default function Home(props) {
  const listMapping = new Map(JSON.parse(props.serializedMap));
  const [calendarVisible, setCalendarVisibility] = useState(false);
  const [selectedList, setSelectedList] = useState(listMapping.keys()[0]);

  return (
    <>
      <SideNav lists={[...listMapping.keys()]} onListSelect={setSelectedList}></SideNav>
      <main className="container">
        <Button onClick={() => setCalendarVisibility(visible => !visible)}>Click me!</Button>
        <MainArea calendarVisible={calendarVisible} tasks={listMapping.get(selectedList)}></MainArea>
      </main>
    </>
  )
}

function MainArea({ calendarVisible, tasks }) {
  if (calendarVisible) {
    return (
      <>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          />
      </>
    );
  }
  else {
    return (
      <>
        <TaskList id="tasklist" tasks={tasks}></TaskList>
      </>
    );
  }
}

export async function getStaticProps() {
  // okay cool... now let's get it from the server?
  const lists = ['MATH 220', 'CptS 260', 'CptS 317', 'CptS 322', 'CptS 499'];

  const listTaskMap = new Map();
  lists.forEach(list => {
      listTaskMap.set(list, Array(50).fill(list + ' ').map((x, y) => x + (y + 1)));
  });

  // we have to serialize the Map manually since it's not directly compatible with JSON
  let serializedMap = JSON.stringify(Array.from(listTaskMap.entries()))

  return {
      props: { 
        serializedMap,
      },
  };
}
