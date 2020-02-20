import {AppsterCallback, AppsterGUIId, AppsterHTML} from './AppsterConstants.js'
export default class AppsterController {
    constructor() {
        this.model = null;
    }

    setModel(initModel) {
        this.model = initModel;
    }

    /**
     * This function helps the constructor setup the event handlers for all controls.
     * 
     * @param {AppsterGUIId} id Unique identifier for the HTML control on which to
     * listen for events.
     * @param {AppsterHTML} eventName The type of control for which to respond.
     * @param {AppsterCallback} callback The callback function to be executed when
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
        // FIRST THE NEW WORK BUTTON ON THE HOME SCREEN
        this.registerEventHandler(AppsterGUIId.APPSTER_HOME_NEW_WORK_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CREATE_NEW_WORK]);

        // THEN THE CONTROLS ON THE EDIT SCREEN
        this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_HOME_LINK, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_GO_HOME]);
        this.registerEventHandler(AppsterGUIId.APPSTER_EDIT_TRASH, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_DELETE_WORK]);

        // AND THE MODAL BUTTONS
        this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_YES_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CONFIRM_DELETE_WORK]);
        this.registerEventHandler(AppsterGUIId.APPSTER_YES_NO_MODAL_NO_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CANCEL_DELETE_WORK]);
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_CANCEL_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CANCEL_LOGO_NAME]);
        this.registerEventHandler(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_ENTER_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_LOGO_NAME]);
        this.registerEventHandler(AppsterGUIId.APPSTER_CONFIRM_MODAL_OK_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_CONFIRM_MODAL]);
        this.registerEventHandler(AppsterGUIId.APPSTER_ILLEGAL_LENGTH_CONFIRM_MODAL_OK_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_ILLEGAL_LENGTH_CONFIRM_MODAL]);
    }

    //Overridden by child class
    registerOtherEventHandlers(){

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

    registerRecentWorkEventHandler(element) {
        element.addEventListener(AppsterHTML.CLICK, this.processEditWork);
    }

    /**
     * This function responds to when the user clicks on the
     * todo logo to go back to the home screen.
     */
    processGoHome = () => {
        console.log("processGoHome");
        this.model.goHome();
    }

    processGoEdit(workToEdit) {
        console.log("processGoEdit");
        this.model.goEdit(workToEdit);
    }

    /**
     * This function is called when the user requests to create
     * new work.
     */
    processCreateNewWork = () => {
        this.model.view.showTextInputDialog();
        // PROMPT FOR THE NAME OF THE NEW LIST
    }

    /**
     * This function responds to when the user clicks on a link
     * for recent work on the home screen.
     * 
     * @param {String} workName The name of the work to load into
     * the controls on the edit screen.
     */
    processEditWork = (event) => {
        // GET THE WORK THAT THE USER WANTS TO LOAD
        let clickedElement = event.target;
        let workName = clickedElement.workId;
        console.log(workName + " clicked");

        // START EDITING THE SELECTED WORK
        this.model.editWork(workName);
    }

    /**
     * This function responds to when the user clicks the No
     * button in the popup dialog after having requested to delete
     * the loaded work.
     */
    processCancelDeleteWork = () => {
        // JUST HIDE THE DIALOG
        this.model.view.hideDialog();

    }

    /**
     * This function responds to when the user clicks the Cancel
     * button in the popup dialog after having requested to set
     * the name of the logo.
     */
    processCancelLogoName = () => {
        // JUST HIDE THE DIALOG
        this.model.view.hideTextInputDialog();

    }

    /**
     * This function responds to when the user changes the
     * name of the list via the textfield.
     */
    processLogoName = () => {
        let nameTextField = document.getElementById(AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD);
        let newName = nameTextField.value;
        if(newName.length < 1){
            this.model.view.hideTextInputDialog();
            this.model.view.showIllegalLengthConfirmModalDialog();
            return;
        }
        this.model.goList(newName);
    }

    /**
     * This function responds to when the user clicks the Yes
     * button in the popup dialog after having requested to delete
     * the loaded work.
     */
    processConfirmDeleteWork = () => {
        // DELETE THE WORK
        this.model.removeWork(this.model.workToEdit);
        this.model.view.hideDialog();

        // GO BACK TO THE HOME SCREEN
        this.model.goHome();
    }

    /**
     * This function responds to when the user clicks the trash
     * button, i.e. the delete button, in order to delete the
     * list being edited.
     */
    processDeleteWork= () => {
        // VERIFY VIA A DIALOG BOX
        this.model.view.showDialog();
    }

    /**
     * This function responds to when the user clicks the ok
     * button in response to the duplicate Logo name error prompt.
     */
    processConfirmModal= () => {
        // VERIFY VIA A DIALOG BOX
        this.model.view.hideConfirmModalDialog();
        this.model.view.showTextInputDialog();
    }

    /**
     * This function responds to when the user clicks the ok
     * button in response to the illegal Logo name length error prompt.
     */
    processIllegalLengthConfirmModal= () => {
        // VERIFY VIA A DIALOG BOX
        this.model.view.hideIllegalLengthConfirmModalDialog();
        this.model.view.showTextInputDialog();
    }
}