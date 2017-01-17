export interface User {
    name: string; // required with minimum 5 chracters
    address?: {
        street?: string; // required
        postcode?: string;
    }
}