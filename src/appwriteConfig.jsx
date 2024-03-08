import { Client, Account } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '65eb2fce2e91d5fcb8ac'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65eb2fce2e91d5fcb8ac');
export const account = new Account(client);

export default client;