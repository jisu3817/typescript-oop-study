class NetworClinet {
  tryConnect(): void {
    throw new Error('no network!');
  }
}

class UserService {
  constructor(private client: NetworClinet) {}

  login() {
    this.client.tryConnect();
  }
}

const client = new NetworClinet();
const service = new UserService(client);

service.login();
