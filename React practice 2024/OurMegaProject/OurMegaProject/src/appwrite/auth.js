import conf from "../conf/Conf";
import { Client, Account, ID } from "appwrite";

// quality code  ho isiliye hum appwrite wala code nhi le rhe , alg or acha le rhe h


//  ye ek class bnayi or iska  ek object bnake use export kr dete h jisse is class ka sara maal object mai mil jaye

// hum resources waste nhi krna chahte isiliye appwrite k jo fnctions h unko hum use krenge construtor mai jisse 
// jb bji object bne tb apne aap constructir chale or tb wo client or account bne or wo appwrite wale function chale
// ye h appwrite ka code 


//import { Client, Account, ID } from "appwrite";

// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');                 // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );

// hum ye sb itte ache se isiliye bna rhe h jisse appwrite pr depend na rhe upr se ek rappper ho  under hum kuch bhi use 
// firebase appwrite kuchh bhi jaise abhii appwrite 
export class AuthService{

     client = new Client();
     account;

     constructor (){
        this.client.setEndpoint(conf.appWriteUrl) 
          .setProject(conf.ProjectID);

          this.account = new Account(this.client);
     }

     // create account ka bhi hum ek noon dependent function bna rhe h

     async createAccount({email,password,name}){
     
         const userAccounnt =await this.account.create(ID.unique(),email,password,name);
         if(userAccounnt){
          // call lohin function 
         return this.Login({email,password})
         }else {
          return userAccounnt;
         }
 
     }
     async Login({email,password}){
        return await this.account.createEmailPasswordSession(email,password);

     }

     async getCurrentUser(){
         return await this.account.get();
     }

     async logout(){
          await this.account.deleteSessions();
     }
}

const authService = new AuthService();

export default authService;