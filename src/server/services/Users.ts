import { IUsersServer } from '../../shared/proto/users_grpc_pb';
import { UserRequest, User, UserStatus } from './../../shared/proto/users_pb';
import {
  handleClientStreamingCall,
  handleServerStreamingCall,
  handleUnaryCall,
  sendUnaryData,
  ServerUnaryCall,
} from 'grpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import faker from 'faker';
export class UsersServer implements IUsersServer {
  getUser: handleUnaryCall<UserRequest, User> = (
    call: ServerUnaryCall<UserRequest>,
    callback: sendUnaryData<User>
  ) => {
    const userId = call.request.getId();
    const user = new User();
    user.setAge(faker.datatype.number(70));
    user.setStatus(UserStatus.OFFLINE);
    user.setId(userId);
    user.setName(faker.name.firstName());
    // console.log('retornando o usuário');
    callback(null, user);
  };
  createUser: handleClientStreamingCall<User, Empty> = () => {};
  getUsers: handleServerStreamingCall<Empty, User> = () => {};
}
