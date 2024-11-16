
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67387cce000a1242eda8'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
