import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  /**
   *
   */
  userName:string|null = ""
  constructor(private route: ActivatedRoute) {
        
  }
  //ngOnInit(){
  // this.userName = this.route.snapshot.paramMap.get('name');
  // }
  // ngOnInit(){
  //   this.route.queryParams.subscribe(
  //     param =>{
  //       this.userName = param['name'];
  //     }
  //   )
  // }

  ngOnInit(){
    this.route.data.subscribe(data =>{
      this.userName = data['name'];
    })
  }

}
