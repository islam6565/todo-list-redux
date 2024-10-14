import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/todoSlicers/todoSlice';

const EditTask = ({todo}) => {
  const [show, setShow] = useState(false);

  const dispatch=useDispatch() 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setEdited] = useState({
    title: todo.title,
    description: todo.description})

  return (
    <div>
      <Button onClick={handleShow} className='c4'>
        EDIT TASK
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body
        className='inps' 
        >
          <input
            type="text"
            placeholder={todo.title}
       
            onChange={(e) => setEdited({ ...edited, title: e.target.value })}
          />

          <input
            type="text"
            placeholder={todo.description}
         
            onChange={(e) => setEdited({ ...edited, description: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(editTask({id:todo.id, edited}))}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;