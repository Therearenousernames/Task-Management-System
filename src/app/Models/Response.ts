import { Task } from './Task';

export interface Response {

  message: string;

  username: string;

  tasks: [Task];
}
