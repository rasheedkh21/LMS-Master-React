import React from 'react';
import Popup from 'reactjs-popup';
import "../../index.css"
import { Button} from '@mui/material';


const PopUp = () => {
  return (
 <Popup
    trigger={<Button className="edit-profile" variant="contained">Edit Information</Button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="content">
            <div style={{display: 'flex'}}>
              <div>
              <label>Names:</label>
              <input style={{marginTop: '10px'}} className='popUp-input' type="text" />
              </div>
              <button className="close" onClick={close}>
                <img src="" alt="" />
              </button>
            </div>
            <label>Surnames:</label>
            <input className='popUp-input' type="text" />
            <label>Contact number:  </label>
            <input className='popUp-input' type="text" />
            <div style={{display: 'flex', gap: 20}}>
               <div style={{display: 'flex', flexDirection: 'column'}}> 
                 <label>Region:</label>
                 <input className='popUp-miniInput'  type="text" />
               </div>
               <div style={{display: 'flex', flexDirection: 'column'}}> 
                  <label>Commune:</label>
                  <input className='popUp-miniInput' type="text" />
               </div>
            </div>
            <label>Address:</label>
            <input className='popUp-input' type="text" />
            <Button  sx={{borderRadius:50, margin: "20px 0px 0px 170px"}} className="popUp-button" variant="contained">Save</Button>
        </div>
      </div>
    )}
  </Popup>
  )
}

export default PopUp;
