import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from "react-router";

export default function DropdownMenu() {
  const navigate = useNavigate();
 // const [value, setValue] = useState('');
  let [searchParams, setSearchParams] = useSearchParams();

  // function handleChange(event) {
  //   const value = event.target.value;

  //   navigate('/list'+ (value ? `?propertytype=${value}` : ''))
  // }

  const handleChange = (event) => {
   const value = event.target.value;
   const current = Object.fromEntries(searchParams.entries());
   delete current.type_eq;
   console.log(current);
    // Update the search params with the new values
    setSearchParams({ ...current, type_eq : value });
  };

  return (
    <select onChange={handleChange}>
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