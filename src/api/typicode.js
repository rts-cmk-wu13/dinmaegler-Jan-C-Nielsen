import queryClient from "../QueryClient";
import { redirect } from "react-router";


//produkter
export async function getProducts({ request }) {
    const incomingurl = new URL(request.url);  // Create URL object from request URL
    const searchParams = incomingurl.searchParams;  // URLSearchParams instance
    const propertytype = searchParams?.get ? searchParams.get('propertytype') : undefined;
    console.log(`Selected property type: ${searchParams.get('propertytype')}`);
    // const token = sessionStorage.getItem("tokenLogin")
    // if (!token) redirect("/login")
    const  url = propertytype
        ? `https://dinmaegler.onrender.com/homes?type_eq=${encodeURIComponent(propertytype)}`
        : 'https://dinmaegler.onrender.com/homes';

    console.log(`Fetching products with url: ${url}`);

    return queryClient.fetchQuery({
        queryKey: ['homes', propertytype],
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
            const response = await fetch(`https://hifi-api-pzft.onrender.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });
}

