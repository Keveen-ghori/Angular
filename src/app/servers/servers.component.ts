import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  server: string = 'Create Server';
  serverName: string = 'myServer';
  getServersStatus = () => {
    return 'Hello, World';
  };

  createServer = () => {
    this.server = 'Server Created.';
  };

  updateServer = (event: any) => {
    console.log(event);
    this.serverName = event.target.value;
  };
}
