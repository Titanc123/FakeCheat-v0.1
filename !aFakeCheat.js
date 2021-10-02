


var p_1 = "F"
var p_2 = p_1 + "a"
var p_3 = p_2 + "k"
var p_4 = p_3 + "e"
var p_5 = p_4 + "H"
var p_6 = p_5 + "v"
var p_7 = p_6 + "H"
var p_8 = p_7 + "#"
var p_9 = p_8 + "0"
var p_10 = p_9 + "5"
var p_11 = p_10 + "9"
var p_12 = p_11 + "7"
var cusma = p_12;

Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" ); // 167,16,77,100
Cheat.Print( "\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "_____________________________________ \n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|");
Cheat.PrintColor( [ 0,143,57, 25 ], "     Welcome");
Cheat.PrintColor( [ 167,16,77,255 ], " to FakeCheat [JS]     |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|       [JS] By ");
Cheat.PrintColor( [ 0,143,57, 25 ], ""+cusma+"        " );
Cheat.PrintColor( [ 167,16,77,255 ], "|\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|___________________________________|\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "| Version: " );
Cheat.PrintColor( [ 0,143,57, 255 ], "v0.1" );
Cheat.PrintColor( [ 167,16,77,255 ], "  | Cheats " );
Cheat.PrintColor( [  0,143,57, 25 ], "[Work]" );
Cheat.PrintColor( [ 167,16,77,255 ], "    |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|___________________________________|\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|  Discord:                         |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|  " );
Cheat.PrintColor( [ 0,143,57, 25 ], "https://discord.gg/yUm7fwjQh5" );
Cheat.PrintColor( [ 167,16,77,255 ], "    |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|  " );
Cheat.PrintColor( [ 0,143,57, 25 ], "https://discord.gg/yUm7fwjQh5" );
Cheat.PrintColor( [ 167,16,77,255 ], "    |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|                                   |\n" );
Cheat.PrintColor( [ 167,16,77,255 ], "|___________________________________|\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );
Cheat.Print( "\n" );

UI.AddSliderInt(" ", 0, 0);
UI.AddLabel("      Welcome To FakeCheat[JS]");
UI.AddLabel("      Created By "+cusma);
UI.AddSliderInt(" ", 0, 0);



UI.AddCheckbox("Legit AA");
UI.AddDropdown( "Granade ESP", ["None","Circle", "Rect"]);
UI.AddCheckbox("Log Events");
UI.AddCheckbox("[DT] Intant Recharge");
UI.AddCheckbox("Tracers Shot");
UI.AddCheckbox("Clantag");
UI.AddCheckbox("BreakLeg");




UI.AddMultiDropdown( "Test", [ "one", "two"] );


// Keybind List
UI.AddHotkey("Legit AA KeyBind");



UI.AddHotkey("Slow-walk Key");
UI.AddSliderInt("Slow-walk Speed:", 0, 135);



UI.AddCheckbox("try");
UI.AddSliderFloat("S_x", 10, Global.GetScreenSize()[0] - 150) // Spectator
UI.AddSliderFloat("S_y", 10, Global.GetScreenSize()[1] - 35)
UI.AddCheckbox("S_visible");
UI.AddSliderFloat("K_x", 10, Global.GetScreenSize()[0] - 160) // Keybind
UI.AddSliderFloat("K_y", 10, Global.GetScreenSize()[1] - 35)
UI.AddCheckbox("K_visible");
UI.AddSliderFloat("B_x", 10, Global.GetScreenSize()[0] - 140) // Bomb
UI.AddSliderFloat("B_y", 10, Global.GetScreenSize()[1] - 55)
UI.AddCheckbox("B_visible");


UI.AddSliderFloat("KS_x", 10, Global.GetScreenSize()[0] - 150) // KeyStroke
UI.AddSliderFloat("KS_y", 10, Global.GetScreenSize()[1] - 35)
UI.AddCheckbox("KS_visible");


UI.AddDropdown( "Custom Trail", ["None", "cuadrado", "circulo"] );

UI.AddCheckbox("IF_visible"); // Propiedades
UI.AddCheckbox("ID_visible"); // Propiedades
// Quitar
function quitar() {
    UI.SetValue(scriptitems, "S_visible",true)
    UI.SetValue(scriptitems, "K_visible",true)
    UI.SetValue(scriptitems, "B_visible",true)
    UI.SetValue(scriptitems, "KS_visible",true) 
    if(!UI.GetValue(scriptitems,"try")){
        UI.SetValue(scriptitems, "try",true)
        UI.SetValue(scriptitems, "Clantag",true)
    }
    UI.SetEnabled(scriptitems, "Custom Trail",false)
    UI.SetEnabled(scriptitems, "BreakLeg",false)
    UI.SetEnabled(scriptitems, "Slow-walk Speed:",false)
    UI.SetEnabled(scriptitems, "Clantag",false)
    UI.SetEnabled(scriptitems, "Log Events",false)
    UI.SetEnabled(scriptitems, "Tracers Shot",false)
    UI.SetEnabled(scriptitems, "[DT] Intant Recharge",false)
    UI.SetEnabled(scriptitems, "Granade ESP",false)
    UI.SetEnabled(scriptitems, "Legit AA",false)
    UI.SetEnabled(scriptitems, "try",false)
    UI.SetEnabled(scriptitems, "S_x",false)
    UI.SetEnabled(scriptitems, "S_y",false)
    UI.SetEnabled(scriptitems, "K_x",false)
    UI.SetEnabled(scriptitems, "K_y",false)
    UI.SetEnabled(scriptitems, "B_x",false)
    UI.SetEnabled(scriptitems, "B_y",false)
    UI.SetEnabled(scriptitems, "B_visible",false)
    UI.SetEnabled(scriptitems, "S_visible",false)
    UI.SetEnabled(scriptitems, "K_visible",false)
    UI.SetEnabled(scriptitems, "KS_visible",false)
    UI.SetEnabled(scriptitems, "IF_visible",false)
    UI.SetEnabled(scriptitems, "ID_visible",false)
    UI.SetEnabled(scriptitems, "KS_x",false)
    UI.SetEnabled(scriptitems, "KS_y",false)
}
quitar();



var scriptitems = ("Misc", "JAVASCRIPT", "Script items");
var idCheckbox = 0
var hotkeyid = 0
var colorpickerid = 0
var wasDown = []
var modulo ="";
var cursor = Input.GetCursorPosition()

// Menu
var _movemenu = false;
var waitforup = false;
var offsetx = 0;
var offsety = 0;
var tap = 2;

// Keybind
var key_v = true;
var key_n = 0;
var _movekey = false;
var waitkey = false;
var Keyx = 0;
var Keyy = 0;
var k_a = 0;


// Spectator
var Spec_v = true;
var _moveSpec = false;
var waitSpec = false;
var Specx = 0;
var Specy = 0;
var s_a = 0;

// Bomb
var Bomb_v = true;
var _moveBomb = false;
var waitBomb = false;
var Bombx = 0;
var Bomby = 0;

// Loader
var tiempo = 0;
var barra = 0;
var visibilidad = false;


// KeyStroke
var KeyStroke_v = true;
var _moveKeyStroke = false;
var waitKeyStroke = false;
var KeyStrokex = 0;
var KeyStrokey = 0;


// Indicator
var kills = 0;
var deaths = 0;
var quitame = 0;
var screen_size = Global.GetScreenSize();
var menuX = 15 + screen_size[0] / 2, menuY = 67 + screen_size[1] / 2;
var time, delay, fillbar, shotsfired;
var Indicator_a = 0;

// ComboBox
var font_Logo = Render.AddFont( "MuseoSansCyrl-700", 7, 100);
var drawweird = []
var comboOverlapping = false
var comboVal = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
 [], [], [], [], [], [], [], [], [], [], [], [], [], []]
var backupcomboval =  [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []
, [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
 [], [], [], [], [], [], [], [], [], [], [], [], [], []]
var comboval2 =[]
var backupcomboval2 = []
var waitUntilUnclick = []
var lastcombodata = [[],[],[]]
var lastvaliduival = []
var comboactive = -1
var font_1 = Render.AddFont("MuseoSansCyrl-700", 8, 800)

//slide 
var val = []
var backupval = []
var holding = []
var sliderdist = []




// Instant DT
var last_Instant = 0;
var shot_Instant = false;
var wasActive_Instant = true;
var wasfding_Instant = false;
var lastfding_Instant = 0;


// tracers shot
var x2 = 0, y2 = 0, z2 = 0;
var eye_angles = [0, 0, 0];
var wts_impact = [0, 0, 0];
const callback = Cheat.RegisterCallback;
const get_int = Event.GetInt, get_float = Event.GetFloat;
const entity_from_userid = Entity.GetEntityFromUserID, local_player = Entity.GetLocalPlayer, hitbox_position = Entity.GetHitboxPosition, alive = Entity.IsAlive;
const render_circle = Render.FilledCircle, to_screen = Render.WorldToScreen;
const frametime = Globals.Frametime, tickcount = Globals.Tickcount;
const max = Math.max, sqrt = Math.sqrt;
const color = [255,255,255,255];
const hitgroup_to_hitbox = {
    1: [0, 1],
    2: [4, 5, 6],
    3: [2, 3],
    4: [13, 15, 16],
    5: [14, 17, 18],
    6: [7, 9, 11],
    7: [8, 10, 12]
}
var data = {};

// Logs 
hitboxes = [
    'generic',
    'head',
    'chest',
    'body',
    'left arm',
    'right arm',
    'left leg',
    'right leg',
    '?'
];
var shots = 0;
var predicthc = 0;
var safety = 0;
var hitboxName = "";
var choked = 0;
var exploit = 0;
var logs = [];
var logsct = [];
var logsalpha = [];
var target = -1;
var shots_fired = 0;
var hits = 0;
var lastUpdate = 0;
var logged = false;


// Clantag
var currentTick = 0;
var lastTick = 0;
var special = false
var speed = 20;
var ctag = 0


// slowWalrk
var conteo = 0;
var restar = 0;


// Break leg
var clock = 0


// TRAIL

var trails = [];
var tipoTrail = 1;


///  Funcion of Render
var pi = 3.141592653589793;
function d2r(num) { return num*(pi/180) }
function draw_circle_3d(x, y, z, radius, degrees, start_at, clr, filled, fill_clr) {
    var accuracy = 8;
    var old_x, old_y;
    degrees = degrees < 361 && degrees || 360; degrees = degrees > -1 && degrees || 0
    start_at = start_at+1
    for (rot=start_at; rot < degrees+start_at+1; rot+=start_at*accuracy) {
        rot_r = d2r(rot)
        line_x = radius * Math.cos(rot_r) + x, line_y = radius * Math.sin(rot_r) + y
        var curr = Render.WorldToScreen([line_x, line_y, z]), cur = Render.WorldToScreen([x, y, z]);
        if (cur[0] != null && curr[0] != null && old_x != null) {
            if (filled) 
                Render.Polygon([ [curr[0], curr[1]], [old_x, old_y], [cur[0], cur[1]] ], fill_clr)
            Render.Line(curr[0], curr[1], old_x, old_y, clr)
        }
        old_x = curr[0], old_y = curr[1];
    }
}
Render.Arc = function(x, y, radius, radius_inner, start_angle, end_angle, segments, color) {
    segments = 360 / segments

    for (var i = start_angle; i < start_angle + end_angle; i = i + segments) {
        var rad = i * Math.PI / 180
        var rad2 = (i + segments) * Math.PI / 180

        var rad_cos = Math.cos(rad)
        var rad_sin = Math.sin(rad)
        var rad2_cos = Math.cos(rad2)
        var rad2_sin = Math.sin(rad2)

        var x1_inner = x + rad_cos * radius_inner
        var y1_inner = y + rad_sin * radius_inner
        var x1_outer = x + rad_cos * radius
        var y1_outer = y + rad_sin * radius

        var x2_inner = x + rad2_cos * radius_inner
        var y2_inner = y + rad2_sin * radius_inner
        var x2_outer = x + rad2_cos * radius
        var y2_outer = y + rad2_sin * radius

        Render.Polygon([[x1_outer, y1_outer], [x2_outer, y2_outer], [x1_inner, y1_inner]], color)
        Render.Polygon([[x1_inner, y1_inner], [x2_outer, y2_outer], [x2_inner, y2_inner]], color)
    }
}
function cursorBetween(x, y, length, height) {
    var cursor = Input.GetCursorPosition()
    if (cursor[0] > x && cursor[0] < x + length && cursor[1] > y && cursor[1] < y + height)
        return true
    return false
}
function btn(x,y,w,h,tipo,color1,color2,Titulo,tamaño_Titulo,subTitulo,tamaño_subTitulo,img1,Icono,colort)
{
    font_Titulo = Render.AddFont( "MuseoSansCyrl-700", tamaño_Titulo, 800);
    font_subTitulo = Render.AddFont( "MuseoSansCyrl-700", tamaño_subTitulo, 100);

    if(cursorBetween(x, y, w, h) && tap != img1){   
            Render.GradientRect( x, y, w, h, tipo, [167,16,77,55], color2);
            colort = [255,255,255,200]
    }

    Render.GradientRect( x, y, w, h, tipo, color1, color2);
    Render.StringCustom( x + 46, y + 10, 0, ""+ Titulo, colort, font_Titulo );
    Render.StringCustom( x + 46, y + 29, 0, ""+ subTitulo, colort, font_subTitulo );

    var font = Render.AddFont("Font_Icon", 50, 100)
    Render.StringCustom(x + 5, y, 0, Icono, colort, font);


    if (cursorBetween(x, y, w, h) && Input.IsKeyPressed(0x01)) {
        tap = img1
    }
}
function get_spectators()
{
    var specs = [];
    const players = Entity.GetPlayers();

    for (i = 0; i < players.length; i++)
    {
        const cur = players[i];

        if (Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget") != "m_hObserverTarget") {
            const obs = Entity.GetProp(cur, "CBasePlayer", "m_hObserverTarget")

            if (obs === Entity.GetLocalPlayer())
            {
                const name = Entity.GetName(cur);
                specs.push(name);
            }
        }
    }

    return specs;
}
function resetSpacing() {

    idCheckbox = 0
    hotkeyid = 0
    colorpickerid = 0
}
function checkbox(info,modo,x, y, name, enable) {

    if(modo){
        font = Render.AddFont( "MuseoSansCyrl-700", 9, 800);
        var w = Render.TextSizeCustom(name, font)[0] + 47;
        
        if(cursorBetween(x, y, w, 25)){   
            font = Render.AddFont( "MuseoSansCyrl-700", 10, 800);
            
            Render.StringCustom(x + 41, y + 6, 0, name, enable == true ? [255,255,255,255] : [255,255,255,150], font)

            Render.FilledCircle(x + 10, y + 12, 10, enable == true ? [167,16,77,255] :  [167,16,77,155])
            Render.FilledCircle(x + 17, y + 12, 10, enable == true ? [167,16,77,255] :  [167,16,77,155])
            Render.FilledCircle(x + 24, y + 12, 10, enable == true ? [167,16,77,255] :  [167,16,77,155])
            
        }
 
        //Render.Rect(x, y, w, 25, [255,255,255,255])


        Render.FilledCircle(x + 10, y + 12, 9, [30,30,30,255])
        Render.FilledCircle(x + 17, y + 12, 9, [30,30,30,255])
        Render.FilledCircle(x + 24, y + 12, 9, [30,30,30,255])
        Render.FilledCircle(enable == true ? x + 24 : x + 10 , y + 12, 5, enable == true ? [167,16,77,255] :  [167,16,77,155])

        font = Render.AddFont( "MuseoSansCyrl-700", 10, 800);
        Render.StringCustom(x + 41, y + 6, 0, name, enable == true ? [255,255,255,255] : [255,255,255,155], font)



        if(info){
            var font = Render.AddFont("Font_Icon", 27, 100);
            Render.StringCustom(x + w + 3 , y - 1, 0, "y", enable == true ? [255,255,255,255] : [255,255,255,155], font)

            if(cursorBetween(x + w + 3 , y + 5, 15, 15)){  
                h_p = 35, h_w = 98;
                Render.FilledRect(x+9 + w, y + 10 - 1, h_w,h_p , [26, 26, 26, 230]);
                Render.FilledRect(x+9 + w - 1,y + 10, h_w,h_p -2, [26, 26, 26, 230]);
                Render.FilledRect(x+9 + w - 1, y + 10, h_w,h_p + 1, [26, 26, 26, 230]);

                var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
                Render.StringCustom(x+15 + w - 1, y + 15, 0, "Custom Keybind", [255,255,255,200], font)
                Render.StringCustom(x+24+ w - 1, y + 28, 0, "in Otv3 Panel", [255,255,255,200], font)
            }

            
        }
        if (UI.IsMenuOpen()) {
            if ((cursorBetween(x, y, w, 25) )) {
                if (!wasDown[idCheckbox]) {
                    if (Input.IsKeyPressed(0x01)) {
                        wasDown[idCheckbox] = true
                        return true
                    }
                }
                else if (wasDown[idCheckbox]) {
                    if (!Input.IsKeyPressed(0x01)) {
                        wasDown[idCheckbox] = false
                        return false
                    }
                }
                return false
            }
        }
    }else{
        if (UI.IsMenuOpen()) {
            if ((cursorBetween(x, y, 25, 25) )) {
                if (!wasDown[idCheckbox]) {
                    if (Input.IsKeyPressed(0x01)) {
                        wasDown[idCheckbox] = true
                        return true
                    }
                }
                else if (wasDown[idCheckbox]) {
                    if (!Input.IsKeyPressed(0x01)) {
                        wasDown[idCheckbox] = false
                        return false
                    }
                }
                return false
            }
        }
    }


}
function deathsrecord() {
    if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("userid")))) {
        deaths += 1;
    }
}
function killsrecord() {
    if(Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt("attacker")))) {
        kills += 1;
    }
}
function EVENT_WEAPON_FIRE()
{
    iShotsFired = Event.GetInt("userid"); iShotsFired_index = Entity.GetEntityFromUserID(iShotsFired);
    if(Entity.GetLocalPlayer() == iShotsFired_index)
    {
        if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        {
            if(shotsfired == 0)
            {
                time = Globals.Curtime();
                delay = time+0.3;
                fillbar = 0;
            }            
        }    
    }    
}
function beginMultiComboBox(x, y, name, contents, uival,comboid) {
    lastcombodata[0] = x
    lastcombodata[1] = y
    lastcombodata[2] = name
    lastcombodata[3] = contents
    lastcombodata[4] = uival
    lastcombodata[5] = comboid
    lastcombodata[6] = 1
}
function beginComboBox(x, y, name, contents, uival,comboid){
    lastcombodata[0] = x
    lastcombodata[1] = y
    lastcombodata[2] = name
    lastcombodata[3] = contents
    lastcombodata[4] = uival
    lastcombodata[5] = comboid
    lastcombodata[6] = 0
}
function endComboBox(id) {
    if(lastcombodata[6] == 1){
    var x = lastcombodata[0]
    var y = lastcombodata[1]
    var name = lastcombodata[2]
    var contents = lastcombodata[3]
    var uival = lastcombodata[4]
    var comboid = lastcombodata[5]
    var xx = x + 20


    var helper = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096]
        for(i = 0; i < contents.length;i++){
            if(uival & helper[i]){
                comboVal[comboid][i] = true
                backupcomboval[comboid][i] = true
            }
            else{
                comboVal[comboid][i] = false
                backupcomboval[comboid][i] = false
            }
        }

    if (UI.IsMenuOpen()) {
        if (cursorBetween(xx, y, 130, 20) && Input.IsKeyPressed(0x01) && !drawweird[comboid] && (comboactive == comboid || comboactive == -1)) {
            drawweird[comboid] = true
            waitUntilUnclick[comboid] = true
            comboactive = comboid
        }

        if(cursorBetween(xx, y, 130, 20) && !drawweird[comboid]){
            Render.FilledCircle(xx + 4, y + 9, 12, [167,16,77,200])
            Render.FilledRect(xx, y-2, 110, 23, [167,16,77,200])
            Render.FilledCircle(xx + 106, y + 9, 12, [167,16,77,200])
        }

        Render.FilledCircle(xx + 4, y + 9, 11, [30,30,30,255])
        Render.FilledRect(xx, y-1, 110, 21, [30,30,30,255])
        Render.FilledCircle(xx + 106, y + 9, 11, [30,30,30,255])

        var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
        Render.StringCustom(xx + 2, y - 17, 0, name, [200, 200, 200, 255], font);


        if(!drawweird[comboid]){ 
            Render.FilledCircle(xx + 106, y + 9, 4, [167,16,77,100])
        }
        else{
            Render.FilledCircle(xx + 106, y + 9, 4, [167,16,77,200])
        }



        
        var text = []
        for(i = 0; i < contents.length;i++){
            if(comboVal[comboid][i] || backupcomboval[comboid][i]){
                text.push(contents[i])
            }
        }
        if(Render.TextSizeCustom(text.join(", "),font_Logo)[0] > 110){
            text = []
            text[0] = "..."
        }
        if(text != "")
        {
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
            Render.StringCustom(xx + 6, y+3, 0, text.join(", "), [200, 200, 200, 255], font)
                    
        }else{
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
            Render.StringCustom(xx + 6, y+3, 0, "None", [200, 200, 200, 255], font)
              
        }


        if(drawweird[comboid]){
            
            if (!cursorBetween(xx, y, 130,( 22 * contents.length)+22) && Input.IsKeyPressed(0x01)) {
                drawweird[comboid] = false
                comboactive = -1
            }
            if (!Input.IsKeyPressed(0x01) && waitUntilUnclick[comboid]) {
                waitUntilUnclick[comboid] = false
            }
            
            Render.FilledRect(xx + 1, y + 20, 110, (22 * contents.length)+3, [28,28,28,255])


            for (i = 0; i < contents.length; i++) {
                comboVal[comboid][i] = backupcomboval[comboid][i]
                if(cursorBetween(xx, y+25+(i*22), 130, 22)){
                    Render.FilledRect(xx+1,y+4+(i*22)+22,110,20,[38,38,38,255])
                }
                var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);

                Render.StringCustom(xx + 12, y + 25 + (i * 22)+4, 0, contents[i], comboVal[comboid][i] ? [167,16,77,200] : [200, 200, 200, 255], font)
                
                if (cursorBetween(xx, y+25, 130, (i * 22)+22) && Input.IsKeyPressed(0x01) && !waitUntilUnclick[comboid]) {
                    
                    comboVal[comboid][i] = !comboVal[comboid][i]
                    waitUntilUnclick[comboid] = true
                    backupcomboval[comboid][i] = comboVal[comboid][i]
                }
                
            }
            
            var returnval = 0
            
            for(i = 0; i < contents.length; i++) {
                if(comboVal[comboid][i]){
                    returnval |= helper[i]
                }
            }
            return returnval
        }
    }
    }
    else{
        var x = lastcombodata[0]
        var y = lastcombodata[1]
        var name = lastcombodata[2]
        var contents = lastcombodata[3]
        var uival = lastcombodata[4]
        if(uival != -2147483648)
        lastvaliduival[comboid] = uival

        uival = lastvaliduival[comboid]
        var comboid = lastcombodata[5]
        var xx = x + 20

        if(!comboval2[comboid])
        comboval2[comboid] = uival
        
        if (UI.IsMenuOpen()) {
            if (cursorBetween(xx, y, 130, 20) && Input.IsKeyPressed(0x01) && !drawweird[comboid] && (comboactive == comboid || comboactive == -1)) {
                drawweird[comboid] = true
                waitUntilUnclick[comboid] = true
                comboactive = comboid
            }


            if(cursorBetween(xx, y, 130, 20) && !drawweird[comboid]){
                Render.FilledCircle(xx + 4, y + 9, 12, [167,16,77,200])
                Render.FilledRect(xx, y-2, 110, 23, [167,16,77,200])
                Render.FilledCircle(xx + 106, y + 9, 12, [167,16,77,200])
            }

            Render.FilledCircle(xx + 4, y + 9, 11, [30,30,30,255])
            Render.FilledRect(xx, y-1, 110, 21, [30,30,30,255])
            Render.FilledCircle(xx + 106, y + 9, 11, [30,30,30,255])

            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
            Render.StringCustom(xx + 2, y - 17, 0, name, [200, 200, 200, 255], font);





            if(!drawweird[comboid]){ 
                Render.FilledCircle(xx + 106, y + 9, 4, [167,16,77,100])
            }
            else{
                Render.FilledCircle(xx + 106, y + 9, 4, [167,16,77,200])
            }

            
            var text = []
            for(i = 0; i < contents.length;i++){
                if(i == comboval2[comboid])
                text.push(contents[i])
            }
            comboval2[comboid] = backupcomboval2[comboid]


            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
            Render.StringCustom(xx + 6, y+3, 0, contents[uival] + "", [200, 200, 200, 255], font);


            if(drawweird[comboid]){
                
                if (!cursorBetween(xx, y, 130,( 22 * contents.length)+22) && Input.IsKeyPressed(0x01)) {
                    drawweird[comboid] = false
                    comboactive = -1
                }
                if (!Input.IsKeyPressed(0x01) && waitUntilUnclick[comboid]) {
                    waitUntilUnclick[comboid] = false
                }
                


                Render.FilledRect(xx + 1, y + 20, 110, (22 * contents.length)+3, [28,28,28,255])




                for (i = 0; i < contents.length; i++) {
                    if(cursorBetween(xx, y+25+(i*22), 110, 22)){
                        Render.FilledRect(xx+1,y+4+(i*22)+22,110,20,[38,38,38,255])
                    }

                    var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
                    Render.StringCustom(xx + 12, y + 25 + (i * 22)+4, 0, contents[i], i == comboval2[comboid] ? [167,16,77,200] : [200, 200, 200, 255],font)

                    
                    if (cursorBetween(xx, y+25, 130, (i * 22)+22) && Input.IsKeyPressed(0x01) && !waitUntilUnclick[comboid]) {
                        comboval2[comboid] = i
                        backupcomboval2[comboid] = i
                        waitUntilUnclick[comboid] = true
                    }
                    
                }
                return comboval2[comboid]
            }
        }
    }
}
const distance_in_ft = function(origin, destination)
{
    const sub = [destination[0] - origin[0], destination[1] - origin[1], destination[2] - origin[2]];
    return Math.round(Math.sqrt(sub[0] ** 2 + sub[1] ** 2 + sub[2] ** 2) / 12);
}
function clamp(v, f, c)
{
    return Math.min(Math.max(v, f), c);
}
function animacion() {
    if(barra > 360){
        barra = 0;
    }else{
        barra += 6;
    }
}
function safe_concat(a, b)
{
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

  var arr = [];

  for (var k in a)
      arr.push(a[k]);

  if (b instanceof Array)
  {
      for (var k in b)
          arr.push(b[k]);

      return arr;
  }

  arr.push(b);
  return arr;
}
function call(func, name, props)
{
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

  func.apply(null, safe_concat([name], props));
  return name;
}
function get(path, is_color)
{
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

  is_color = is_color || false;
  const func = is_color ? UI.GetColor : UI.GetValue;

  if (path instanceof Array)
      return func.apply(null, path);

  return func.apply(null, ["Script items", path]);
}
function set(path, value)
{
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

  const func = (value instanceof Array) ? UI.SetColor : UI.SetValue;

  if (path instanceof Array)
     return func.apply(null, safe_concat(path, value));

 func.apply(null, safe_concat(path, value));
}
function visible(path, value)
{
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

  if (path instanceof Array)
     return UI.SetEnabled.apply(null, safe_concat(path, value));

 UI.SetEnabled.apply(null, safe_concat(["Script items", path], value));
}
function on_bullet_impact() {
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

    const userid = entity_from_userid(get_int("userid"));
    const me = local_player();


    if (userid === me) {

        const pos = [get_float("x"), get_float("y"), get_float("z")];
        const tick = tickcount();

  
        data[tick] = {
            pos: pos,
            alpha: get([255,255,255,255], true)[3],
            hit: false
        };
    }
}
function on_player_hurt() {
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

    if (!get(enable))
        return;


    const userid = entity_from_userid(get_int("userid")), attacker = entity_from_userid(get_int("attacker"));
    const me = local_player();

    if (attacker !== me || userid === me)
        return;

    const tick = tickcount();
    if (data[tick] == undefined)
        return;

    const hitgroup = get_int("hitgroup");


    const current = data[tick];
    const hitboxes = hitgroup_to_hitbox[hitgroup];


    var min_distance = 8192;

    for (var i in hitboxes) {

        const hitbox = hitboxes[i];
        const hitbox_position = Entity.GetHitboxPosition(userid, hitbox);

        const distance = sqrt((current.pos[0] - hitbox_position[0]) ** 2 + (current.pos[1] - hitbox_position[1]) ** 2 + (current.pos[2] - hitbox_position[2]) ** 2);


        if (distance < min_distance)
        {

            current.hit = true;
            current.pos = hitbox_position;


            min_distance = distance;
        }
    }
}
function bullet_impact() {
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

    player = Event.GetInt("userid");
    player_id = Entity.GetEntityFromUserID(player);
    impact_x = Event.GetFloat("x"), impact_y = Event.GetFloat("y"), impact_z = Event.GetFloat("z");

    if ( Entity.GetLocalPlayer( ) !== player_id )
        return;


    x2 = impact_x;
    y2 = impact_y;
    z2 = impact_z;

    eye_angles = Entity.GetEyePosition(Entity.GetLocalPlayer());
    render_time = Globals.Curtime();
}
function reset_data() {
    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

    data = [];
}
function getHitboxName(index)
{
    switch (index)
    {
        case 0:
            hitboxName = "head";
            break;
        case 1:
            hitboxName = "head";
            break;
        case 2:
            hitboxName = "stomach";
            break;
        case 3:
            hitboxName = "stomach";
            break;
        case 4:
            hitboxName = "stomach";
            break;
        case 5:
            hitboxName = "chest";
            break;
        case 6:
            hitboxName = "chest";
            break;
        case 7:
            hitboxName = "left leg";
            break;
        case 8:
            hitboxName = "right leg";
            break;
        case 9:
            hitboxName = "left leg";
            break;
        case 10:
            hitboxName = "right leg";
            break;
        case 11:
            hitboxName = "left leg";
            break;
        case 12:
            hitboxName = "right leg";
            break;
        case 13:
            hitboxName = "left arm";
            break;
        case 14:
            hitboxName = "right arm";
            break;
        case 15:
            hitboxName = "left arm";
            break;
        case 16:
            hitboxName = "left arm";
            break;
        case 17:
            hitboxName = "right arm";
            break;
        case 18:
            hitboxName = "right arm";
            break;
        default:
            hitboxName = "body";
    }
    return hitboxName;
}
function HitgroupName(index) {
    return hitboxes[index] || 'body';
}
function ragebot_fire() {
	predicthc = Event.GetInt("hitchance");
	safety = Event.GetInt("safepoint");
	hitboxName = getHitboxName(Event.GetInt("hitbox"));
	exploit = (Event.GetInt("exploit")+1).toString();
    target = Event.GetInt("target_index");
    shots_fired++;
    logged = false;
    lastUpdate = Globals.Curtime();
}
function sliderFloat(indicator_,x, y, name, min, max, negate,visualizefloat, sliderid, uival,additive) {
    var font = Render.AddFont( "MuseoSansCyrl-700", 8, 800);
    var xx = x + 20
    var cursor = Input.GetCursorPosition()
    var w = Render.TextSizeCustom(name, font)[0] + 67;


    if (!sliderdist[sliderid])
        sliderdist[sliderid] = 0
    
    if(!backupval[sliderid])
        backupval[sliderid] = uival
    val[sliderid] = backupval[sliderid]
    if (true) {
        if (cursorBetween(xx, y + 8, 115, 8)) {

            Render.FilledRect(xx -1, y + 10, 117, 9, [167,16,77,150])

        }
        if (cursorBetween(xx, y + 8, 115, 8) && Input.IsKeyPressed(0x01) && !holding[sliderid] && comboactive == -1) {
            holding[sliderid] = true
        }
        if (!Input.IsKeyPressed(0x01)) {
            holding[sliderid] = false
        }
        if(!backupval[sliderid])
            backupval[sliderid] = 0
        
        if (holding[sliderid]) {
            sliderdist[sliderid] = cursor[0] - xx 
            sliderdist[sliderid] /= 115
            sliderdist[sliderid] *= max - min
            val[sliderid] = negate ? sliderdist[sliderid] + min : sliderdist[sliderid]
            val[sliderid] = clamp(val[sliderid], min, max)
            val[sliderid].toFixed(visualizefloat)
            backupval[sliderid] = val[sliderid]
        }
        sliderdist[sliderid] = (uival + (-min)) / (max - min)
        sliderdist[sliderid] *= 115
        sliderdist[sliderid].toFixed(visualizefloat)
        sliderdist[sliderid] = clamp(sliderdist[sliderid], 0, 115)


        
        Render.StringCustom(xx+1,y-6,0,name,[200,200,200,255],font)

        

        Render.FilledRect(xx, y + 11, 115, 7, [70, 70, 70,255])




        if (sliderdist[sliderid] >= 0 && sliderdist[sliderid] <= 128) {
            Render.FilledRect(xx, y + 11, sliderdist[sliderid], 7, [167,16,77,150])
            Render.FilledCircle(xx + sliderdist[sliderid], y + 14, 6, [50, 50, 50,255])

        }
        
        
        Render.StringCustom(xx + 110, y - 6, 1, val[sliderid].toFixed(visualizefloat) + "", [200, 200, 200, 255], font)

        if(indicator_){

            var font = Render.AddFont("Font_Icon", 27, 100);
            Render.StringCustom(xx + 123 , y + 2, 0, "y", [255,255,255,155], font)


            if(cursorBetween(xx + 123 , y + 2, 23, 23)){  
                h_p = 35, h_w = 98;
                Render.FilledRect(xx+131 , y + 11 - 1, h_w,h_p , [26, 26, 26, 230]);
                Render.FilledRect(xx+131  - 1,y + 11, h_w,h_p -2, [26, 26, 26, 230]);
                Render.FilledRect(xx+131  - 1, y + 11, h_w,h_p + 1, [26, 26, 26, 230]);

                var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);
                Render.StringCustom(xx+138  - 1, y + 16, 0, "Custom Keybind", [255,255,255,200], font)
                Render.StringCustom(xx+145 - 1, y + 29, 0, "in Otv3 Panel", [255,255,255,200], font)
            }

            
        }
        
    }return val[sliderid]

}
function getVal(valName)
{
    return UI.GetValue(scriptitems, valName);
}
function randomIntFrom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
} 
























