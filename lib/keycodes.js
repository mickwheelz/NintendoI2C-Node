/*
keycodes for linux 
adapted from: https://elixir.bootlin.com/linux/latest/source/include/uapi/linux/input-event-codes.h
*/

var keycodes = {};

keycodes.KEY_RESERVED=0;
keycodes.KEY_ESC=1;
keycodes.KEY_1=2;
keycodes.KEY_2=3;
keycodes.KEY_3=4;
keycodes.KEY_4=5;
keycodes.KEY_5=6;
keycodes.KEY_6=7;
keycodes.KEY_7=8;
keycodes.KEY_8=9;
keycodes.KEY_9=10;
keycodes.KEY_0=11;
keycodes.KEY_MINUS=12;
keycodes.KEY_EQUAL=13;
keycodes.KEY_BACKSPACE=14;
keycodes.KEY_TAB=15;
keycodes.KEY_Q=16;
keycodes.KEY_W=17;
keycodes.KEY_E=18;
keycodes.KEY_R=19;
keycodes.KEY_T=20;
keycodes.KEY_Y=21;
keycodes.KEY_U=22;
keycodes.KEY_I=23;
keycodes.KEY_O=24;
keycodes.KEY_P=25;
keycodes.KEY_LEFTBRACE=26;
keycodes.KEY_RIGHTBRACE=27;
keycodes.KEY_ENTER=28;
keycodes.KEY_LEFTCTRL=29;
keycodes.KEY_A=30;
keycodes.KEY_S=31;
keycodes.KEY_D=32;
keycodes.KEY_F=33;
keycodes.KEY_G=34;
keycodes.KEY_H=35;
keycodes.KEY_J=36;
keycodes.KEY_K=37;
keycodes.KEY_L=38;
keycodes.KEY_SEMICOLON=39;
keycodes.KEY_APOSTROPHE=40;
keycodes.KEY_GRAVE=41;
keycodes.KEY_LEFTSHIFT=42;
keycodes.KEY_BACKSLASH=43;
keycodes.KEY_Z=44;
keycodes.KEY_X=45;
keycodes.KEY_C=46;
keycodes.KEY_V=47;
keycodes.KEY_B=48;
keycodes.KEY_N=49;
keycodes.KEY_M=50;
keycodes.KEY_COMMA=51;
keycodes.KEY_DOT=52;
keycodes.KEY_SLASH=53;
keycodes.KEY_RIGHTSHIFT=54;
keycodes.KEY_KPASTERISK=55;
keycodes.KEY_LEFTALT=56;
keycodes.KEY_SPACE=57;
keycodes.KEY_CAPSLOCK=58;
keycodes.KEY_F1=59;
keycodes.KEY_F2=60;
keycodes.KEY_F3=61;
keycodes.KEY_F4=62;
keycodes.KEY_F5=63;
keycodes.KEY_F6=64;
keycodes.KEY_F7=65;
keycodes.KEY_F8=66;
keycodes.KEY_F9=67;
keycodes.KEY_F10=68;
keycodes.KEY_NUMLOCK=69;
keycodes.KEY_SCROLLLOCK=70;
keycodes.KEY_KP7=71;
keycodes.KEY_KP8=72;
keycodes.KEY_KP9=73;
keycodes.KEY_KPMINUS=74;
keycodes.KEY_KP4=75;
keycodes.KEY_KP5=76;
keycodes.KEY_KP6=77;
keycodes.KEY_KPPLUS=78;
keycodes.KEY_KP1=79;
keycodes.KEY_KP2=80;
keycodes.KEY_KP3=81;
keycodes.KEY_KP0=82;
keycodes.KEY_KPDOT=83;

