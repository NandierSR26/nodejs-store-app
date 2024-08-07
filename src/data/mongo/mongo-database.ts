import mongoose from "mongoose";

interface Options {
  mongorUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { mongorUrl, dbName } = options;

    try {
      await mongoose.connect(mongorUrl, {
        dbName,
      });
      return true;
    } catch (error) {
      console.log("Mongo connection error");
      throw error;
    }
  }
}
