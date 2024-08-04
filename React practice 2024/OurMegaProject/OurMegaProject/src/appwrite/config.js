import conf from "../conf/Conf";
import { Client, ID, Databases, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appWriteUrl).setProject(conf.ProjectID);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userID }) {
    return await this.databases.createDocument(
      conf.DatabaseID,
      conf.CollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
        userID,
      }
    );
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    return await this.databases.updateDocument(
      conf.DatabaseID,
      conf.CollectionId,
      slug,
      {
        title,
        content,
        featuredImage,
        status,
      }
    );
  }
  // yha usne return nhi kiya try k bahar true kiya h or maine object bheja h
  async deletePost(slug) {
    return await this.databases.deleteDocument(
      conf.DatabaseID,
      conf.CollectionId,
      slug
    );
  }
  async getPost(slug) {
    return await this.databases.getDocument(
      conf.DatabaseID,
      conf.CollectionId,
      slug
    );
  }
  async getPosts(queries = [Query.equal("status", "activee")]) {
    return await this.databases.listDocuments(
      conf.DatabaseID,
      conf.CollectionId,
      queries
    );
  }

// file upload service 

async uploadFile(file){
  return this.bucket.createFile(
    conf.BucketId,
    ID.unique(),
    file

  )
}

async deleteFile(fileId){
  await this.bucket.deleteFile(
    conf.BucketId,
    fileId
  )

}

getFilePreview(fileId){
  return this.bucket.getFilePreview(conf.appWriteUrl,
    fileId
  )

}
}

const service = new Service();

export default service;
