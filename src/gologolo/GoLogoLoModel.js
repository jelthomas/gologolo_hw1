import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoLogo(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    
    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    editTextColor(textColor){
        let work = this.recentWork[0];
        work.setTextColor(textColor);
    }

    editFontSize(font){
        let work = this.recentWork[0];
        console.log(this.recentWork[0].getFontSize() + " " + this.recentWork[1].getFontSize() + " " + this.recentWork[2].getFontSize());
        work.setFontSize(font);
        console.log(this.recentWork[0].getFontSize() + " " + this.recentWork[1].getFontSize() + " " + this.recentWork[2].getFontSize());
    }

    editBackgroundColor(backgroundColor){
        let work = this.recentWork[0];
        work.setBackgroundColor(backgroundColor);
    }

    editBorderColor(borderColor){
        let work = this.recentWork[0];
        work.setBorderColor(borderColor);
    }

    editBorderWidth(width){
        let work = this.recentWork[0];
        work.setBorderThickness(width);
    }

    editBorderRadius(radius){
        let work = this.recentWork[0];
        work.setBorderRadius(radius);
    }

    editPadding(input){
        let work = this.recentWork[0];
        work.setPadding(input);
    }

    editMargin(input){
        let work = this.recentWork[0];
        work.setMargin(input);
    }

    editText(text){
        let work = this.recentWork[0];
        work.setText(text);
    }

}