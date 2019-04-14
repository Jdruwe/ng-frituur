import {ID} from '@datorama/akita';

export interface Snack {
  id: ID;
  name: string;
}

export function createSnack(params: Partial<Snack>) {
  return {} as Snack;
}
