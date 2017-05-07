import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerElements = [{type: 'Database Server', name: 'Server1'}];
  ServerAdded(serverData:{serverName: string, serverType: string}){
    this.ServerElements.push({
      type:serverData.serverType,
      name:serverData.serverName
    })
  }
}
