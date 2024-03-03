
import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

const ModalHome = () => {
  const [modal,setModal] = useState(false)
  console.log(modal);
  
  const handleModalClose = ()=>{
    setModal((prev)=> !prev)
    
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    console.log('clickefd');
    
  }
  return (
    <div>
<Container>
<div className="h-screen w-full flex justify-center items-center ">
<Button onClick={()=>setModal((prev)=> !prev)} variant='ghost' title="Open Modal"></Button>
<Modal isOpen={modal}  onClose={handleModalClose}>
  <Modal.Header>
    <h2>This is modal</h2>
  <Modal.CloseButton />
  </Modal.Header>
  <p>Modal element</p>
  <form onSubmit={handleSubmit}> 
  <input type="text" />
<button type="submit">Submit </button>
  </form>
</Modal>
</div>
</Container>
    </div>
  );
};

export default ModalHome;