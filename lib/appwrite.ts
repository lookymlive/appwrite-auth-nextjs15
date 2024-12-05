import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6751e8f1001b0e5e14cb'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
