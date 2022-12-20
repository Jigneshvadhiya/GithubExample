import { LightningElement } from 'lwc';

export default class GithubEx1 extends LightningElement {

    showName

    inputHandler(event){
        this.showName = event.target.value;
    }
}