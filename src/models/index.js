// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserDataModel, ModelProduct } = initSchema(schema);

export {
  UserDataModel,
  ModelProduct
};