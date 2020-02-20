import {GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText, GoLogoLoHTML} from './GoLogoLoConstants.js'
import {AppsterHTML, AppsterSymbols} from '../appster/AppsterConstants.js'
import AppsterView from '../appster/AppsterView.js'

export default class GoLogoLoView extends AppsterView {
    constructor() {
        super();
    }

    buildAppsterChangeTextInputModal(){
        let textModal = this.buildElement(  GoLogoLoHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL],
                                            [],
                                            null,
                                            GoLogoLoGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement( GoLogoLoHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_FRAME,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_FRAME]);
        let header = this.buildElement( GoLogoLoHTML.HEADER, 
                                        GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_HEADER,
                                        [GoLogoLoGUIClass.GOLOGOLO_MODAL_HEADER]);
        let section = this.buildElement(    GoLogoLoHTML.SECTION, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_SECTION,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_SECTION]);
        let p = this.buildElement(GoLogoLoHTML.P);
        let strong = this.buildElement(    GoLogoLoHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_PROMPT_TEXT);
        let textFieldAttributes = [];
        textFieldAttributes[GoLogoLoHTML.TYPE] = GoLogoLoHTML.TEXT;
        let textField = this.buildElement(  GoLogoLoHTML.INPUT,
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_TEXTFIELD],
                                            textFieldAttributes);
        let enterButton = this.buildElement(   GoLogoLoHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_BUTTON],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(GoLogoLoHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_BUTTON],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(     GoLogoLoHTML.FOOTER, 
                                            "", 
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_FOOTER],
                                            [],
                                            GoLogoLoText.GOLOGOLO_TEXT_INPUT_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        return textModal;
    }

    fillAppWorkspace(workspace) {
        let colorPickerAttributes = [];
        colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
        let rangeAttributes = [];
        rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

        // FIRST MAKE THE TOOLBAR
        let toolbar = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TOOLBAR);
        let editTextButton = this.buildElement(AppsterHTML.BUTTON, GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, [], [], GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT);
        editTextButton.innerHTML = "Edit Text " + AppsterSymbols.EDIT;
        let fontSizeSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, [], rangeAttributes);
        let textColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, [], colorPickerAttributes);
        let backgroundColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, [], colorPickerAttributes);
        let borderColorPicker = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, [], colorPickerAttributes);
        let borderRadiusSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, [], rangeAttributes);
        let borderThicknessSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, [], rangeAttributes);
        let paddingSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, [], rangeAttributes);
        let marginSlider = this.buildElement(AppsterHTML.INPUT, GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, [], rangeAttributes);
        let textDiv = this.buildElement(AppsterHTML.DIV, GoLogoLoGUIId.GOLOGOLO_TEXT);
        let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
        toolbar.appendChild(editTextButton);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT));
        toolbar.appendChild(fontSizeSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT));
        toolbar.appendChild(textColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT));
        toolbar.appendChild(backgroundColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT));
        toolbar.appendChild(borderColorPicker);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT));
        toolbar.appendChild(borderRadiusSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT));
        toolbar.appendChild(borderThicknessSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_PADDING_TEXT));
        toolbar.appendChild(paddingSlider);
        toolbar.appendChild(this.buildElement(AppsterHTML.BR));
        toolbar.appendChild(this.buildElement(AppsterHTML.SPAN, "", promptClass, [], GoLogoLoText.GOLOGOLO_MARGIN_TEXT));
        toolbar.appendChild(marginSlider);

        workspace.appendChild(toolbar);
        workspace.appendChild(textDiv);
        return workspace;
    }

    loadWork(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.innerHTML = work.getText();
        let fontSizeSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
        fontSizeSlider.value = work.getFontSize();
        let textColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
        textColorPicker.value = work.getTextColor();
        let backgroundColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER);
        backgroundColorPicker.value = work.getBackgroundColor();
        let borderColorPicker = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
        borderColorPicker.value = work.getBorderColor();
        let borderRadiusSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderRadiusSlider.value = work.getBorderRadius();
        let borderThicknessSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER);
        borderThicknessSlider.value = work.getBorderThickness();
        let paddingSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
        paddingSlider.value = work.getPadding();
        let marginSlider = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
        marginSlider.value = work.getMargin();
        this.loadWorkStyle(work);
    }

    loadWorkStyle(work) {
        let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
        textDiv.style.color = work.getTextColor();
        textDiv.style.backgroundColor = work.getBackgroundColor();
        textDiv.style.borderColor = work.getBorderColor();
        textDiv.style.borderRadius = work.getBorderRadius();
        textDiv.style.borderThickness = work.getBorderThickness();
    }

    addListItem(initText) {
        let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
        let listItemCount = textList.childNodes.length;
        let newListItem = this.buildElement(AppsterHTML.LI, RTA_GUIId.RTA_TEXT_LIST_ITEM 
            + listItemCount);
        newListItem.innerHTML = initText;
        textList.appendChild(newListItem);
    }

    appendLetter(listItemId, letterToAppend) {
        let textList = document.getElementById(listItemId);
        textList.innerHTML += textList.innerHTML + letterToAppend;
    }

    buildGoLogoLoChangeTextInputModal() {
        let textModal = this.buildElement(  GoLogoLoHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL],
                                            [],
                                            null,
                                            GoLogoLoGUIClass.MODAL_ANIMATION_LEFT);
        let textFrame = this.buildElement( GoLogoLoHTML.DIV, 
                                            GoLogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_FRAME,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_FRAME]);
        let header = this.buildElement( GoLogoLoHTML.HEADER, 
                                        GoLogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_HEADER,
                                        [GoLogoLoGUIClass.GOLOGOLO_MODAL_HEADER]);
        let section = this.buildElement(    GoLogoLoHTML.SECTION, 
                                            GoLogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_SECTION,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_SECTION]);
        let p = this.buildElement(GoLogoLoHTML.P);
        let strong = this.buildElement(    GoLogoLoHTML.STRONG, 
                                                "",
                                                [],
                                                [],
                                                GOLOGOLOText.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_PROMPT_TEXT);
        let textFieldAttributes = [];
        textFieldAttributes[GoLogoLoHTML.TYPE] = GoLogoLoHTML.TEXT;
        let textField = this.buildElement(  GoLogoLoHTML.INPUT,
                                            G0LogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_TEXTFIELD,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_TEXTFIELD],
                                            textFieldAttributes);
        let enterButton = this.buildElement(   GoLogoLoHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_ENTER_BUTTON,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_BUTTON],
                                            [],
                                            GOLOGOLOText.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT);
        let cancelButton = this.buildElement(GoLogoLoHTML.BUTTON, 
                                            GoLogoLoGUIId.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_CANCEL_BUTTON,
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_BUTTON],
                                            [],
                                            GOLOGOLOText.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT);
        let footer = this.buildElement(     GoLogoLoHTML.FOOTER, 
                                            "", 
                                            [GoLogoLoGUIClass.GOLOGOLO_MODAL_FOOTER],
                                            [],
                                            GOLOGOLOText.GOLOGOLO_CHANGE_TEXT_INPUT_MODAL_FOOTER_TEXT);
        p.appendChild(strong);
        section.appendChild(p);
        textFrame.appendChild(header);
        textFrame.appendChild(section);
        section.appendChild(textField);
        section.appendChild(enterButton);
        section.appendChild(cancelButton);
        textFrame.appendChild(footer);
        textModal.appendChild(textFrame);
        return textModal;
    }

    showChangeTextInputDialog(){
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        let text = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD);
        text.value = "";
        dialog.classList.add(GoLogoLoGUIClass.IS_VISIBLE);
    }

    hideChangeTextInputDialog(){
        let dialog = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
        dialog.classList.remove(GoLogoLoGUIClass.IS_VISIBLE);
    }
 
}