import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import CircleType from 'circletype';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {


    /* Text curvature */
    const circleTitle = new CircleType(document.getElementById('curved-title'));
    circleTitle.radius(400).dir(1);

    const circleLoader = new CircleType(document.getElementById('curved-loader'));
    circleLoader.radius(400).dir(-1);

    /* Fake loader */
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 3000);
  }

}
