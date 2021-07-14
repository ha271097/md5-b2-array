import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public checkSnt(snt:number) : boolean{
  
    if(snt == 2 || snt == 3){
      return true;
    }
    if(snt <= -1){
      return false;
    } 
    for (let i = 2; i < Math.sqrt(snt); i++){
      if(snt % i == 0){
        return false;
      }
    }
    return true;
  }
  public sumSnt(): number{
    let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
    let sum = 0;
    for (let  i = 0 ; i < array.length ; i ++){
      if(this.checkSnt(array[i])){
        sum += array[i];
      }
    }
    console.log(sum)
    return sum;
  }
  total : number = this.sumSnt();

}
