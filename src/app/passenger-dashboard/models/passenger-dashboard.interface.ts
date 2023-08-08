import { Children } from './passenger-children.interface';

export interface Passengers {
  id: number;
  name: string;
  tripDate: Date;
  fromLocation: string;
  toLocation: string;
  contactDetail: number;
  checkIn: boolean;
  children: Children;
}
