import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function DropdownMenu() {
   const navigate = useNavigate(); 
 //const [selected, setSelected] = useState('');
  function handleChange(event) {
    const value = event.target.value;
   
    navigate('/list'+ (value ? `?propertytype=${value}` : ''))
  }

  return (
    <select  onChange={handleChange}>
      <option value="">Vælg kategori</option>
      <option value="Villa">Villa</option>
      <option value="Landejendom">Landejendom</option>
      <option value="Ejerlejlighed">Ejerlejlighed</option>
      <option value="Andelsbolig">Andelsbolig</option>
      <option value="Rækkehus">Rækkehus</option>
      <option value="Fritidshus">Fritidshus</option>
      <option value="Grund">Grund</option>
      <option value="Kommersiel">Kommersiel</option>
      <option value="Byhus">Lejlighed</option>
      <option value="Andet">Andet</option>
    </select>
  );
}