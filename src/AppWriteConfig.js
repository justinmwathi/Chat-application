import { Client ,Databases,Account} from 'appwrite';
export const PROJECT_ID='66a345db003d399ecb51'
export const DATABASE_ID='66a34aba001332a73511'
export const COLLECTION_ID_MESSAGES='66a34acb003c7cc68176'
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66a345db003d399ecb51');


export const databases=new Databases(client);
export const account=new Account(client)
export default client;