keycodes.KEY_ZENKAKUHANKAKU=85;
keycodes.KEY_102ND=86;
keycodes.KEY_F11=87;
keycodes.KEY_F12=88;
keycodes.KEY_RO=89;
keycodes.KEY_KATAKANA=90;
keycodes.KEY_HIRAGANA=91;
keycodes.KEY_HENKAN=92;
keycodes.KEY_KATAKANAHIRAGANA=93;
keycodes.KEY_MUHENKAN=94;
keycodes.KEY_KPJPCOMMA=95;
keycodes.KEY_KPENTER=96;
keycodes.KEY_RIGHTCTRL=97;
keycodes.KEY_KPSLASH=98;
keycodes.KEY_SYSRQ=99;
keycodes.KEY_RIGHTALT=100;
keycodes.KEY_LINEFEED=101;
keycodes.KEY_HOME=102;
keycodes.KEY_UP=103;
keycodes.KEY_PAGEUP=104;
keycodes.KEY_LEFT=105;
keycodes.KEY_RIGHT=106;
keycodes.KEY_END=107;
keycodes.KEY_DOWN=108;
keycodes.KEY_PAGEDOWN=109;
keycodes.KEY_INSERT=110;
keycodes.KEY_DELETE=111;
keycodes.KEY_MACRO=112;
keycodes.KEY_MUTE=113;
keycodes.KEY_VOLUMEDOWN=114;
keycodes.KEY_VOLUMEUP=115;
keycodes.KEY_POWER=116;/* SC System Power Down */
keycodes.KEY_KPEQUAL=117;
keycodes.KEY_KPPLUSMINUS=118;
keycodes.KEY_PAUSE=119;
keycodes.KEY_SCALE=120;/* AL Compiz Scale (Expose) */

keycodes.KEY_KPCOMMA=121;
keycodes.KEY_HANGEUL=122;
keycodes.KEY_HANJA=123;
keycodes.KEY_YEN=124;
keycodes.KEY_LEFTMETA=125;
keycodes.KEY_RIGHTMETA=126;
keycodes.KEY_COMPOSE=127;

keycodes.KEY_STOP=128;/* AC Stop */
keycodes.KEY_AGAIN=129
keycodes.KEY_PROPS=130;/* AC Properties */
keycodes.KEY_UNDO=131;/* AC Undo */
keycodes.KEY_FRONT=132;
keycodes.KEY_COPY=133;/* AC Copy */
keycodes.KEY_OPEN=134;/* AC Open */
keycodes.KEY_PASTE=135;/* AC Paste */
keycodes.KEY_FIND=136;/* AC Search */
keycodes.KEY_CUT=137;/* AC Cut */
keycodes.KEY_HELP=138;/* AL Integrated Help Center */
keycodes.KEY_MENU=139;/* Menu (show menu) */
keycodes.KEY_CALC=140;/* AL Calculator */
keycodes.KEY_SETUP=141;
keycodes.KEY_SLEEP=142;/* SC System Sleep */
keycodes.KEY_WAKEUP=143;/* System Wake Up */
keycodes.KEY_FILE=144;/* AL Local Machine Browser */
keycodes.KEY_SENDFILE=145;
keycodes.KEY_DELETEFILE=146;
keycodes.KEY_XFER=147;
keycodes.KEY_PROG1=148;
keycodes.KEY_PROG2=149;
keycodes.KEY_WWW=150;/* AL Internet Browser */
keycodes.KEY_MSDOS=151;
keycodes.KEY_COFFEE=152;/* AL Terminal Lock/Screensaver */
keycodes.KEY_ROTATE_DISPLAY=153;/* Display orientation for e.g. tablets */
keycodes.KEY_CYCLEWINDOWS=154;
keycodes.KEY_MAIL=155;
keycodes.KEY_BOOKMARKS=156;/* AC Bookmarks */
keycodes.KEY_COMPUTER=157;
keycodes.KEY_BACK=158;/* AC Back */
keycodes.KEY_FORWARD=159;/* AC Forward */
keycodes.KEY_CLOSECD=160;
keycodes.KEY_EJECTCD=161;
keycodes.KEY_EJECTCLOSECD=162;
keycodes.KEY_NEXTSONG=163;
keycodes.KEY_PLAYPAUSE=164;
keycodes.KEY_PREVIOUSSONG=165;
keycodes.KEY_STOPCD=166;
keycodes.KEY_RECORD=167;
keycodes.KEY_REWIND=168;
keycodes.KEY_PHONE=169;/* Media Select Telephone */
keycodes.KEY_ISO=170;
keycodes.KEY_CONFIG=171;/* AL Consumer Control Configuration */
keycodes.KEY_HOMEPAGE=172;/* AC Home */
keycodes.KEY_REFRESH=173;/* AC Refresh */
keycodes.KEY_EXIT=174;/* AC Exit */
keycodes.KEY_MOVE=175;
keycodes.KEY_EDIT=176;
keycodes.KEY_SCROLLUP=177;
keycodes.KEY_SCROLLDOWN=178;
keycodes.KEY_KPLEFTPAREN=179;
keycodes.KEY_KPRIGHTPAREN=180;
keycodes.KEY_NEW=181;/* AC New */
keycodes.KEY_REDO=182;/* AC Redo/Repeat */

