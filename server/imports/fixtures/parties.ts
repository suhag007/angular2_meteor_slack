import { Parties } from '../../../both/collections/parties.collection';
import { Party } from '../../../both/models/party.model'; 
import { Message } from '../../../both/collections/message.collection';
export function loadParties() {
  if (Parties.find().cursor.count() === 0) {
   
  }
}