import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AddForm from './Components/AddForm';
import TableData from './Components/TableData';
function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    <div style={{backgroundColor:'green'}}>
      <Button style={{marginLeft:'12px',margin:"10px"}}variant="primary" onClick={() => setModalShow(true)}>
        Add Task
      </Button>
      </div>
      <AddForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <TableData/>
    
    </>
  );
}

export default App;
