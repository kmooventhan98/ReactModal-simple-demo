import React, { useState } from 'react';
import './App.css';
import ReactModal from "react-modal"; //yarn add react-modal

ReactModal.setAppElement('#root')
 function App() {
   const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="App">
          <h1>Open Your Model Here</h1>
          <button onClick={()=>setModalIsOpen(true)}>Open</button>
            <ReactModal 
              isOpen={modalIsOpen} 
              onRequestClose={()=>setModalIsOpen(false)}//for Esc key and outof click to close
              shouldCloseOnOverlayClick={false} //disable outof click to close
              style={
                {
                  overlay: {
                    backgroundColor: 'grey'
                  },
                  content: {
                    color: 'orange'
                  }
                }
              }
              >
                <h2>This is modal</h2>
                <p>This is the content</p>
                <button onClick={()=>setModalIsOpen(false)}>Close(Esc)</button>
            </ReactModal>
      </div>
  )
}

export default App
