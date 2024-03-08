import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '65eb5d61ee2f9a2e5f4f'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('65eb5d61ee2f9a2e5f4f');    

export const account = new Account(client);

export default client;