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
  // get it from the server?
  const tasks = ['task 1', 'task 2', 'task 3'];

  return {
      props: { 
          tasks,
      },
  };
}
