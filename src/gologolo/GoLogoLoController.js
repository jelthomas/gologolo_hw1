import AppsterController from '../appster/AppsterController.js'
import {GoLogoLoCallback, GoLogoLoGUIId, GoLogoLoHTML} from './GoLogoLoConstants.js'
export default class GoLogoLoController
 extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

        /**
     * This function helps the constructor setup the event handlers for all controls.
     * 
     * @param {GoLogoLoGUIId} id Unique identifier for the HTML control on which to
     * listen for events.
     * @param {GoLogoLoHTML} eventName The type of control for which to respond.
     * @param {GoLogoLoCallback} callback The callback function to be executed when
     * the event occurs.
     */
    registerEventHandler(id, eventName, callback) {
        // GET THE CONTROL IN THE GUI WITH THE CORRESPONDING id
        let control = document.getElementById(id);

        // AND SETUP THE CALLBACK FOR THE SPECIFIED EVENT TYPE
        if (control)
            control.addEventListener(eventName, callback);
    }

    registerAppsterEventHandlers() {
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, GoLogoLoHTML.CHANGE, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_TEXT_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_TEXT_COLOR]);
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_FONT_SIZE]);
    }

    /**
    * This method sets up a callback method for an element, registering the
    * elementCallbackName (e.g. click) function for the element control in the DOM, specifying
    * callbackFunctionName as the method to be called when that event occurs. The
    * args array is used to pass needed data to the callback.
    * 
    * @param {Element} element 
    * @param {String} elementCallbackName 
    * @param {String} callbackFunctionName 
    * @param {String[]} args 
    */
    setupCallback(element, elementCallbackName, callbackFunctionName, args) {
        let functionCallText = "this." + callbackFunctionName + "(";
        for (let i = 0; i < args.length; i++) {
            functionCallText += "'" + args[i] + "'";
            if (i < (args.length - 1)) {
                functionCallText += ", ";
            }
        }
        functionCallText += ")";
        element.setAttribute(elementCallbackName, functionCallText);
        return functionCallText;
    }

    processChangeTextColor= () => {
        let textColorField = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        let textColor = textColorField.value;
        this.model.editTextColor(textColor);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.color = textColor;
    }

    processChangeFontSize= () => {
        let fontSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        let font = fontSlider.value  
        if(font <= 5){
            font = "5pt";
        }
        font = font*2 + "pt";
        this.model.editFontSize(font);
        let logoFont = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        logoFont.style.fontSize = font;
    }

}




