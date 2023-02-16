import Head from 'next/head'
import SideNav from 'components/SideNav/SideNav';
import TaskList from 'components/TaskList/TaskList';

export default function Home(props) {
  return (
    <>
      <SideNav></SideNav>
      <main className="container">
        <TaskList tasks={props.tasks}></TaskList>
      </main>
    </>
  )
}

export async function getStaticProps() {
  // okay cool... now let's get it from the server?
  const tasks = Array(50).fill('Task ').map((x, y) => x + (y + 1));

  return {
      props: { 
          tasks,
      },
  };
}
