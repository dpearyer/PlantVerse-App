import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-plants',
    templateUrl: './plants.component.css',
    styleUrls: ['./plants.component.html']
})
export class PlantsComponent{
    plants=[
       { id:101, name:'Magnolia Tree', type: 'native-georgia',
        description:'about 225 species of trees and shrubs of the family Magnoliaceae native to North and South America, the Himalayas, and East Asia. They are valued for their large and fragrant white, yellow, pink, or purple flowers and frequently handsome leaves and unusual fruits. Some are important garden ornamentals; others are local timber sources.'},
        {
        id:102, name:'Kudzu', type: 'non-native-georgia',
        description:'When it comes to invasive species, nothing brings stress to a gardener quite like kudzu. The vine flowers during the midsummer and bears brown, hairy fruit. With roots that can weigh up to 400 pounds, kudzu can be a challenge to remove.'
        },
        {
        id:103, name:'Arrowwood Viburnu', type: 'native-georgia',
        description:'Arrowwood Viburnum is a deciduous flowering shrub with medium texture and medium growth rate. Upright branches form a spreading crown. Creamy-white flower clusters are borne in a flat head in May. Fall color ranges from yellow to red or purple. The leaves are a glossy, dark green.'
        },
        {
            id:104, name:'Japanese Honeysuckle', type: 'non-native-georgia',
        description:'Japanese honeysuckle, or Lonicera japonica, is a perennial vine that can reach over 80 feet in length. Flowering from April to July, this evergreen to semi-evergreen plant bears small, shiny fruit that ages from green to black. From forest floors to country roadsides, this vine can be found nearly anywhere in the Peach State.'
        },
        {
            id:105, name:'Mimosa', type: 'non-native-georgia',
        description:'Present in 94% of Georgia counties, the mimosa is a small tree native to Asia. The 10 to 15 foot tree has leaves that resemble a fern, and it grows fragrant, pink flowers in the early summer. During the late summer, it grows flat, long seed pods.' }


    ]


getTotalPlants(){
    return this.plants.length;
}

getTotalNativePlants(){

}
getTotalNonNativePlants(){

}
plantsRadioButton: string="All";
searchText: string='';

onRadioButtonChange(data:string){
    this.plantsRadioButton=data;
}


onTextChanged(searchValue: string){
    this.searchText=searchValue;
    //console.log(this.searchText);
}

}