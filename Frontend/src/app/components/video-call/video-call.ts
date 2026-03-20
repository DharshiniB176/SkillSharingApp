import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-video-call',
  imports: [],
  standalone: true,
  templateUrl: './video-call.html',
  styleUrl: './video-call.scss',
})
export class VideoCall {


  roomName!: string;

  constructor(private route: ActivatedRoute,private router: Router  ) {}

  ngOnInit() {

    this.roomName = this.route.snapshot.paramMap.get('room') || 'skillshare-room';

    const domain = "meet.jit.si";

    const options = {
      roomName: this.roomName,
      width: "100%",
      height: 600,
      parentNode: document.querySelector('#jitsi-container'),
    };

    new JitsiMeetExternalAPI(domain, options);

  }


  startCall(request: any) {

  const room = `skillshare-${request.id}`;

  this.router.navigate(['/call', room]);

}
}