keycodes.KEY_F13=183;
keycodes.KEY_F14=184;
keycodes.KEY_F15=185;
keycodes.KEY_F16=186;
keycodes.KEY_F17=187;
keycodes.KEY_F18=188;
keycodes.KEY_F19=189;
keycodes.KEY_F20=190;
keycodes.KEY_F21=191;
keycodes.KEY_F22=192;
keycodes.KEY_F23=193;
keycodes.KEY_F24=194;

keycodes.KEY_PLAYCD=200;
keycodes.KEY_PAUSECD=201;
keycodes.KEY_PROG3=202;
keycodes.KEY_PROG4=203;
keycodes.KEY_DASHBOARD=204;/* AL Dashboard */
keycodes.KEY_SUSPEND=205;
keycodes.KEY_CLOSE=206;/* AC Close */
keycodes.KEY_PLAY=207;
keycodes.KEY_FASTFORWARD=208;
keycodes.KEY_BASSBOOST=209;
keycodes.KEY_PRINT=210;/* AC Print */
keycodes.KEY_HP=211;
keycodes.KEY_CAMERA=212;
keycodes.KEY_SOUND=213;
keycodes.KEY_QUESTION=214;
keycodes.KEY_EMAIL=215;
keycodes.KEY_CHAT=216;
keycodes.KEY_SEARCH=217;
keycodes.KEY_CONNECT=218;
keycodes.KEY_FINANCE=219;/* AL Checkbook/Finance */
keycodes.KEY_SPORT=220;
keycodes.KEY_SHOP=221;
keycodes.KEY_ALTERASE=222;
keycodes.KEY_CANCEL=223;/* AC Cancel */
keycodes.KEY_BRIGHTNESSDOWN=224;
keycodes.KEY_BRIGHTNESSUP=225;
keycodes.KEY_MEDIA=226;

keycodes.KEY_SWITCHVIDEOMODE=227;/* Cycle between available video
==   outputs (Monitor/LCD/TV-out/etc) */
keycodes.KEY_KBDILLUMTOGGLE=228;
keycodes.KEY_KBDILLUMDOWN=229;
keycodes.KEY_KBDILLUMUP=230;

keycodes.KEY_SEND=231;/* AC Send */
keycodes.KEY_REPLY=232;/* AC Reply */
keycodes.KEY_FORWARDMAIL=233;/* AC Forward Msg */
keycodes.KEY_SAVE=234;/* AC Save */
keycodes.KEY_DOCUMENTS=235;

keycodes.KEY_BATTERY=236;

keycodes.KEY_BLUETOOTH=237;
keycodes.KEY_WLAN=238;
keycodes.KEY_UWB=239;

keycodes.KEY_UNKNOWN=240;

keycodes.KEY_VIDEO_NEXT=241;/* drive next video source */
keycodes.KEY_VIDEO_PREV=242;/* drive previous video source */
keycodes.KEY_BRIGHTNESS_CYCLE=243;/* brightness up, after max is min */
keycodes.KEY_BRIGHTNESS_AUTO=244;/* Set Auto Brightness: manual
==  brightness control is off,
==  rely on ambient */
keycodes.KEY_DISPLAY_OFF=245;/* display device to off state */

