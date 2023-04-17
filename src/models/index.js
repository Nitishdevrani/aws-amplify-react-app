// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Images, Todo } = initSchema(schema);

export {
  Images,
  Todo
};