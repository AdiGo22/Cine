import { Client, Databases, ID, Query } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASEID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTIONID!;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);
 
export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      await database.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        }
      );
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        title: movie.title,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error("Error updating search count:", error);
    throw error;
  }
};
    //check if a record of that search has already been stord.
   //if a document is found , increemnt the searchCount field
   //if not , create a new document in Appwrite database 
    

   export const getTrendingMovies = async () : Promise<TrendingMovie[] | undefined> => {
    try{ 
        const result = await database.listDocuments(DATABASE_ID,COLLECTION_ID,[
            Query.limit(5), //first 5 trending movies as per the Database only
            Query.orderDesc('count'), //Order descending based on count , number of times searched
        ])

        return result.documents as unknown as TrendingMovie[];
    }
    catch(e) {
        console.log(e);
        return undefined;
    }
   }