keycodes.KEY_WWAN=246;/* Wireless WAN (LTE, UMTS, GSM, etc.) */
keycodes.KEY_RFKILL=247;/* Key that controls all radios */

keycodes.KEY_MICMUTE=248;/* Mute / unmute the microphone */

/* Code 255 is reserved for special needs of AT keyboard driver */

keycodes.BTN_MISC=0x100;
keycodes.BTN_0=0x100;
keycodes.BTN_1=0x101;
keycodes.BTN_2=0x102;
keycodes.BTN_3=0x103;
keycodes.BTN_4=0x104;
keycodes.BTN_5=0x105;
keycodes.BTN_6=0x106;
keycodes.BTN_7=0x107;
keycodes.BTN_8=0x108;
keycodes.BTN_9=0x109;

keycodes.BTN_MOUSE=0x110;
keycodes.BTN_LEFT=0x110;
keycodes.BTN_RIGHT=0x111;
keycodes.BTN_MIDDLE=0x112;
keycodes.BTN_SIDE=0x113;
keycodes.BTN_EXTRA=0x114;
keycodes.BTN_FORWARD=0x115;
keycodes.BTN_BACK=0x116;
keycodes.BTN_TASK=0x117;

keycodes.BTN_JOYSTICK=0x120;
keycodes.BTN_TRIGGER=0x120;
keycodes.BTN_THUMB=0x121;
keycodes.BTN_THUMB2=0x122;
keycodes.BTN_TOP=0x123;
keycodes.BTN_TOP2=0x124;
keycodes.BTN_PINKIE=0x125;
keycodes.BTN_BASE=0x126;
keycodes.BTN_BASE2=0x127;
keycodes.BTN_BASE3=0x128;
keycodes.BTN_BASE4=0x129;
keycodes.BTN_BASE5=0x12a;
keycodes.BTN_BASE6=0x12b;
keycodes.BTN_DEAD=0x12f;

keycodes.BTN_GAMEPAD=0x130;
keycodes.BTN_SOUTH=0x130;
keycodes.BTN_EAST=0x131;
keycodes.BTN_C=0x132;
keycodes.BTN_NORTH=0x133;
keycodes.BTN_WEST=0x134;
keycodes.BTN_Z=0x135;
keycodes.BTN_TL=0x136;
keycodes.BTN_TR=0x137;
keycodes.BTN_TL2=0x138;
keycodes.BTN_TR2=0x139;
keycodes.BTN_SELECT=0x13a;
keycodes.BTN_START=0x13b;
keycodes.BTN_MODE=0x13c;
keycodes.BTN_THUMBL=0x13d;
keycodes.BTN_THUMBR=0x13e;

keycodes.BTN_DIGI=0x140;
keycodes.BTN_TOOL_PEN=0x140;
keycodes.BTN_TOOL_RUBBER=0x141;
keycodes.BTN_TOOL_BRUSH=0x142;
keycodes.BTN_TOOL_PENCIL=0x143;
keycodes.BTN_TOOL_AIRBRUSH=0x144;
keycodes.BTN_TOOL_FINGER=0x145;
keycodes.BTN_TOOL_MOUSE=0x146;
keycodes.BTN_TOOL_LENS=0x147;
keycodes.BTN_TOOL_QUINTTAP=0x148;/* Five fingers on trackpad */
keycodes.BTN_STYLUS3=0x149;
keycodes.BTN_TOUCH=0x14a;
keycodes.BTN_STYLUS=0x14b;
keycodes.BTN_STYLUS2=0x14c;
keycodes.BTN_TOOL_DOUBLETAP=0x14d;
keycodes.BTN_TOOL_TRIPLETAP=0x14e;
keycodes.BTN_TOOL_QUADTAP=0x14f;/* Four fingers on trackpad */

keycodes.BTN_WHEEL=0x150;
keycodes.BTN_GEAR_DOWN=0x150;
keycodes.BTN_GEAR_UP=0x151;

for( var i in keycodes ) {
    module.exports[ i ] = keycodes[i];
}