import { Route, Switch } from 'react-router-dom';
import './App.css';
import Base from './Random/Base';
import Nopage from './Random/Nopage';
import Add from './Random/Add';
import Home from './Random/Home';
import Info from './Random/Info';
import Login from './Random/Login';
import View from './Random/View';
import { useState } from 'react';
import data from './Random/data';
import Edit from './Random/Edit';
import teacherdata from './Random/teachers';
import Teacherinfo from './Random/Teacherinfo';
import Teacheredit from './Random/Teacheredit';
import Teacherview from './Random/Teacherview';

function App() {

const [details,setdetails]=useState(data)
const[techdetails,setteachdetails]=useState(teacherdata)
  return (

    <div className="App">
      
<Switch>

<Route exact path="/">

  
  
  <Base
  title="WELCOME TO OUR EMPLOYEE PORTAL"
  desc="Thanks for Visiting  our Portal"
  />

</Route>

<Route path="/home">

<Home/>

</Route>

<Route path="/detail">
<Base
title="WELCOME TO OUR EMPLOYEE INFORMATION"
desc="Here we can EDIT, DELETE and VIEW the employees data"
/>
<Info
details={details}
setdetails={setdetails}

/>

</Route>


<Route path="/teacher">
<Base
title="WELCOME TO OUR Teachers INFORMATION"
desc="Here we can  VIEW the Teachers data"
/>
<Teacherinfo
techdetails={techdetails}
setteachdetails={setteachdetails}

/>

</Route>

<Route path="/te/:id">
<Base
title="WELCOME TO OUR Teachers INFORMATION"
desc="Here we can  VIEW the Teachers data"
/>
<Teacheredit
techdetails={techdetails}
setteachdetails={setteachdetails}

/>

</Route>


<Route path="/vie/:id">
<Base
title="WELCOME TO OUR Teachers INFORMATION"
desc="Here we can  VIEW the Teachers data"
/>
<Teacherview
techdetails={techdetails}

/>

</Route>




<Route path="/add">

<Base
title="WELCOME TO OUR EMPLOYEE PORTAL"
desc="Here we can ADD The  Employees data"
/>
<Add
details={details}
setdetails={setdetails}
/>

</Route>


<Route path="/edit/:id">

<Base
title="WELCOME TO OUR EDIT PAGE"
desc="Here we can EDIT The  Employees data"
/>
<Edit
details={details}
setdetails={setdetails}
/>

</Route>

<Route path="/login">


<Base
title="WELCOME TO LOGIN PAGE"
/>
<Login/>

</Route>

<Route path="/view/:id">


<Base
title="WELCOME TO VIEW PAGE"
/>
<View
details={details}

/>

</Route>


<Route path="**">
<Base/>

 <Nopage/>

</Route>

</Switch>

   

    </div>
  );
}

export default App;
