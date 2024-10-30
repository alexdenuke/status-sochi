import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-bootstrap';
import { dataUnic } from './dataUnic';
import styled from 'styled-components';

const Styles = styled.div `
a {
padding: 6px;
text-decoration: none;
color: white;
}

a:hover {
color: black;
}

.cvet {
   background-color: #d4dde4;
  }

  
h2, h3, h4, p, li, ul {
color: white;
}

span {
float: right;
font-size: smaller;
text-decoration: none;
    color: #adb1b8;
    &:hover {
    color: black;
}
`




function PacetUnic() {

    const [show, setShow] = useState(false);
       
    const handlClick = () => {
      setShow(show => !show);
    };


  return (
    <Styles>
<div className="d-grid gap-0 col-6 mx-auto m-4 ">
<button className="btn btn-outline-light text-center" type="button"  onClick={ handlClick }>Эксклюзив дизайн проект - 7000 ₽/м2<span>развернуть</span></button>
{show && dataUnic.map ((element => {
      const {id,service} = element;
           
      return (  
        
        <ul key={id} controlId='fromBasicKvadrat'>
          <li>{service}</li>
        </ul>
        
        )
  }))}

  </div>
  </Styles>
)
}


export default PacetUnic;
