import UserModule from './user';
import GlobalModule from './global';
import { readOnly } from 'vue';

export default readOnly({
  User: UserModule,
  Global: GlobalModule
});
