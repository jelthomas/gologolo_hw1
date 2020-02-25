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
    eventHandler(id, eventName, callback) {
        // GET THE CONTROL IN THE GUI WITH THE CORRESPONDING id
        let control = document.getElementById(id);

        // AND SETUP THE CALLBACK FOR THE SPECIFIED EVENT TYPE
        if (control)
            control.addEventListener(eventName, callback);
    }

    registerOtherEventHandlers() {
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, GoLogoLoHTML.CHANGE, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_TEXT_COLOR]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_TEXT_COLOR]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_FONT_SIZE]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, GoLogoLoHTML.CHANGE, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_BACKGROUND_COLOR]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_BACKGROUND_COLOR]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, GoLogoLoHTML.CHANGE, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_BORDER_COLOR]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_BORDER_COLOR]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_BORDER_WIDTH]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_BORDER_RADIUS]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_PADDING]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_MARGIN]);  
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_TEXT]);      
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_CANCEL_LOGO_TEXT]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON, GoLogoLoHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_LOGO_TEXT]);
        this.eventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_TEMP_LOGO_TEXT]);
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

    processChangeBackgroundColor= () => {
        let backgroundColorField = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        let backgroundColor = backgroundColorField.value;
        this.model.editBackgroundColor(backgroundColor);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.backgroundColor = backgroundColor;
    }

    processChangeBorderColor= () => {
        let borderColorField = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        let borderColor = borderColorField.value;
        this.model.editBorderColor(borderColor);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.borderColor = borderColor;
    }

    processChangeFontSize= () => {
        let fontSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        let font = fontSlider.value 
        if(font <= 5){
            font = 5;
        }
        font = font*2 + "pt";
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        console.log(this.model.recentWork[0].getFontSize());
        text.style.fontSize = font;
        console.log(text.style.fontSize);
        this.model.editFontSize(font);
        console.log(text.style.fontSize);
    }

    processChangeBorderWidth= () => {
        let borderSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER);
        let input = borderSlider.value;
        input = input/2 + "pt";
        this.model.editBorderWidth(input);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.borderWidth = input;
    }

    processChangeBorderRadius= () => {
        let borderSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        let input = borderSlider.value;
        input = input*1.5 + "pt";
        this.model.editBorderRadius(input);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.borderRadius = input;
    }

    processChangeText= () => {
        this.text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT).innerHTML;
        this.model.view.showChangeTextInputDialog();
    }

    processCancelTextChange= () =>{
        let logoText = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        logoText.innerHTML = this.text;
        this.model.view.hideChangeTextInputDialog();
    }

    processConfirmTextChange= () =>{
        let nameTextField = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD);
        let newName = nameTextField.value;
        this.model.editText(newName);
        let logoText = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        logoText.innerHTML = newName;
        this.model.view.hideChangeTextInputDialog();
    }

    processTempTextChange = () =>{
        let nameTextField = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD);
        let newName = nameTextField.value;
        let logoText = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        logoText.innerHTML = newName;
    }

    processChangePadding= () => {
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        let input = paddingSlider.value;
        input = input + "pt";
        this.model.editPadding(input);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.padding = input;
    }

    processChangeMargin= () => {
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        let input = marginSlider.value;
        input = input + "pt";
        this.model.editMargin(input);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        text.style.margin = input;
    }

}




