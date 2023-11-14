import NestedData from "./NestedData";

function App() {

  const complexData = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001',
    },
    hobbies: ['Reading', 'Traveling'],
    projects: [
      {
        title: 'Project A',
        technologies: ['React', 'Node.js'],
      },
      {
        title: 'Project B',
        technologies: ['Vue.js', 'Express'],
      },
    ],
  };
  return (
    <>
      <NestedData data={complexData}/>
        
    </>
  );
}

export default App;
