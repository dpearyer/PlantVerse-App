import { Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
    selector:'app-search',
    templateUrl:'./search.component.html',
    styleUrls:['./search.component.css']
})
export class SearchComponent implements OnInit{
    constructor(){}
        ngOnInit():void{

        }
    enteredValue: string='';


    @Output()
    textChanged: EventEmitter<string>=new EventEmitter<string>();
    onTextChanged(){
        this.textChanged.emit(this.enteredValue);
    }
}