// import { User, UserStatus } from "../shared/proto/users_pb";
import getUser from './User';

async function run() {
  setInterval(async () => {
    const user = await getUser(1);
    console.log(user.toString());
  }, 1);

  // const jim = new User();
  // jim.setName("Jim");
  // jim.setAge(10);
  // jim.setId(20);
  // jim.setStatus(UserStatus.OFFLINE);
  // createUsers([jim]);
  // console.log(`\nCreated user ${jim.toString()}`);
}

run();
