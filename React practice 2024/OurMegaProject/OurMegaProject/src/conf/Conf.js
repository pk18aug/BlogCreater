// ab result hmesa string mai aaega , galtia km hongi or kyi bar env upload hi nhi huyi waisa issue bhi nhi aaega A


const conf = {
    appWriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    ProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DatabaseID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    CollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    BucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf;