import queryClient from "../QueryClient";
import { redirect } from "react-router";
import { useLocation } from 'react-router';

//produkter
export async function getProducts({ request }) {
    const incomingurl = new URL(request.url);  // Create URL object from request URL
    console.log(incomingurl); // Output: URL object with the full URL
    const search = incomingurl.search;  // URLSearchParams instance
  
    // const token = sessionStorage.getItem("tokenLogin")
    // if (!token) redirect("/login")
    const  url = (`https://dinmaegler.onrender.com/homes` + search);
   
    console.log(`Fetching products with url: ${url}`);

    return queryClient.fetchQuery({
        queryKey: ['homes', url],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}

export async function getProductsNumber(number) {
    console.log(`Fetching ${number} products`);
    return queryClient.fetchQuery({
        queryKey: ['NumberOfHomes', number],
        queryFn: async () => {
            const response = await fetch('https://dinmaegler.onrender.com/homes?_limit=' + number);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}



//product
export async function getProduct({ params }) {
    console.log(params);
    const { id } = params;

    return queryClient.fetchQuery({
        queryKey: ['user', id],
        queryFn: async () => {
            const response = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}