/// Extra information
function keybinds()
{
    if(!visibilidad)
    return;

    var k_x = 200 + UI.GetValue(scriptitems,"K_x"), k_y = UI.GetValue(scriptitems,"K_y"), k_w = 150, k_h1 = 23;


    var h = [];
    const fontpixel = Render.AddFont("MuseoSansCyrl-700", 8, 800)
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Slow walk")) {

    h.push("Slow MoonWalk")

    }
    if (UI.IsHotkeyActive("Anti-Aim", "Extra", "Fake duck")) {
    h.push("Duck peek assist")
    }
    if (UI.IsHotkeyActive("Misc", "General", "Movement", "Auto peek")) {
    h.push("Quick peek")
    }
    if (!UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")) {
    h.push("Anti-Aim invert")
    }
    if (UI.IsHotkeyActive("Rage", "General", "General", "Force safe point")) {
    h.push("Safe point")
    }
    if (UI.IsHotkeyActive("Rage", "General", "General", "Force body aim")) {
    h.push("Body aim")
    }
    if (UI.IsHotkeyActive("Rage", "Exploits", "Double tap")) {
    h.push("Double tap")
    }
    if (UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Desync on shot")) {
    h.push("On shot anti-aim")
    }
    if (UI.IsHotkeyActive("Rage", "Exploits", "Hide shots")) {
    h.push("Hide shots")
    }
    if (UI.IsHotkeyActive("Legit", "GENERAL", "Triggerbot", "Enabled")) {
    h.push("Triggerbot")
    }
    if(k_a >= k_h1 + 16 * (h.length - 1) ){
        k_a -= 3;
    }else if(k_a + 3.70 <= k_h1 + 16 * (h.length - 1) ){
        k_a += 3;
    }
    if(UI.IsMenuOpen()){

        Render.FilledRect(k_x, k_y - 1, k_w, k_h1 , [16, 16, 16, 185]);
        Render.FilledRect(k_x - 1,k_y, k_w, k_h1 -2, [16, 16, 16, 185]);
        Render.FilledRect(k_x - 1, k_y,k_w, k_h1 + 1, [16, 16, 16, 185]);
        Render.StringCustom(k_x + 45, k_y + 5, 0, "Hotkey List", [255, 255, 255, 255], fontpixel); 

        Render.FilledRect(k_x-1, k_y + 18, k_w, k_a, [15, 15, 15, 100]);
        Render.FilledRect(k_x, k_y + 18,k_w-1,k_a, [15, 15, 15, 100]);
        Render.FilledRect(k_x-1, k_y + 18, k_w+1, k_a, [15, 15, 15, 100]);


        Render.GradientRect(k_x - 1, k_y -1, k_w + 1, 3, 0, [167,16,77,100], [167,16,77,0])


        for (i = 0; i < h.length; i++)
        {
            Render.StringCustom(k_x + 5, k_y + 25 + 15 * i, 0, h[i], [255, 255, 255, 155], fontpixel);
            Render.StringCustom(k_x + 117, k_y + 25 + 15 * i, 0, "[On]", [255, 255, 255, 155], fontpixel);
        }


        var _do = function (name) {
            if (checkbox(false,false,k_x + k_w - 20,  k_y + 3, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
        }   
        _do("K_visible",10);


        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom(k_x + k_w - 26, k_y - 3, 0,UI.GetValue(scriptitems, "K_visible") ? "0" : "1",UI.GetValue(scriptitems, "K_visible") ? [ 255, 255, 255, 255 ] : [ 200, 200, 200, 255 ], font);


        Render.StringCustom(k_x + 8, k_y - 2, 0, "3", [ 167,16,77,255 ], font);

        var font = Render.AddFont("Font_Icon", 35, 100)
        Render.StringCustom(k_x + 7, k_y - 3, 0, "3", [ 167,16,77,100 ], font);

        //Render.FilledRect(k_x + k_w - 20, k_y + 3, 15, 15 , UI.GetValue(scriptitems, "K_visible") ? [255, 0, 0, 185] : [255, 255, 255, 185] );     
    }
    else if(UI.GetValue(scriptitems, "K_visible")){
        Render.FilledRect(k_x + k_w - 20, k_y + 3, 15, 15 , [255, 255, 255, 185]);
        Render.FilledRect(k_x, k_y - 1, k_w, k_h1 , [16, 16, 16, 185]);
        Render.FilledRect(k_x - 1,k_y, k_w, k_h1 -2, [16, 16, 16, 185]);
        Render.FilledRect(k_x - 1, k_y,k_w, k_h1 + 1, [16, 16, 16, 185]);
        Render.StringCustom(k_x + 45, k_y + 5, 0, "Hotkey List", [255, 255, 255, 255], fontpixel); 
        Render.FilledRect(k_x-1, k_y + 18, k_w,k_a, [15, 15, 15, 100]);
        Render.FilledRect(k_x, k_y + 18,k_w-1,k_a, [15, 15, 15, 100]);
        Render.FilledRect(k_x-1, k_y + 18, k_w+1,k_a, [15, 15, 15, 100]);
        
        Render.GradientRect(k_x - 1, k_y -1, k_w + 1, 3, 0, [167,16,77,100], [167,16,77,0])

        for (i = 0; i < h.length; i++)
        {
        Render.StringCustom(k_x + 5, k_y + 25 + 15 * i, 0, h[i], [255, 255, 255, 155], fontpixel);
        Render.StringCustom(k_x + 117, k_y + 25 + 15 * i, 0, "[On]", [255, 255, 255, 155], fontpixel);
        }
        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom(k_x + 8, k_y - 2, 0, "3", [ 167,16,77,255 ], font);
        var font = Render.AddFont("Font_Icon", 35, 100)
        Render.StringCustom(k_x + 7, k_y - 3, 0, "3", [ 167,16,77,100 ], font);
    } 


    var onkey = cursorBetween(k_x, k_y, k_w - 20, 40)
    const mouse_pos = Global.GetCursorPosition();
    if (Global.IsKeyPressed(1) && onkey && !waitkey) {

        _movekey = true;
        Keyx = mouse_pos[0] - UI.GetValue(scriptitems,"K_x");
        Keyy = mouse_pos[1] - UI.GetValue(scriptitems,"K_y");
        waitkey = true;


        UI.SetValue(scriptitems, "K_x",mouse_pos[0] - k_x)
        UI.SetValue(scriptitems, "K_y",mouse_pos[1] - k_y)

        
    }
    if (!Input.IsKeyPressed(0x01)) {
        _movekey = false;
        waitkey = false;
    }
    if (_movekey) {
        Render.FilledRect(k_x, k_y, k_w, k_h1, [15,15,15,100])

        UI.SetValue(scriptitems, "K_x",mouse_pos[0] - Keyx)
        UI.SetValue(scriptitems, "K_y",mouse_pos[1] - Keyy)
    }

}
function Spectator()
{
    if(!visibilidad)
    return;
    var s_x = 500 +  UI.GetValue(scriptitems,"S_x"),s_y = UI.GetValue(scriptitems,"S_y"),s_w = 140,s_h = 20,s_h2 = 51;


    const names = get_spectators();
    var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
    var fontIcono = Render.AddFont("Font_Icon", 13, 100);
    var text =  "Spectators (" + names.length + ")";


    if(UI.IsMenuOpen()){

        

        if(s_a >= s_h2 + 28 * (names.length - 1) ){
            s_a -= 3;
        }else if(s_a + 3.70 <= s_h2 + 28 * (names.length - 1) ){
            s_a += 3;
        }
        
        Render.FilledRect(s_x-1, s_y, s_w, s_a, [15, 15, 15, 100]);
        Render.FilledRect(s_x+1, s_y, s_w-1, s_a + 1, [15, 15, 15, 100]);
        Render.FilledRect(s_x-1, s_y, s_w+1, s_a, [15, 15, 15, 100]);

        Render.FilledRect(s_x, s_y -1,s_w, s_h , [16, 16, 16, 186]);
        Render.FilledRect(s_x -1,s_y, s_w, s_h -2, [16, 16, 16, 186]);
        Render.FilledRect(s_x -1, s_y,s_w, s_h + 1, [16, 16, 16, 186]);
        Render.StringCustom(s_x + 32 , s_y + 5 , 0, text, [ 255, 255, 255, 255 ], font);

        Render.GradientRect(s_x - 1, s_y -1, s_w + 1, 3, 0, [167,16,77,100], [167,16,77,0])

        for (i = 0; i < names.length; i++)
        {         
            Render.StringCustom(s_x + 30, s_y +  32 + 26 * i , 0, names[i], [255, 255, 255, 155], font);

            var fontIcono = Render.AddFont("Font_Icon", 34, 100);
            Render.StringCustom(s_x + 4, s_y +  21 + 26 * i , 0, "4", [ 167,16,77, 98], fontIcono);
        }
        
        
        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom(s_x + s_w - 26, s_y - 4, 0,UI.GetValue(scriptitems,"S_visible") ? "0" : "1",UI.GetValue(scriptitems, "S_visible") ? [ 255, 255, 255, 255 ] : [ 200, 200, 200, 255 ], font);

        Render.StringCustom(s_x + 5, s_y - 4, 0, "2", [ 167,16,77,255 ], font);

        var font = Render.AddFont("Font_Icon", 35, 100)
        Render.StringCustom(s_x + 5, s_y - 5, 0, "2", [ 167,16,77,100 ], font);

        var _do = function (name) {
            if (checkbox(false,false,s_x + s_w - 20,  s_y + 3, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
        }
    
        _do("S_visible",10);



    }else if(UI.GetValue(scriptitems,"S_visible")){

        if(s_a >= s_h2 + 28 * (names.length - 1) ){
            s_a -= 3;
        }else if(s_a + 3.70 <= s_h2 + 28 * (names.length - 1) ){
            s_a += 3;
        }
        
        Render.FilledRect(s_x-1, s_y, s_w, s_a, [15, 15, 15, 100]);
        Render.FilledRect(s_x+1, s_y, s_w-1, s_a + 1, [15, 15, 15, 100]);
        Render.FilledRect(s_x-1, s_y, s_w+1, s_a, [15, 15, 15, 100]);

        Render.FilledRect(s_x, s_y -1,s_w, s_h , [16, 16, 16, 185]);
        Render.FilledRect(s_x -1,s_y, s_w, s_h -2, [16, 16, 16, 185]);
        Render.FilledRect(s_x -1, s_y,s_w, s_h + 1, [16, 16, 16, 185]);
        Render.StringCustom(s_x + 32 , s_y + 5 , 0, text, [ 255, 255, 255, 255 ], font);
        Render.GradientRect(s_x - 1, s_y -1, s_w + 1, 3, 0, [167,16,77,100], [167,16,77,0])
        for (i = 0; i < names.length; i++)
        {         
            Render.StringCustom(s_x + 30, s_y +  32 + 26 * i , 0, names[i], [255, 255, 255, 155], font);

            var fontIcono = Render.AddFont("Font_Icon", 34, 100);
            Render.StringCustom(s_x + 4, s_y +  21 + 26 * i , 0, "4", [ 167,16,77, 98], fontIcono);

        }
        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom(s_x + 5, s_y - 4, 0, "2", [ 167,16,77,255 ], font);
        var font = Render.AddFont("Font_Icon", 35, 100)
        Render.StringCustom(s_x + 5, s_y - 5, 0, "2", [ 167,16,77,100 ], font);

    }




    var onSpec = cursorBetween(s_x, s_y, s_w - 20, 40)
    const mouse_pos = Global.GetCursorPosition();
    if (Global.IsKeyPressed(1) && onSpec && !waitSpec) {

        _moveSpec = true;
        Specx = mouse_pos[0] - UI.GetValue(scriptitems,"S_x");
        Specy = mouse_pos[1] - UI.GetValue(scriptitems,"S_y");
        waitSpec = true;

        UI.SetValue(scriptitems, "S_x",mouse_pos[0] - s_x)
        UI.SetValue(scriptitems, "S_y",mouse_pos[1] - s_y)

        
    }
    if (!Input.IsKeyPressed(0x01)) {
        _moveSpec = false;
        waitSpec = false;
    }
    if (_moveSpec) {
        Render.FilledRect(s_x, s_y, s_w, 20, [15,15,15,100])
        UI.SetValue(scriptitems, "S_x",mouse_pos[0] - Specx)
        UI.SetValue(scriptitems, "S_y",mouse_pos[1] - Specy)
    }

}
function indicator_bomb() {

    if(!visibilidad)
    return;

    var b_w = 115, b_h = 45;
    var b_x = UI.GetValue(scriptitems,"B_x"), b_y = UI.GetValue(scriptitems,"B_y");


    if(UI.IsMenuOpen()){
        Render.FilledRect(b_x, b_y -1,b_w, b_h , [16, 16, 16, 185]);
        Render.FilledRect(b_x -1,b_y, b_w, b_h -2, [16, 16, 16, 185]);
        Render.FilledRect(b_x -1, b_y,b_w, b_h + 1, [16, 16, 16, 185]);
        var font = Render.AddFont("MuseoSansCyrl-700", 8, 800);


        var icono = Render.AddFont("Font_Icon", 64, 100);
        Render.StringCustom(b_x + 3 , b_y - 7 , 0, "q",[167,16,77,200], icono);
        var icono = Render.AddFont("Font_Icon", 69, 100);
        Render.StringCustom(b_x + 3 , b_y - 7 , 0, "q",[167,16,77,140], icono);


        var icono = Render.AddFont("Font_Icon", 31, 100);
        Render.StringCustom(b_x + 50 , b_y , 0, "i",[167,16,57,140], icono);
        Render.StringCustom(b_x + 50 , b_y + 17 , 0, "u",[167,16,57,140], icono);



        Render.StringCustom(b_x + 56 , b_y + 7 , 0, "     40.0s",[255,255,255,255], font);


        Render.StringCustom(b_x + 56 , b_y + 26 , 0, "      A",[255, 255, 255,255], font);


        Render.FilledRect(b_x + b_w, b_y -1,25, 25 , [16, 16, 16, 185]);
        Render.FilledRect(b_x + b_w -1,b_y, 25, 25 -2, [16, 16, 16, 185]);
        Render.FilledRect(b_x + b_w -1, b_y,25, 25 + 1, [16, 16, 16, 185]);


        Render.GradientRect(b_x - 1, b_y-1, b_w + 26, 3, 0, [167,16,77,100], [167,16,77,0]);

    

        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom(b_x + b_w, b_y - 3, 0,UI.GetValue(scriptitems,"B_visible") ? "0" : "1",UI.GetValue(scriptitems, "B_visible") ? [ 255, 255, 255, 255 ] : [ 200, 200, 200, 255 ], font);



        var _do = function (name) {
            if (checkbox(false,false,b_x + b_w, b_y - 3, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
        }
    
        _do("B_visible",10);


    }else{
        if(UI.GetValue(scriptitems,"B_visible")){
            bomb_timer = (Entity.GetProp(Entity.GetEntitiesByClassID(129)[0], "CPlantedC4", "m_flC4Blow") - Globals.Curtime());
            if(bomb_timer <= 0){
            bomb_timer = 0;}
            Render.FilledRect(b_x, b_y -1,b_w, b_h , [16, 16, 16, 185]);
            Render.FilledRect(b_x -1,b_y, b_w, b_h -2, [16, 16, 16, 185]);
            Render.FilledRect(b_x -1, b_y,b_w, b_h + 1, [16, 16, 16, 185]); 

    
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)


            var bob_site = 0;
            var bombsite = Entity.GetProp(Entity.GetEntitiesByClassID(129)[0], "CPlantedC4", "m_nBombSite");
            if(bombsite == 0){
                bob_site = "A";
            }else{
                bob_site = "B";
            }


            var icono = Render.AddFont("Font_Icon", 64, 100);
            Render.StringCustom(b_x + 3 , b_y - 7 , 0, "q",[167,16,77,200], icono);
            var icono = Render.AddFont("Font_Icon", 69, 100);
            Render.StringCustom(b_x + 3 , b_y - 7 , 0, "q",[167,16,77,140], icono);

            var icono = Render.AddFont("Font_Icon", 31, 100);
            Render.StringCustom(b_x + 50 , b_y , 0, "i",[167,16,57,140], icono);
            Render.StringCustom(b_x + 50 , b_y + 17 , 0, "u",[167,16,57,140], icono);
    
            Render.StringCustom(b_x + 56 , b_y+7, 0, "     "+bomb_timer.toFixed(1)+"s",[255,255,255,255], font);
            Render.StringCustom(b_x + 56 , b_y+26, 0, "      "+bob_site, [255,255,255,255], font);

            Render.FilledRect(b_x, b_y-1,b_w, 2, [100, 50, 50, 255]);

            Render.GradientRect(b_x - 1, b_y-1, b_w + 1, 3, 0, [167,16,77,100], [167,16,77,0]);


            //Render.FilledRect(b_x, b_y-1, 0 +  (bomb_timer*2.9), 2, [255, 10, 60, 255]);

        }
    }

    
    var onbomb = cursorBetween(b_x, b_y, b_w, b_h)
    const mouse_pos = Global.GetCursorPosition();
    if (Global.IsKeyPressed(1) && onbomb && !waitBomb) {

        _moveBomb = true;
        Bombx = mouse_pos[0] - UI.GetValue(scriptitems,"B_x");
        Bomby = mouse_pos[1] - UI.GetValue(scriptitems,"B_y");
        waitBomb = true;


        UI.SetValue(scriptitems, "B_x",mouse_pos[0] - b_x)
        UI.SetValue(scriptitems, "B_y",mouse_pos[1] - b_y)

        
    }
    if (!Input.IsKeyPressed(0x01)) {
        _moveBomb = false;
        waitBomb = false;
    }
    if (_moveBomb) {
        Render.FilledRect(b_x, b_y, b_w, b_h, [15,15,15,100])
        Render.FilledRect(b_x + b_w, b_y, 25, 25, [15,15,15,100])
        UI.SetValue(scriptitems, "B_x",mouse_pos[0] - Bombx)
        UI.SetValue(scriptitems, "B_y",mouse_pos[1] - Bomby)
    }

}
function KeyStroke() {
    if(!visibilidad)
    return;

    ks_x = 100 +  UI.GetValue(scriptitems,"KS_x"),ks_y = 200 + UI.GetValue(scriptitems,"KS_y");
    var ks_w = 30, ks_h = 30;

    if(UI.IsMenuOpen()){

        // Input.IsKeyPressed(0x01)


        Render.FilledRect(ks_x, ks_y -1,ks_w, ks_h , Input.IsKeyPressed(0x53) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x -1,ks_y, ks_w, ks_h -2, Input.IsKeyPressed(0x53) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x -1, ks_y,ks_w, ks_h + 1, Input.IsKeyPressed(0x53) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
        Render.StringCustom(ks_x + 13, ks_y + 6, 0, "S", Input.IsKeyPressed(0x53) ? [167,16,77,100] : [255,255,255,155] , font)
        var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
        Render.StringCustom(ks_x + 11, ks_y + 5, 0, "S", Input.IsKeyPressed(0x53) ? [167,16,77,200] : [255,255,255,255] , font)

    //


        Render.FilledRect(ks_x - ks_w, ks_y -1,ks_w, ks_h , Input.IsKeyPressed(0x41) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x - ks_w -1,ks_y, ks_w, ks_h -2, Input.IsKeyPressed(0x41) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x - ks_w -1, ks_y,ks_w, ks_h + 1, Input.IsKeyPressed(0x41) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
        Render.StringCustom(ks_x - ks_w + 13, ks_y + 6, 0, "A", Input.IsKeyPressed(0x41) ? [167,16,77,100] : [255,255,255,155] , font)
        var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
        Render.StringCustom(ks_x - ks_w + 11, ks_y + 5, 0, "A",Input.IsKeyPressed(0x41) ? [167,16,77,200] : [255,255,255,255], font)


    //

        Render.FilledRect(ks_x + ks_w, ks_y -1,ks_w, ks_h , Input.IsKeyPressed(0x44) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x + ks_w -1,ks_y, ks_w, ks_h -2, Input.IsKeyPressed(0x44) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x + ks_w -1, ks_y,ks_w, ks_h + 1, Input.IsKeyPressed(0x44) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
        Render.StringCustom(ks_x + ks_w  + 11, ks_y + 5, 0, "D", Input.IsKeyPressed(0x44) ? [167,16,77,100] : [255,255,255,155] , font)
        var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
        Render.StringCustom(ks_x + ks_w + 9, ks_y + 5, 0, "D",Input.IsKeyPressed(0x44) ? [167,16,77,200] : [255,255,255,255], font)

    //


        Render.FilledRect(ks_x, ks_y - ks_h  -1,ks_w, ks_h , Input.IsKeyPressed(0x57) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x -1,ks_y - ks_h , ks_w, ks_h -2, Input.IsKeyPressed(0x57) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        Render.FilledRect(ks_x -1, ks_y - ks_h ,ks_w, ks_h + 1, Input.IsKeyPressed(0x57) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
        var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
        Render.StringCustom(ks_x + 9, ks_y - ks_h+ 1  + 5, 0, "W", Input.IsKeyPressed(0x57) ? [167,16,77,100] : [255,255,255,155] , font);
        var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
        Render.StringCustom(ks_x + 7, ks_y - ks_h+ 1  + 5, 0, "W",Input.IsKeyPressed(0x57) ? [167,16,77,200] : [255,255,255,255], font);




        Render.GradientRect(ks_x - ks_w - 1, ks_y + ks_h - 1, ks_w * 3, 2, 0, [167,16,77,100], [167,16,77,0]);

        var _do = function (name) {
            if (checkbox(false,false, ks_x + ks_w * 2 - 1, ks_y, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
        }
        _do("KS_visible");

        Render.FilledRect(ks_x + ks_w * 2 - 1, ks_y -1,25, 23 ,  [16, 16, 16, 186]);
        Render.FilledRect(ks_x + ks_w * 2 - 1,ks_y , 25, 23 -2, [16, 16, 16, 186]);
        Render.FilledRect(ks_x + ks_w * 2 - 1, ks_y ,25, 23 + 1,  [16, 16, 16, 186]);

        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom( ks_x + ks_w * 2 + 1, ks_y - 3, 0,UI.GetValue(scriptitems,"KS_visible") ? "0" : "1",UI.GetValue(scriptitems, "KS_visible") ? [ 255, 255, 255, 255 ] : [ 200, 200, 200, 255 ], font);

        Render.GradientRect(ks_x + ks_w * 2 - 1, ks_y + 23 - 1, 25, 2, 0, [167,16,77,100], [167,16,77,0]);

        Render.GradientRect(ks_x + ks_w * 2 - 2, ks_y + 23 - 1, 2, 11, 0, [167,16,77,100], [167,16,77,0]);

        
    }else if(UI.GetValue(scriptitems,"KS_visible")){
                // Input.IsKeyPressed(0x01)


                Render.FilledRect(ks_x, ks_y -1,ks_w, ks_h , Input.IsKeyPressed(0x53) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x -1,ks_y, ks_w, ks_h -2, Input.IsKeyPressed(0x53) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x -1, ks_y,ks_w, ks_h + 1, Input.IsKeyPressed(0x53) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
                Render.StringCustom(ks_x + 13, ks_y + 6, 0, "S", Input.IsKeyPressed(0x53) ? [167,16,77,100] : [255,255,255,155] , font)
                var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
                Render.StringCustom(ks_x + 11, ks_y + 5, 0, "S", Input.IsKeyPressed(0x53) ? [167,16,77,200] : [255,255,255,255] , font)
        
            //
        
        
                Render.FilledRect(ks_x - ks_w, ks_y -1,ks_w, ks_h , Input.IsKeyPressed(0x41) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x - ks_w -1,ks_y, ks_w, ks_h -2, Input.IsKeyPressed(0x41) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x - ks_w -1, ks_y,ks_w, ks_h + 1, Input.IsKeyPressed(0x41) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
                Render.StringCustom(ks_x - ks_w + 13, ks_y + 6, 0, "A", Input.IsKeyPressed(0x41) ? [167,16,77,100] : [255,255,255,155] , font)
                var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
                Render.StringCustom(ks_x - ks_w + 11, ks_y + 5, 0, "A",Input.IsKeyPressed(0x41) ? [167,16,77,200] : [255,255,255,255], font)
        
        
            //
        
                Render.FilledRect(ks_x + ks_w, ks_y -1,ks_w, ks_h , Input.IsKeyPressed(0x44) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x + ks_w -1,ks_y, ks_w, ks_h -2, Input.IsKeyPressed(0x44) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x + ks_w -1, ks_y,ks_w, ks_h + 1, Input.IsKeyPressed(0x44) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
                Render.StringCustom(ks_x + ks_w  + 11, ks_y + 5, 0, "D", Input.IsKeyPressed(0x44) ? [167,16,77,100] : [255,255,255,155] , font)
                var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
                Render.StringCustom(ks_x + ks_w + 9, ks_y + 5, 0, "D",Input.IsKeyPressed(0x44) ? [167,16,77,200] : [255,255,255,255], font)
        
            //
        
        
                Render.FilledRect(ks_x, ks_y - ks_h  -1,ks_w, ks_h , Input.IsKeyPressed(0x57) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x -1,ks_y - ks_h , ks_w, ks_h -2, Input.IsKeyPressed(0x57) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                Render.FilledRect(ks_x -1, ks_y - ks_h ,ks_w, ks_h + 1, Input.IsKeyPressed(0x57) ? [26, 26, 26, 186]: [16, 16, 16, 186]);
                var font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
                Render.StringCustom(ks_x + 9, ks_y - ks_h+ 1  + 5, 0, "W", Input.IsKeyPressed(0x57) ? [167,16,77,100] : [255,255,255,155] , font);
                var font = Render.AddFont("MuseoSansCyrl-700", 11, 800)
                Render.StringCustom(ks_x + 7, ks_y - ks_h+ 1  + 5, 0, "W",Input.IsKeyPressed(0x57) ? [167,16,77,200] : [255,255,255,255], font);
        
        
        
        
                Render.GradientRect(ks_x - ks_w - 1, ks_y + ks_h - 1, ks_w * 3, 2, 0, [167,16,77,100], [167,16,77,0]);
        
    }

    var onSpec = cursorBetween(ks_x, ks_y, ks_w, ks_h) | cursorBetween(ks_x - ks_w, ks_y -1,ks_w, ks_h) |
    cursorBetween(ks_x + ks_w, ks_y -1,ks_w, ks_h) |  cursorBetween(ks_x, ks_y - ks_h  -1,ks_w, ks_h);
    const mouse_pos = Global.GetCursorPosition();
    if (Global.IsKeyPressed(1) && onSpec && !waitKeyStroke) {

        _moveKeyStroke = true;
        KeyStrokex = mouse_pos[0] - UI.GetValue(scriptitems,"KS_x");
        KeyStrokey = mouse_pos[1] - UI.GetValue(scriptitems,"KS_y");
        waitKeyStroke = true;

        UI.SetValue(scriptitems, "KS_x",mouse_pos[0] - ks_x)
        UI.SetValue(scriptitems, "KS_y",mouse_pos[1] - ks_y)

        
    }
    if (!Input.IsKeyPressed(0x01)) {
        _moveKeyStroke = false;
        waitKeyStroke = false;
    }
    if (_moveKeyStroke) {

        Render.FilledRect(ks_x, ks_y, ks_w, 20, [15,15,15,100])
        Render.FilledRect(ks_x - ks_w, ks_y -1,ks_w, 20, [15,15,15,100])
        Render.FilledRect(ks_x + ks_w, ks_y -1,ks_w, 20, [15,15,15,100])
        Render.FilledRect(ks_x, ks_y - ks_h  -1,ks_w, 30, [15,15,15,100])


        UI.SetValue(scriptitems, "KS_x",mouse_pos[0] - KeyStrokex)
        UI.SetValue(scriptitems, "KS_y",mouse_pos[1] - KeyStrokey)
    }
}
function wm_Fake() {

    if(!visibilidad)
    return;
    var pingjugador = Math.round(Entity.GetProp(Entity.GetLocalPlayer(), "CPlayerResource", "m_iPing")).toString()
    var paseo = pingjugador == "NaN" ? "Invalid Server" : pingjugador;
    var text = "FakeCheat           "  + "| Ping: ";
    var font = Render.AddFont("MuseoSansCyrl-700", 9, 800)
    var w_w = Render.TextSizeCustom(text + paseo, font)[0] + 35;
    var w_x = Global.GetScreenSize()[0];

    w_x = w_x - w_w - 10;

    Render.FilledRect(w_x, 13 -1, w_w, 21 , [16, 16, 16, 185]);
    Render.FilledRect(w_x -1, 13, w_w, 21 -2, [16, 16, 16, 185]);
    Render.FilledRect(w_x -1, 13, w_w, 21 + 1, [16, 16, 16, 185]);

    Render.GradientRect(w_x - 1, 11, w_w + 1, 3, 0, [167,16,77,100], [167,16,77,0]);



    var font = Render.AddFont("Font_Icon", 35, 100)
    Render.StringCustom(w_x,9, 0, "7", [ 167,16,77,255 ], font);
    var font = Render.AddFont("Font_Icon", 41, 100)
    Render.StringCustom(w_x,6, 0, "7", [ 167,16,77,100 ], font);

    var font = Render.AddFont("MuseoSansCyrl-700", 9, 800)
    Render.StringCustom(w_x+27, 17, 0, text, [ 255, 255, 255, 255 ], font);

    var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
    Render.StringCustom(w_x+157, 19, 0, paseo, [ 167,16,77,255 ], font);

    var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
    Render.StringCustom(w_x+90, 15, 0, "Beta", [ 167,16,77,255 ], font);
}
function Indicador() { 

    if(!visibilidad)
    return;

    localPlayer = Entity.GetLocalPlayer();

    if (!Entity.IsValid(localPlayer))
    return;

    if(!UI.IsHotkeyActive("Visual","WORLD","View","Thirdperson"))
    return;

    
    var position = Entity.GetHitboxPosition(localPlayer, 13);
    var location = position;      
    var position = Render.WorldToScreen([location[0], location[1], location[2] + 15]);
    var w = 105, h = 64;






    if(position[0] + 67 <= menuX){   
        menuX -= 0.5;
    }else if(position[0] + 37 >= menuX ){
        menuX += 0.5;
    }
    if(position[1] + 15 <= menuY){      
        menuY -= 0.5;
    }else if(position[1] + 25 >= menuY){
        menuY += 0.5;
    } 


    if(UI.IsMenuOpen()){
                
        Render.FilledRect(menuX , menuY -1,w, h , [16, 16, 16, 155]);
        Render.FilledRect(menuX  -1,menuY, w, h -2, [16, 16, 16, 155]);
        Render.FilledRect(menuX  -1, menuY,w, h + 1, [16, 16, 16, 155]);



        Render.GradientRect(menuX -1, menuY -1, w, 2, 0, [167,16,77,200], [167,16,77,0]);
        font = Render.AddFont("MuseoSansCyrl-700", 9, 800)


        if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
        {
            Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,360, 20, [80, 200, 120, quitame])
            curtime = Globals.Curtime();
            
            if (curtime <= delay)
            {
                quitame = 0;
                fillbar += 2;
                shotsfired = 1;      
                if(fillbar >= 30) fillbar = 30;     
                Render.StringCustom(menuX +40,menuY + 9, 1, "DoubleTap", [ 255, 255, 255, 155 ], font);
                Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,360, 20, [255, 255, 255, 30])
                Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,(fillbar * 15.40), 20, [80, 200, 120, 155])
            }
            else
            {
                quitame = 255;
                Render.StringCustom(menuX +40,menuY + 9, 1, "DoubleTap", [ 255, 255, 255, 155 ], font);    
                shotsfired = 0;
            }    
        }
        else
        {
            Render.StringCustom(menuX +40,menuY + 9, 1, "DoubleTap", [ 255, 255, 255, 155 ], font);
            Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,360, 20, [255, 50, 50, 155])
            
        }   

        if(UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")){
            Render.StringCustom(menuX +41,menuY + 28, 1, "Normal AA", [ 255, 255, 255, 155 ], font);
            font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
            if(UI.IsHotkeyActive(scriptitems,"Legit AA Key")){
                Render.StringCustom(menuX +89,menuY + 25, 1, ">>", [ 255, 10, 60, 155 ], font);
            }else{
                Render.StringCustom(menuX +89,menuY + 25, 1, "<<", [ 255, 10, 60, 155 ], font);
            }
        }else{
            Render.StringCustom(menuX +37,menuY + 28, 1, "Invert AA", [ 255, 255, 255, 155 ], font);
            font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
            if(UI.IsHotkeyActive(scriptitems,"Legit AA Key")){
                Render.StringCustom(menuX +89,menuY + 25, 1, "<<", [ 255, 10, 60, 155 ], font);
            }else{
                Render.StringCustom(menuX +89,menuY + 25, 1, ">>", [ 255, 10, 60, 155 ], font);
            }
        }


        font = Render.AddFont("MuseoSansCyrl-700", 9, 800)
        Render.StringCustom(menuX +26,menuY + 45, 1, "K:      ", [ 255, 255, 255, 155 ], font);
        Render.StringCustom(menuX +26,menuY + 45, 1, "    "+kills, [ 40, 70, 255, 155 ], font);
        Render.StringCustom(menuX +71,menuY + 45, 1, "D:      ", [ 255, 255, 255, 155 ], font);
        Render.StringCustom(menuX +71,menuY + 45, 1, "    "+deaths, [ 40, 70, 255, 155 ], font);





        Render.FilledRect(menuX + w, menuY -1,25, 25 , [16, 16, 16, 155]);
        Render.FilledRect(menuX + w -1,menuY, 25, 25 -2, [16, 16, 16, 155]);
        Render.FilledRect(menuX + w -1, menuY,25, 25 + 1, [16, 16, 16, 155]);
        Render.GradientRect(menuX - 1, menuY-1, w + 26, 3, 0, [167,16,77,255], [167,16,77,0]);


        var font = Render.AddFont("Font_Icon", 29, 100)
        Render.StringCustom(menuX + w, menuY - 3, 0,UI.GetValue(scriptitems,"ID_visible") ? "0" : "1",UI.GetValue(scriptitems, "ID_visible") ? [ 255, 255, 255, 255 ] : [ 200, 200, 200, 155 ], font);

        var _do = function (name) {
            if (checkbox(false,false,menuX + w, menuY - 3, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
        }
        _do("ID_visible",10);

        

    }else if(UI.GetValue(scriptitems,"ID_visible")){
         
    Render.FilledRect(menuX, menuY -1, w, h , [16, 16, 16, 126]);
    Render.FilledRect(menuX -1,menuY, w, h -2, [16, 16, 16, 126]);
    Render.FilledRect(menuX -1, menuY,w, h + 1, [16, 16, 16, 126]);


    Render.GradientRect(menuX -1, menuY -1, w, 2, 0, [167,16,77,200], [167,16,77,0]);


    font = Render.AddFont("MuseoSansCyrl-700", 9, 800)
    if(UI.IsHotkeyActive("Rage", "GENERAL", "Exploits", "Doubletap", "Enabled"))
    {
        Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,360, 20, [80, 200, 120, quitame])
        curtime = Globals.Curtime();
        
        if (curtime <= delay)
        {
            quitame = 0;
            fillbar += 2;
            shotsfired = 1;      
            if(fillbar >= 30) fillbar = 30;     
            Render.StringCustom(menuX +40,menuY + 9, 1, "DoubleTap", [ 255, 255, 255, 155 ], font);
            Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,360, 20, [255, 255, 255, 30])
            Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,(fillbar * 15.40), 20, [80, 200, 120, 155])
        }
        else
        {
            quitame = 255;
            Render.StringCustom(menuX +40,menuY + 9, 1, "DoubleTap", [ 255, 255, 255, 155 ], font);    
            shotsfired = 0;
        }    
    }
    else
    {
        Render.StringCustom(menuX +40,menuY + 9, 1, "DoubleTap", [ 255, 255, 255, 155 ], font);
        Render.Arc(menuX + 88, menuY + 16, 6, 3, 0,360, 20, [255, 50, 50, 155])
        
    }   
    
    

    



    if(UI.IsHotkeyActive("Anti-Aim", "Fake angles", "Inverter")){
        Render.StringCustom(menuX +41,menuY + 28, 1, "Normal AA", [ 255, 255, 255, 155 ], font);
        font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
        if(UI.IsHotkeyActive(scriptitems,"Legit AA Key")){
            Render.StringCustom(menuX +89,menuY + 25, 1, ">>", [ 255, 10, 60, 155 ], font);
        }else{
            Render.StringCustom(menuX +89,menuY + 25, 1, "<<", [ 255, 10, 60, 155 ], font);
        }
    }else{
        Render.StringCustom(menuX +37,menuY + 28, 1, "Invert AA", [ 255, 255, 255, 155 ], font);
        font = Render.AddFont("MuseoSansCyrl-700", 12, 800)
        if(UI.IsHotkeyActive(scriptitems,"Legit AA Key")){
            Render.StringCustom(menuX +89,menuY + 25, 1, "<<", [ 255, 10, 60, 155 ], font);
        }else{
            Render.StringCustom(menuX +89,menuY + 25, 1, ">>", [ 255, 10, 60, 155 ], font);
        }
    }
    font = Render.AddFont("MuseoSansCyrl-700", 9, 800)
    Render.StringCustom(menuX +26,menuY + 45, 1, "K:      ", [ 255, 255, 255, 155 ], font);
    Render.StringCustom(menuX +26,menuY + 45, 1, "    "+kills, [ 40, 70, 255, 155 ], font);
    Render.StringCustom(menuX +71,menuY + 45, 1, "D:      ", [ 255, 255, 255, 155 ], font);
    Render.StringCustom(menuX +71,menuY + 45, 1, "    "+deaths, [ 40, 70, 255, 155 ], font);

    }
}




/// Menu
var x = 0, y = 250;
function InforFake() {
    var w = 600, h = 360;
    var watermark_name = Entity.GetName(Entity.GetLocalPlayer( ));
    Render.FilledRect(x + w, y -1, 200, 200, [16, 16, 16, 185]);
    Render.FilledRect(x + w -1, y, 200, 200 -2, [16, 16, 16, 185]);
    Render.FilledRect(x + w -1, y,200, 200 + 1, [16, 16, 16, 185]);
    Render.FilledRect(x + w, y -1, 200, 2, [ 167,16,77,100 ]);
    Render.FilledRect(x + w , y + 28, 200, 1 ,[30,30,30,255]);

    font = Render.AddFont( "MuseoSansCyrl-700", 13, 800);
    Render.StringCustom( x + w + 6, y + 5, 0, "Information [JS]", [ 255, 255, 255, 200 ], font );
    font = Render.AddFont( "MuseoSansCyrl-700", 9, 800);
    Render.StringCustom( x + w + 6, y + 38, 0, "Created By "+cusma, [ 255, 255, 255, 200 ], font );
    Render.StringCustom( x + w + 6, y + 58, 0, "Version: v0.1", [ 255, 255, 255, 200 ], font );
    Render.StringCustom( x + w + 6, y + 78, 0, "Username: ["+watermark_name+"]", [ 255, 255, 255, 200 ], font );

    Render.StringCustom( x + w + 6, y + 98, 0, "Discord:", [ 255, 255, 255, 200 ], font );
    Render.StringCustom( x + w + 6, y + 118, 0, "https://discord.gg/yUm7fwjQh5", [ 167,16,77,220 ], font );
    Render.StringCustom( x + w + 6, y + 138, 0, "https://discord.gg/yUm7fwjQh5", [ 167,16,77,220 ], font );

}
function Menu_Fake()
{
    var w = 600, h = 360;

    if(!visibilidad)
    return;

    UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Watermark", false)
    UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Spectator list", false)
    UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Team damage list", false)
    UI.SetValue("Misc","PERFORMANCE & INFORMATION","Information","Show keybind states", false)

    if(!UI.IsMenuOpen())
    return;

    Render.FilledRect(x, y -1, w, h, [16, 16, 16, 185]);
    Render.FilledRect(x -1, y, w, h -2, [16, 16, 16, 185]);
    Render.FilledRect(x -1, y,w, h + 1, [16, 16, 16, 185]);

    Render.GradientRect(x - 1, y -1, w + 1, 3, 0, [167,16,77,100], [167,16,77,0])


    btn(x,y + 143, 160, 50,1 ,tap == 0 ? [167,16,77,255] : [0,0,0,0], [0,0,0,0], "Aimbot",11,"RageBot Extra" ,8,0,"8",tap == 0 ? [255,255,255,255] : [255,255,255,155]);
    btn(x,y + 193, 160, 50,1 ,tap == 1 ? [167,16,77,255] : [0,0,0,0], [0,0,0,0], "Anti-aim",11,"AA Custom",8,1,"9", tap == 1 ? [255,255,255,255] : [255,255,255,155]);
    btn(x,y + 246, 160, 50,1 ,tap == 2 ? [167,16,77,255] : [0,0,0,0], [0,0,0,0], "Visual",12,"Custom Visual",8,2,"6", tap == 2 ? [255,255,255,255] : [255,255,255,155]);
    btn(x,y + 297, 160, 50,1 ,tap == 3 ? [167,16,77,255] : [0,0,0,0], [0,0,0,0], "Misc",12,"Extra Settings",8,3,"5", tap == 3 ? [255,255,255,255] : [255,255,255,155]);

    Render.FilledRect(x + 155 , y , 1 , h ,[30,30,30,255]);
    Render.FilledRect(x + 155 , y + 28, w - 155, 1 ,[30,30,30,255]);
    Render.FilledRect(x ,y + 142, 156, 1, [30,30,30,255]);
    Render.FilledRect(x ,y + 192, 156, 1, [30,30,30,255]);
    Render.FilledRect(x ,y + 244, 156, 1, [30,30,30,255]);
    Render.FilledRect(x ,y + 297, 156, 1, [30,30,30,255]);

    font_Logo = Render.AddFont( "MuseoSansCyrl-700", 13, 800);
    Render.StringCustom( x + 20, y + 5, 0, "FakeCheat [JS]", [ 255, 255, 255, 255 ], font_Logo );


    var font = Render.AddFont("Font_Icon", 181, 100);
    Render.StringCustom(x, y, 0, "7", [ 167,16,77,255 ], font);
    var font = Render.AddFont("Font_Icon", 195, 100);
    Render.StringCustom(x , y + 1, 0, "7", [ 167,16,77,100 ], font);



    var font = Render.AddFont("Font_Icon", 30, 100);
    Render.StringCustom(x + w - 30, y + h - 30, 0, "t", UI.GetValue(scriptitems,"IF_visible") ? [ 167,16,77,100] : [ 167,16,77,255] | cursorBetween( x + w - 30, y + h - 30,30,30) ? [ 167,16,77,190] : [ 167,16,77,255], font);

    var _do = function (name) {  
        if (checkbox(false,false, x + w - 30, y + h - 30, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
    }
    _do("IF_visible");
    if(UI.GetValue(scriptitems,"IF_visible")){
        InforFake(); 
    }




    font_Logo = Render.AddFont( "MuseoSansCyrl-700", 11, 800);
    localplayer_index = Entity.GetLocalPlayer();
    plrName = Entity.GetName(localplayer_index);
    Render.StringCustom( x + 164, y + 6, 0,modulo, [ 255, 255, 255, 255 ], font_Logo );

    resetSpacing()

    switch (tap) {
        case 0:
            modulo = "Aimbot";
            Aimbot();
            break;
        case 1:
            modulo = "Anti-Aim";
            Anti_Aim();
        break;
        case 2:
            modulo = "Visual";
            Visual();
        break;
        case 3:
            modulo = "Misc";
            Misc();
        break;


        default:
            Aimbot();
            break;
    }




    var onmenu = cursorBetween(x, y, w, 40) | cursorBetween(x, y, 156, 140);
    const mouse_pos = Global.GetCursorPosition();
    if (Global.IsKeyPressed(1) && onmenu && !waitforup) {

        _movemenu = true
        offsetx = mouse_pos[0] - x;
        offsety = mouse_pos[1] - y;
        waitforup = true

        x = mouse_pos[0] - x;
        y = mouse_pos[1] - y;
        
    }
    if (!Input.IsKeyPressed(0x01)) {
        _movemenu = false
        waitforup = false
    }
    if (_movemenu) {

        x = mouse_pos[0] - offsetx;
        y = mouse_pos[1] - offsety

        Render.FilledRect(x, y, w, h, [15,15,15,100])
        if(UI.GetValue(scriptitems,"IF_visible")){
            Render.FilledRect(x + w, y, 200, 200, [15,15,15,100])
        }
        

    }
}
function loadFkJS() {

    var duracion = 1000;
    if(tiempo >= duracion){

       visibilidad = true;

    }else{
       tiempo += 6;


       l_w = Global.GetScreenSize()[0],l_h = Global.GetScreenSize()[1];
       Render.FilledRect(0, 0, l_w, l_h,[15,15,15,200])

       font = Render.AddFont( "MuseoSansCyrl-700", 8, 800);
       var text = "Loading...";


       var w_w = Render.TextSizeCustom(text, font)[0];
       if(tiempo >= duracion - 200){
         Render.StringCustom(l_w / 2 -(w_w / 2) - 1  , l_h / 2 + 12, 0,"Completed...", [255,255,255,255], font)

       }else{
        Render.StringCustom(l_w / 2 + 3 -(w_w / 2)  , l_h / 2 + 12, 0,"Loading...", [255,255,255,255], font)
       }

       Render.FilledCircle(l_w / 2 , l_h / 2 - 16, 25, [15,15,15,186])
       Render.FilledCircle(l_w / 2 -1, l_h / 2 - 17, 25, [15,15,15,186])
       Render.FilledCircle(l_w / 2 +1, l_h / 2 - 18, 25, [15,15,15,186])

       Render.Arc(l_w / 2 , l_h / 2 - 17, 23, 22, barra,145, 20,[167,16,77,255])

       var font = Render.AddFont("Font_Icon", 35, 100)
       Render.StringCustom(l_w / 2 - 14, l_h / 2 - 34, 0, "7", [ 167,16,77,255 ], font);
       var font = Render.AddFont("Font_Icon", 41, 100)
       Render.StringCustom(l_w / 2 - 14 , l_h / 2 - 34, 0, "7", [ 167,16,77,100 ], font);
       

    } 

}




var m_x = x + 157, m_y = y + 30;

var _Checkbox = function (pru,name,x,y) {
    if (checkbox(pru,true,m_x + 10 + x, m_y + y, name, UI.GetValue(scriptitems, name))) UI.SetValue(scriptitems, name, !UI.GetValue(scriptitems, name))
}
var _ComboSelect = function (name,item,x,y,id) {
    beginComboBox(m_x + x, m_y + y,name,item,UI.GetValue(scriptitems,name),id)
    var returnval = endComboBox(id)
    if(returnval + "" != "undefined" )
    {
        UI.SetValue(scriptitems,name,returnval)        
    }

}
var _ComboMulti = function(x,y,name,contents,id){
    beginMultiComboBox(m_x + x, m_y + y,name,contents,UI.GetValue(scriptitems,name),id)
    var returnval = endComboBox(id)
    if( returnval + "" != "undefined")
        UI.SetValue(scriptitems,name,returnval)
}
var _Slider = function (indicator_,x,y,name, min, max, thing, thing2,id) {
    var clamp = function (val, min, max) {
        if (val > max)
            return max
        if (min > val)
            return min
        return val
    }
    var returnval = sliderFloat(indicator_,m_x + x, m_y + y, name, min, max, thing, thing2,id,UI.GetValue(scriptitems,name))
    UI.SetValue(scriptitems, name, clamp(returnval, min, max))
}



/// Modulos
function Aimbot() {   
    m_x = x + 157, m_y = y + 30;


    _Checkbox(false,"[DT] Intant Recharge",10,25); 




}
function Anti_Aim() {   
    m_x = x + 157, m_y = y + 30;

    _Checkbox(true,"Legit AA",10,25);


}
function Visual() {   
    m_x = x + 157, m_y = y + 30;
    
    _Checkbox(false,"Tracers Shot",10,25);  
    _Checkbox(false,"Remake ESP",10,55);
//    _ComboMulti(240,80,"Test",["Corned","Rect"], 100)
    _ComboSelect("Custom Trail",["None","Rect Trail","Circle Trail"],240,80,10);
    _ComboSelect("Granade ESP",["None","Circle Indicator","Rect Indicator"],240,30,1);

}
function Misc() {   
    m_x = x + 157, m_y = y + 30;

    _Checkbox(false,"Log Events",10,25); 
    _Checkbox(false,"Clantag",10,55); 
    _Checkbox(false,"BreakLeg",10,85); 
    _Slider(true,240,30,"Slow-walk Speed:",0,135,false,0,54)

}










// Features
var original_aa = true;
function legit_aa() {
  if (UI.IsHotkeyActive(scriptitems,"Legit AA KeyBind")&& UI.GetValue(scriptitems,"Legit AA")) {
    if (original_aa) {
      restrictions_cache = UI.GetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions");
      hiderealangle_cache = UI.GetValue("Anti-Aim", "Fake angles", "Hide real angle");
      yaw_offset_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset");
      jitter_offset_cache = UI.GetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset");
      pitch_cache = UI.GetValue("Anti-Aim", "Extra", "Pitch");
      original_aa = false;
    };
    UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", 0);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", 178);
    UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", 6);
    UI.SetValue("Anti-Aim", "Extra", "Pitch", 0);



  } else {
    if (!original_aa) {
      UI.SetValue("Misc", "PERFORMANCE & INFORMATION", "Information", "Restrictions", restrictions_cache);
      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw_offset_cache);
      UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Jitter offset", jitter_offset_cache);
      UI.SetValue("Anti-Aim", "Extra", "Pitch", pitch_cache);
      original_aa = true;


    }
  }
}
function granadas_Draw()
{   
    if(!visibilidad)
    return;

    var x = 200, y = 200, w = 80, h = 20;
    var hs_fuego2 = Entity.GetEntitiesByClassID(114);
    var hs_fuego = Entity.GetEntitiesByClassID(100);
    var hs_granada = Entity.GetEntitiesByClassID(9);
    var hs_Smoke = Entity.GetEntitiesByClassID(157);

    var granade_ = UI.GetValue(scriptitems, "Granade ESP");
    if(granade_ == 1){
        for ( i = 0; i < hs_Smoke.length; i++)
        {       
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_Smoke[i]);
            const distance = distance_in_ft(origin, destination);
    
            world = Entity.GetRenderOrigin(hs_Smoke[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
    
    
            y= screen_bot[1], x = screen_bot[0];
  
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
    
            Render.Arc(x, y, 22, 21, barra,145, 20,[167,16,77,255])
    
    
            var icono = Render.AddFont("Font_Icon", 41, 100)
            Render.StringCustom(x + 1,y - 27, 1 , "r" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 42, 100)
            Render.StringCustom(x + 3,y - 28, 1 , "r" , [167,16,77,155], icono)
    

            var font = Render.AddFont("MuseoSansCyrl-700", 6, 800)  
            Render.StringCustom(x - 9, y + 5, 0, " "+distance+"m", [255,255,255,255], font)
    

        }
        for ( i = 0; i < hs_fuego.length; i++)
        {   
    
            var time = Entity.GetProp(hs_fuego[i], "CInferno", "m_nFireEffectTickBegin") * Globals.TickInterval();
            var factor = clamp(((time + 7) - Globals.Curtime()) / 7, 0, 7); 
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_fuego[i]);
            const distance = distance_in_ft(origin, destination);
    
    
            world = Entity.GetRenderOrigin(hs_fuego[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
    
    
            draw_circle_3d( world[0], world[1], world[2],150, 360, 0, [0,0,0,0], true, [255, 10, 60, 120]);
    
    
    
            y= screen_bot[1], x = screen_bot[0];
            
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
    
            Render.Arc(x, y, 22, 21, barra,360*factor, 20,[0,143,57, 255])
    
    
            var icono = Render.AddFont("Font_Icon", 41, 100)
            Render.StringCustom(x + 1,y - 27, 1 , "w" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 42, 100)
            Render.StringCustom(x + 3,y - 28, 1 , "w" , [167,16,77,155], icono)
    

            var font = Render.AddFont("MuseoSansCyrl-700", 6, 800)  
            Render.StringCustom(x - 9, y + 5, 0, " "+distance+"m", [255,255,255,255], font)
    

    
        }
        for ( i = 0; i < hs_fuego2.length; i++)
        {       
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_fuego2[i]);
            const distance = distance_in_ft(origin, destination);
    
            world = Entity.GetRenderOrigin(hs_fuego2[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );

            y= screen_bot[1], x = screen_bot[0];

            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
    
            Render.Arc(x, y, 22, 21, barra,145, 20,[167,16,77,255])
    
    
            var icono = Render.AddFont("Font_Icon", 41, 100)
            Render.StringCustom(x + 1,y - 27, 1 , "w" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 42, 100)
            Render.StringCustom(x + 3,y - 28, 1 , "w" , [167,16,77,155], icono)
    

            var font = Render.AddFont("MuseoSansCyrl-700", 6, 800)  
            Render.StringCustom(x - 9, y + 5, 0, " "+distance+"m", [255,255,255,255], font)
    
    
        }
        for ( i = 0; i < hs_granada.length; i++)
        {       
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_granada[i]);
            const distance = distance_in_ft(origin, destination);
    
            world = Entity.GetRenderOrigin(hs_granada[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
    
            y= screen_bot[1], x = screen_bot[0];
   

    
            if (Entity.GetProp(hs_granada[i], "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin"))
            {
                continue;
            }

            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
            Render.FilledCircle(x, y, 25, [16,16,16, 186])      
    
            Render.Arc(x, y, 22, 21, barra,145, 20,[167,16,77,255])
    
    
            var icono = Render.AddFont("Font_Icon", 41, 100)
            Render.StringCustom(x + 1,y - 27, 1 , "e" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 42, 100)
            Render.StringCustom(x + 3,y - 28, 1 , "e" , [167,16,77,155], icono)
    

            var font = Render.AddFont("MuseoSansCyrl-700", 6, 800)  
            Render.StringCustom(x - 9, y + 5, 0, " "+distance+"m", [255,255,255,255], font)
    

        }
    }else if(granade_ == 2){
        for ( i = 0; i < hs_Smoke.length; i++)
        {       
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_Smoke[i]);
            const distance = distance_in_ft(origin, destination);
    
            world = Entity.GetRenderOrigin(hs_Smoke[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
    
    
            y= screen_bot[1], x = screen_bot[0];
            w = 102;
    
    
    
    
            Render.FilledRect(x, y - 1, w, h, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h-2, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h+1, [16,16,16, 185]);
            Render.GradientRect(x - 1, y -1, w, 3, 0, [167,16,77,100], [167,16,77,0])
    
            var icono = Render.AddFont("Font_Icon", 28, 100)
            Render.StringCustom(x + 12,y - 4, 1 , "r" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 31, 100)
            Render.StringCustom(x + 14,y - 4, 1 , "r" , [167,16,77,155], icono)
    
    
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
            Render.StringCustom(x + 26, y + 5, 0, "Smoke |", [255,255,255,255], font)
            Render.StringCustom(x + 69, y + 5, 0, " "+distance+"m", [255,255,255,255], font)
    
    
    
    
        }
        for ( i = 0; i < hs_fuego.length; i++)
        {   
    
            var time = Entity.GetProp(hs_fuego[i], "CInferno", "m_nFireEffectTickBegin") * Globals.TickInterval();
            var factor = clamp(((time + 7) - Globals.Curtime()) / 7, 0, 7); 
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_fuego[i]);
            const distance = distance_in_ft(origin, destination);
    
    
            world = Entity.GetRenderOrigin(hs_fuego[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
    
    
            draw_circle_3d( world[0], world[1], world[2],150, 360, 0, [0,0,0,0], true, [255, 10, 60, 120]);
    
    
    
            y= screen_bot[1], x = screen_bot[0];
            w = 95;
    
    
            Render.FilledRect(x, y - 1, w, h, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h-2, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h+1, [16,16,16, 185]);
            Render.GradientRect(x - 1, y -1, w, 3, 0, [167,16,77,100], [167,16,77,0])
    
    
            var icono = Render.AddFont("Font_Icon", 28, 100)
            Render.StringCustom(x + 10,y - 5, 1 , "w" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 31, 100)
            Render.StringCustom(x + 12,y - 5, 1 , "w" , [167,16,77,155], icono)
    
    
    
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
            Render.StringCustom(x + 23,y + 4, 0, "Molotov", [255,255,255,255], font)
    
    
            Render.Arc(x + 80, y + 8, 6, 4, 0,360, 20, [255, 255, 255, 30])
            Render.Arc(x + 80, y + 8, 6, 4, 0,360*factor, 20, [80, 200, 120, 255])
    
    
        }
        for ( i = 0; i < hs_fuego2.length; i++)
        {       
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_fuego2[i]);
            const distance = distance_in_ft(origin, destination);
    
            world = Entity.GetRenderOrigin(hs_fuego2[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
            var icono = Render.AddFont("undefeated", 14, 800)
    
            y= screen_bot[1], x = screen_bot[0];
            w = 105;
    
            Render.FilledRect(x, y - 1, w, h, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h-2, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h+1, [16,16,16, 185]);
            Render.GradientRect(x - 1, y -1, w, 3, 0, [167,16,77,100], [167,16,77,0])
    
            var icono = Render.AddFont("Font_Icon", 28, 100)
            Render.StringCustom(x + 10,y - 5, 1 , "w" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 31, 100)
            Render.StringCustom(x + 12,y - 5, 1 , "w" , [167,16,77,155], icono)
    
    
    
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
            Render.StringCustom(x + 23,y + 4, 0, "Molotov | ", [255,255,255,255], font)
    
            Render.StringCustom(x + 76, y + 3, 0, distance+"m", [255,255,255,255], font)
    
    
        }
        for ( i = 0; i < hs_granada.length; i++)
        {       
            const me = Entity.GetLocalPlayer();
            const origin = Entity.GetEyePosition(me); 
            const destination = Entity.GetRenderOrigin(hs_granada[i]);
            const distance = distance_in_ft(origin, destination);
    
            world = Entity.GetRenderOrigin(hs_granada[i]);
            screen_bot = Render.WorldToScreen(world);
            world_top = world;
            world_top[2] = world_top[2];
            screen_top = Render.WorldToScreen( world_top );
    
            y= screen_bot[1], x = screen_bot[0];
            w = 105;
            
            var icono = Render.AddFont("undefeated", 14, 800)
    
    
            if (Entity.GetProp(hs_granada[i], "CBaseCSGrenadeProjectile", "m_nExplodeEffectTickBegin"))
            {
                continue;
            }
    
            Render.FilledRect(x, y - 1, w, h, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h-2, [16,16,16, 185]);
            Render.FilledRect(x - 1, y, w, h+1, [16,16,16, 185]);
            Render.GradientRect(x - 1, y -1, w, 3, 0, [167,16,77,100], [167,16,77,0])
    
            var icono = Render.AddFont("Font_Icon", 28, 100)
            Render.StringCustom(x + 10,y - 5, 1 , "e" , [167,16,77,255], icono)
            var icono = Render.AddFont("Font_Icon", 31, 100)
            Render.StringCustom(x + 12,y - 5, 1 , "e" , [167,16,77,155], icono)
    
    
            var font = Render.AddFont("MuseoSansCyrl-700", 8, 800)
            Render.StringCustom(x + 23, y + 4, 0, "Granade |", [255,255,255,255], font)
            Render.StringCustom(x + 76, y + 4, 0, distance+"m", [255,255,255,255], font)
    
        }
    }

    

}
function lastShot_Instant(){
    if(Entity.GetLocalPlayer() == Entity.GetEntityFromUserID(Event.GetInt("userid")) && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
       
        last_Instant = Globals.Tickcount()
        shot_Instant = true
    }
}
function cm_Instant(){
    if(!UI.GetValue("Script Items", "[DT] Intant Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))){
        Exploit.EnableRecharge()
        return
    }
    Exploit.DisableRecharge()
    if(!UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))
    wasActive_Instant = false
    if(!wasActive_Instant && UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap")){
        Exploit.Recharge()
        wasActive_Instant = true
    }
    if(UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck")){
        wasfding_Instant = true
        lastfding_Instant = Globals.Tickcount()
    }
    if(!UI.IsHotkeyActive("Anti-Aim","Extra","Fake duck") && wasfding_Instant && Globals.Tickcount() - 2.3 > lastfding_Instant){
        Exploit.Recharge()
        wasfding_Instant = false
    }
   
    if(last_Instant + 4 < Globals.Tickcount() && shot_Instant){
        Exploit.Recharge()
        shot_Instant = false
    }
}
function roundStart_Instant(){
    if(!UI.GetValue("Script Items", "[DT] Intant Recharge") || (UI.IsHotkeyActive("Rage","GENERAL","Exploits","Hide shots") && !UI.IsHotkeyActive("Rage","GENERAL","Exploits","Doubletap"))) return
    if(Exploit.GetCharge() != 0){
        Exploit.Recharge()
        last_Instant = Globals.Tickcount()
    }
}
function tracers_draw() {
    if(!visibilidad)
    return;

    if(!UI.GetValue(scriptitems,"Tracers Shot"))
    return;

    const selected_color = get([255,255,255,255], true);
    const inc = 0.25 * frametime() * selected_color[3];


    for (var tick in data)
    {

        tick = parseInt(tick);


        const draw_info = data[tick];


        const wts = to_screen(draw_info.pos);

        draw_info.alpha = max(draw_info.alpha - inc, 0);

        if (draw_info.alpha === 0)
            continue;







        x1 = wts[0] , y1 = wts[1], size = 3;
        Render.Line( x1,  y1, x1  - size,  y1 - size,[255,255,255,draw_info.alpha]);
        Render.Line( x1,  y1, x1  + size,  y1 + size,[255,255,255,draw_info.alpha]);
        Render.Line( x1,  y1, x1  - size,  y1 + size,[255,255,255,draw_info.alpha]);
        Render.Line( x1,  y1,x1  + size,  y1 - size,[255,255,255,draw_info.alpha]);


        wts_impact = Render.WorldToScreen([x2, y2, z2]);
        wts_eye_angles =  Render.WorldToScreen([eye_angles[0], eye_angles[1], eye_angles[2]]);

        Render.Line(wts_eye_angles[0], wts_eye_angles[1], wts[0],wts[1],[255,255,255,draw_info.alpha]);
        
   
    }
}
function onDraw() {
    
    if(!UI.GetValue(scriptitems,"Log Events"))
    return;

    if (!World.GetServerString()) return;
    if (shots_fired > hits && (Globals.Curtime() - lastUpdate > 0.33)) {
      if (Globals.Curtime() - lastUpdate > 1) {
        shots_fired = 0;
        hits = 0;
      }
      if (!logged) {
        var simtime = Globals.Tickcount() % 16;
        logged = true;
        var issafe = "true";
        var reason = "";
        if (safety == 0) {
          issafe = "false";
        }
		if (Entity.IsAlive(target) == false)
        {}
		else if (Entity.IsAlive(Entity.GetLocalPlayer()) == false)
		{ reason = "Aimbot Invalid"; }
        else if (safety == true && predicthc < 76)
            reason = "Spread";
        else if (safety == true && predicthc > 76)
            reason = "Prediction error";
        var flags = "";
        if (exploit == 2)


        flags += "T";

        flags += "B";


        if(reason != "")
       {
        

        Cheat.PrintColor([167,16,77,100], "[FakeCheat] ");
        Cheat.Print("Missed to ["+Entity.GetName(target)+"] in the "+hitboxName+" ["+ reason +"]\n");
        Cheat.PrintChat("[\x07FakeCheat\x08] Missed to [\x03"+Entity.GetName(target)+"\x08] in the "+hitboxName+" ["+ reason +"]\n");

 
       }


        if (shots == 99)
          shots = 0;
        else
          shots++;
      }
    }

}
function hitlog() {
    if(!UI.GetValue(scriptitems,"Log Events"))
    return;
    
    var hit = Entity.GetEntityFromUserID(Event.GetInt("userid"));
    var attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
    if (attacker == Entity.GetLocalPlayer() && hit == target) hits++;
    var hittype = "Hit ";
    me = Entity.GetLocalPlayer();
    hitbox = Event.GetInt('hitgroup');
    target_damage = Event.GetInt("dmg_health");
    target_health = Event.GetInt("health");
    victim = Event.GetInt('userid');
    attacker = Event.GetInt('attacker');
    weapon = Event.GetString('weapon');
    victimIndex = Entity.GetEntityFromUserID(victim);
    attackerIndex = Entity.GetEntityFromUserID(attacker);
    name = Entity.GetName(victimIndex);

    var flags = "";
   if (exploit == 2)
      flags += "T";

    flags += "B";

    if (hitbox == 1)
      flags += "H";


    if (weapon == "hegrenade")
      hittype = "Naded ";
    else if (weapon == "inferno")
      hittype = "Burned ";

    if (me == attackerIndex && me != victimIndex) {
		Cheat.PrintColor([167,16,77,100], "[FakeCheat] ");
    if (hittype == "Hit ") {

    Cheat.PrintChat(" \x08[\x07FakeCheat\x08] Hit to [\x03"+name+"\x08] in the "+ HitgroupName(hitbox)+ " ["+target_damage.toString()+"->"+Event.GetInt("health")+" HP]" + "\n");   
     Cheat.Print("Hit to ["+name+"] in the "+ HitgroupName(hitbox)+ " ["+target_damage.toString()+"->"+Event.GetInt("health")+" HP]" + "\n");  


    }
    else {
    }

		logsct.push(Globals.Curtime());

	}

  if (shots == 99)
    shots = 0;
  else
    shots++;

}
function Clantag_d(){
    if(!visibilidad)
    return;

    if(!UI.GetValue(scriptitems,"Clantag"))
    return;
    
    currentTick = parseInt(Globals.Curtime() * 1000);
    if (currentTick - (10000 / speed) >= lastTick){
        switch ((ctag) % 42){
            case 0:{
                Local.SetClanTag("F                   ");
                break;
            }
            case 1:{
                Local.SetClanTag("Fa                   ");
                break;
            }
            case 2:{
                Local.SetClanTag("Fake                   ");
                break;
            }
            case 3:{
                Local.SetClanTag("Fake                   ");
                break;
            }
            case 4:{
                Local.SetClanTag("FakeC                   ");
                break;
            }
            case 5:{
                Local.SetClanTag("FakeCh                   ");
                break;
            }
            case 6:{
                Local.SetClanTag("FakeChe                   ");
                break;
            }
            case 7:{
                Local.SetClanTag("FakeChea                   ");
                break;
            }
            case 8:{
                Local.SetClanTag("FakeCheat                   ");
                break;
            }
            case 9:{
                Local.SetClanTag("akeCheat                   ");
                break;
            }
            case 10:{
                Local.SetClanTag("keCheat                   ");
                break;
            }
            case 11:{
                Local.SetClanTag("eCheat                   ");
                break;
            }
            case 12:{
                Local.SetClanTag("Cheat                   ");
                break;
            }
            case 13:{
                Local.SetClanTag("eCheat                   ");
                break;
            }
            case 14:{
                Local.SetClanTag("keCheat                   ");
                break;
            }
            case 15:{
                Local.SetClanTag("akeCheat                   ");
                break;
            }
            case 16:{
                Local.SetClanTag("FakeCheat                   ");
                break;
            }
            case 17:{
                Local.SetClanTag("Fakeheat                   ");
                break;
            }
            case 18:{
                Local.SetClanTag("Fakeeat                   ");
                break;
            }
            case 19:{
                Local.SetClanTag("Fakeat                   ");
                break;
            }
            case 20:{
                Local.SetClanTag("Faket                   ");
                break;
            }
            case 21:{
                Local.SetClanTag("Fake                   ");
                break;
            }
            case 22:{
                Local.SetClanTag("FakeC                   ");
                break;
            }
            case 23:{
                Local.SetClanTag("FakeCh                   ");
                break;
            }
            case 24:{
                Local.SetClanTag("FakeChe                   ");
                break;
            }
            case 25:{
                Local.SetClanTag("FakeChea                   ");
                break;
            }
            case 26:{
                Local.SetClanTag("FakeCheat                   ");
                break;
            }
            case 27:{
                Local.SetClanTag("FakeCheat                   ");
                break;
            }
            case 28:{
                Local.SetClanTag("akeCheat                   ");
                break;
            }
            case 29:{
                Local.SetClanTag("keCheat                   ");
                break;
            }
            case 30:{
                Local.SetClanTag("eCheat                   ");
                break;
            }
            case 31:{
                Local.SetClanTag("Cheat                   ");
                break;
            }
            case 32:{
                Local.SetClanTag("heat                   ");
                break;
            }
            case 33:{
                Local.SetClanTag("eat                   ");
                break;
            }
            case 34:{
                Local.SetClanTag("at                   ");
                break;
            }
            case 35:{
                Local.SetClanTag("t                   ");
                break;
            }
            case 36:{
                Local.SetClanTag("                   ");
                break;
            }
            case 37:{
                Local.SetClanTag("                   ");
                break;
            }
            case 38:{
                Local.SetClanTag("                   ");
                break;
            }
            case 39:{
                Local.SetClanTag("                   ");
                break;
            }
            case 40:{
                Local.SetClanTag("                   ");
                break;
            }
            case 41:{
                Local.SetClanTag("                   ");
                break;
            }
            
        }
        if (ctag == 41){
            ctag = 0;
        }else{
            ctag = ctag+1;
        }
        lastTick = currentTick;
    }
}
function cMoveSlowe() {
    if(!visibilidad)
    return;

    if(!UI.IsHotkeyActive(scriptitems,"Slow-walk Key"))
    return;

    speed = UI.GetValue(scriptitems,"Slow-walk Speed:");
    if(conteo >= 5){
        restar = speed * 2;
        conteo = 0;
    }else{
        restar = 0;
        conteo++;
    }

    fSpeed = speed;
    bSpeed = speed;
    sSpeed = speed;
    dir = [0, 0, 0];
    if (Input.IsKeyPressed(0x57)) {
        dir[0] += fSpeed;
        dir[0] -= restar;
    }
    if (Input.IsKeyPressed(0x44)) {
        dir[1] += sSpeed;
        dir[1] -= restar;
    }
    if (Input.IsKeyPressed(0x41)) {
        dir[1] -= sSpeed;
        dir[1] += restar;
    }
    if (Input.IsKeyPressed(0x53)) {
        dir[0] -= bSpeed;
        dir[0] += restar;
    }
    UserCMD.SetMovement(dir);
}
function BreakLeg()
{
    if(!visibilidad)
    return;

    if(!UI.GetValue(scriptitems,"BreakLeg"))
    return;

    clock = clock + 0.5
    if (clock > 2)
    {
        if (UI.GetValue("Misc", "GENERAL", "Movement", "Slide walk"))
        {
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 0);
            clock = 0
        }
        else
        {
            UI.SetValue("Misc", "GENERAL", "Movement", "Slide walk", 1);
            clock = 0
        }
    }
}
function trailp() {
    if(!visibilidad)
    return;

    tipoTrail = UI.GetValue(scriptitems,"Custom Trail")    
    if(tipoTrail > 0){
        var localPlayer = Entity.GetLocalPlayer();
        if (Entity.IsValid(localPlayer)){
            var position = Entity.GetHitboxPosition(localPlayer, 6);
            if(Array.isArray(position)){
                trails.push({remove:Global.Tickcount() + 45, location:position});
    
                trails.forEach(function(x, y){
                    var location = trails[y]["location"];
    
    
                    var position = Render.WorldToScreen([location[0], location[1], location[2]-50.0]);
    
                    switch(tipoTrail)
                   {
                       case 1: {

                        Render.FilledRect( position[0], position[1], 5,5, [255,255,255,255] );
    
                       }break;
                       case 2: {

                        Render.FilledCircle( position[0], position[1], 5, [255,255,255,255]  );

                       }break;
    
                   }
                   
    
                    var time = Global.Tickcount();
                    if (trails[y]["remove"] <= time){
                        trails.splice(y, 1);
                    }
                })
            }
        }

    }
    
}















/// Registros
Global.RegisterCallback("Draw", "trailp");
Cheat.RegisterCallback("CreateMove", "BreakLeg")
Cheat.RegisterCallback("CreateMove", "cMoveSlowe");
Cheat.RegisterCallback("Draw", "Clantag_d");
Cheat.RegisterCallback("ragebot_fire", "ragebot_fire");
Cheat.RegisterCallback("player_hurt", "hitlog");
Cheat.RegisterCallback("Draw", "onDraw");
Cheat.RegisterCallback("bullet_impact", "on_bullet_impact");
Cheat.RegisterCallback("player_hurt", "on_player_hurt");
Cheat.RegisterCallback("round_prestart", "reset_data");
Cheat.RegisterCallback("player_connect_full", "reset_data");
Cheat.RegisterCallback("Draw", "tracers_draw");
Cheat.RegisterCallback("bullet_impact", "bullet_impact");
Cheat.RegisterCallback("weapon_fire","lastShot_Instant")
Cheat.RegisterCallback("CreateMove","cm_Instant")
Cheat.RegisterCallback("round_start","roundStart_Instant")
Cheat.RegisterCallback("round_prestart","roundStart_Instant")
Cheat.RegisterCallback("round_end","roundStart_Instant")
Cheat.RegisterCallback("Draw", "granadas_Draw");
Cheat.RegisterCallback("Draw", "animacion");
Cheat.RegisterCallback("player_death", "killsrecord");
Cheat.RegisterCallback("player_death", "deathsrecord");
Cheat.RegisterCallback("weapon_fire", "EVENT_WEAPON_FIRE");
Cheat.RegisterCallback("Draw", "Indicador")
Cheat.RegisterCallback("CreateMove", "legit_aa");
Cheat.RegisterCallback("Draw", "Spectator")
Cheat.RegisterCallback("Draw", "keybinds");
Cheat.RegisterCallback("Draw", "indicator_bomb");
Cheat.RegisterCallback("Draw", "KeyStroke")
Cheat.RegisterCallback("Draw", "Menu_Fake");
Cheat.RegisterCallback("Draw", "wm_Fake");
Cheat.RegisterCallback("Draw", "loadFkJS");




