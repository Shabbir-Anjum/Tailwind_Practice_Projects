import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import InputBox from "./components/InputBox";


function App() {
  return (
    <>
    
      <div className="grid place-content-center h-screen bg-no-repeat bg-cover " style={{backgroundImage:`url('https://images.pexels.com/photos/4644813/pexels-photo-4644813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
        
        <InputBox index='1'/>
        
        <InputBox index='2' hover='hover:bg-purple-500' color="hover:text-white" bgcolor=" hover:bg-red-500" opacity=" hover:opacity-30"/>
      
      <Card/>
      <Card2/>
      </div>
      <div className="bg-blue-300">
      <Card3/>
      </div>
    </>
  );
}

export default App;
