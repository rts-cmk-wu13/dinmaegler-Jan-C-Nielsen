import ListNavigation from "../components/List/ListNavigation";
import ProductRendering from "../components/List/ProductRendering";
import { useLoaderData } from "react-router";

import DropdownMenu from "../components/List/DropdownMenu";
import { useLocation } from 'react-router';

export default function List() {

  const products = useLoaderData();
 
  return (
    <>
      <section className="list">
        <ProductRendering data={products} />
      </section>
    
    </>
  );
}
