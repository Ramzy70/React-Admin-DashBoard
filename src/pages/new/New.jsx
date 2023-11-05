import {React , useState } from 'react'
import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DriveFolderUploadOutlinedIcon  from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs , title}) => {

  const [file,setFile] = useState("")

  file && console.log(URL.createObjectURL(file))

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          { file ?<img src={URL.createObjectURL(file)} alt="" className='imag'/> : <InsertPhotoIcon className='imag'/>}
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image : <DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input 
                  type="file" 
                  id="file" 
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{display:"none"}}
                />
              </div>
              {inputs.map((i) => (
                <div className="formInput" key={i.id}>
                  <label htmlFor="">{i.label} </label>
                  <input type={i.type} placeholder={i.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
