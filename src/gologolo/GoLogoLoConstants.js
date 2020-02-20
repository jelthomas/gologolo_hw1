export const GoLogoLoDefaults = {
    GOLOGOLO_DEFAULT_TEXT: "GoLogoLo",
    GOLOGOLO_DEFAULT_FONT_SIZE: "20pt",
    GOLOGOLO_DEFAULT_TEXT_COLOR: "#000000",
    GOLOGOLO_DEFAULT_BACKGROUND_COLOR: "#cccc44",
    GOLOGOLO_DEFAULT_BORDER_COLOR: "#444444",
    GOLOGOLO_DEFAULT_BORDER_RADIUS: 5,
    GOLOGOLO_DEFAULT_BORDER_THICKNESS: 2,
    GOLOGOLO_DEFAULT_BORDER_TYPE: "solid",
    GOLOGOLO_DEFAULT_PADDING: 5,
    GOLOGOLO_DEFAULT_MARGIN: 10,
};

export const GoLogoLoGUIClass = {
    GOLOGOLO_CONTROL_PROMPT: 'gologolo_control_prompt',

    // CLASSES FOR MODALS
    GOLOGOLO_MODAL: "appster_modal",
    GOLOGOLO_MODAL_FRAME: "appster_modal_frame",
    GOLOGOLO_MODAL_HEADER: "appster_modal_header",
    GOLOGOLO_MODAL_SECTION: "appster_modal_section",
    GOLOGOLO_MODAL_TEXTFIELD: "appster_modal_textfield",
    GOLOGOLO_MODAL_BUTTON: "appster_modal_button",
    GOLOGOLO_MODAL_FOOTER: "appster_modal_footer",

    IS_VISIBLE: "is_visible",

    // MODAL ANIMATION CLASS
    MODAL_ANIMATION_LEFT: "modal_animation_left"
};

export const GoLogoLoGUIId = {
    GOLOGOLO_TOOLBAR: "gologolo_toolbar",
    GOLOGOLO_EDIT_TEXT_BUTTON: "gologolo_edit_text_button",
    GOLOGOLO_FONT_SIZE_SLIDER: "gologolo_font_size_slider",
    GOLOGOLO_TEXT_COLOR_PICKER: "gologolo_text_color_picker",
    GOLOGOLO_BACKGROUND_COLOR_PICKER: "gologolo_background_color_picker",
    GOLOGOLO_BORDER_COLOR_PICKER: "gologolo_border_color_picker",
    GOLOGOLO_BORDER_RADIUS_SLIDER: "gologolo_border_radius_slider",
    GOLOGOLO_BORDER_THICKNESS_SLIDER: "gologolo_border_thickness_slider",
    GOLOGOLO_PADDING_SLIDER: "gologolo_padding_slider",
    GOLOGOLO_MARGIN_SLIDER: "gologolo_margin_slider",
    GOLOGOLO_TEXT: "gologolo_text",

    GOLOGOLO_TEXT_INPUT_MODAL: 'gologolo_text_input_modal',
    GOLOGOLO_TEXT_INPUT_MODAL_FRAME: 'gologolo_text_input_modal_frame',
    GOLOGOLO_TEXT_INPUT_MODAL_HEADER: 'gologolo_text_input_modal_header',
    GOLOGOLO_TEXT_INPUT_MODAL_SECTION: 'gologolo_text_input_modal_section',
    GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD: "gologolo_text_input_modal_textfield",
    GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON: 'gologolo_text_input_modal_enter_button',
    GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON: 'gologolo_text_input_modal_cancel_button',
    GOLOGOLO_TEXT_INPUT_MODAL_FOOTER: 'gologolo_text_input_modal_footer'
};

export const GoLogoLoText = {
    GOLOGOLO_EDIT_TEXT_TEXT: "gologolo_edit_text_text",
    GOLOGOLO_FONT_SIZE_TEXT: "gologolo_font_size_text",
    GOLOGOLO_TEXT_COLOR_TEXT: "gologolo_text_color_text",
    GOLOGOLO_BACKGROUND_COLOR_TEXT: "gologolo_background_color_text",
    GOLOGOLO_BORDER_COLOR_TEXT: "gologolo_border_color_text",
    GOLOGOLO_BORDER_RADIUS_TEXT: "gologolo_border_radius_text",
    GOLOGOLO_BORDER_THICKNESS_TEXT: "gologolo_border_thickness_text",
    GOLOGOLO_PADDING_TEXT: "gologolo_padding_text",
    GOLOGOLO_MARGIN_TEXT: "gologolo_margin_text",

    GOLOGOLO_TEXT_INPUT_MODAL_PROMPT_TEXT: "gologolo_text_input_modal_prompt_text",
    GOLOGOLO_TEXT_INPUT_MODAL_ENTER_BUTTON_TEXT: "gologolo_text_input_modal_enter_button_text",
    GOLOGOLO_TEXT_INPUT_MODAL_CANCEL_BUTTON_TEXT: "gologolo_text_input_modal_cancel_button_text",
    GOLOGOLO_TEXT_INPUT_MODAL_FOOTER_TEXT: "gologolo_text_input_modal_footer_text"
}

/**
 * GoLogoLoHTML - these are html elements, attributes, and events that will be needed
 * to generate the appropriate text for our site pages.
 */
export const GoLogoLoHTML = {
    A: "a",
    BR: "br",
    BUTTON: "button",
    CHANGE: "change",
    CLASS: "class",
    CLICK: "click",
    COLOR: "color",
    DATA_ANIMATION: "data-animation",
    DIV: "div",
    HEADER: "header",
    H1: "h1", H2: "h2", H3: "h3", H4: "h4", H5: "h5", H6: "h6",  
    HIDDEN: "hidden",
    ID: "id",
    INPUT: "input",
    KEYUP: "keyup",
    LI: "li",
    ONCLICK: "onclick",
    P: "p",
    RANGE: "range",
    SECTION: "section",
    SELECTION: "selection",
    SPAN: "span",
    STRONG: "strong",
    TEXT: "text",
    TYPE: "type",
    UL: "ul"
};

/**
 * GoLogoLoCallback - these are the functions we'll define that will be
 * called in response to interactions with GUI controls.
 */
export const GoLogoLoCallback = {
    GOLOGOLO_PROCESS_CHANGE_TEXT_COLOR: "processChangeTextColor",
    GOLOGOLO_PROCESS_CHANGE_FONT_SIZE: "processChangeFontSize",
    GOLOGOLO_PROCESS_CHANGE_TEXT: "processChangeText",
    GOLOGOLO_PROCESS_CHANGE_BACKGROUND_COLOR: "processChangeBackgroundColor",
    GOLOGOLO_PROCESS_CHANGE_BORDER_COLOR: "processChangeBorderColor",
    GOLOGOLO_PROCESS_CHANGE_BORDER_WIDTH: "processChangeBorderWidth",
    GOLOGOLO_PROCESS_CHANGE_BORDER_RADIUS: "processChangeBorderRadius",
    GOLOGOLO_PROCESS_CHANGE_PADDING: "processChangePadding",
    GOLOGOLO_PROCESS_CHANGE_MARGIN: "processChangeMargin",
    GOLOGOLO_PROCESS_CHANGE_TEXT: "processChangeText",
    GOLOGOLO_PROCESS_LOGO_TEXT: "processConfirmTextChange",
    GOLOGOLO_PROCESS_CANCEL_LOGO_TEXT: "processCancelTextChange",
    GOLOGOLO_PROCESS_TEMP_LOGO_TEXT: "processTempTextChange"
};