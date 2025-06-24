import { Provider } from 'react-redux';
import './App.css';
import MyJsx001 from './components/ex01_jsx/MyJsx001';
import MyJsx002 from './components/ex01_jsx/MyJsx002';
import MyJsx003 from './components/ex01_jsx/MyJsx003';
import MyJsx004 from './components/ex01_jsx/MyJsx004';

import MyBasic001 from './components/ex02_useState/MyBasic001';
import MyUseState002 from './components/ex02_useState/MyUseState002';
import MyUseState003 from './components/ex02_useState/MyUseState003';
import MyUseState004 from './components/ex02_useState/MyUseState004';
import MyUseState005 from './components/ex02_useState/MyUseState005';
import MyUseState006 from './components/ex02_useState/MyUseState006';
import MyuseRef001 from './components/ex03_useRef/MyuseRef001';
import MyuseRef002 from './components/ex03_useRef/MyuseRef002';
import MyUseEffect001 from './components/ex04_useEffect/MyUseEffect001';
import MyUseStateSync001 from './components/ex05_async/MyUeStateSync001';
import MyuseStateSync002 from './components/ex05_async/MyuseStateSync002';
import MyuseStateSync003 from './components/ex05_async/MyuseStateSync003';
import MyuseStateSync004 from './components/ex05_async/MyuseStateSync004';
import Myprops001 from './components/ex06_props/Myprops001';
import Myprops002 from './components/ex06_props/Myprops002';
import MyuseContext01 from './components/ex07_context/MyuseContext01';
import MyuseReducer01 from './components/ex08_useReducer/MyuseReducer01';
import MyuseReducer02 from './components/ex08_useReducer/MyuseReducer02';
import MyReduxToolkit01 from './components/ex09_redux_toolkit/MyReduxToolkit01';
import { store } from './components/ex09_redux_toolkit/toolkit/store';





function App() {
  return (
    <div className="App">
      {/* <MyJsx001 /> */}
      {/* <MyJsx002 /> */}
      {/* <MyJsx003/> */}
      {/* <MyJsx004 /> */}
      {/* <MyBasic001 /> */}
      {/* <MyUseState002 /> */}
      {/* <MyUseState003 /> */}
      {/* <MyUseState004 /> */}
      {/* <MyUseState005/> */}
      {/* <MyUseState006 /> */}
      {/* <MyuseRef001 /> */}
      {/* <MyuseRef002 /> */}
      {/* <MyUseEffect001 /> */}
      {/* <MyUseStateSync001 /> */}
      {/* <MyuseStateSync002 /> */}
      {/* <MyuseStateSync003 /> */}
      {/* <MyuseStateSync004 /> */}
      {/* <Myprops001 name="홍길동" /> */}
      {/* <Myprops002 name="홍길동" age="30" loc="서울" /> */}
      {/* <MyuseContext01 /> */}
      {/* < MyuseReducer01 /> */}
      {/* <MyuseReducer02 /> */}
      <Provider store={store}>
        <MyReduxToolkit01 />
      </Provider>








    </div>
  );
}

export default App;
