import queryClient from "../QueryClient";
import { redirect } from "react-router";


//produkter
export async function getProducts() {
    // const token = sessionStorage.getItem("tokenLogin")
    // if (!token) redirect("/login")

    return queryClient.fetchQuery({
        queryKey: ['home'],
        queryFn: async () => {
            const response = await fetch('https://dinmaegler.onrender.com/homes?_limit=4');
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

