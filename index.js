var lvl = 0;
var button_flash = [];
var num_clicked_button = 0;
function Generate_game()
{
    lvl ++;
    num_clicked_button = 0;
    button_flash = [];
    console.log(num_clicked_button);
    for(var t = 1;t <= lvl;t ++)
{
    var btn_tmp = Math.ceil(Math.random()*4);
    button_flash.push(btn_tmp);
}
console.log(button_flash);
num_btn_flsh = button_flash.length;
var i = 0;
function myLoop()
{
    setTimeout(function ()
    {
        Flash_BTN('.BTN' + String(button_flash[i]));
        i++;
        if(i < num_btn_flsh)
        {
            myLoop();
        }
        
    },1000);
}
myLoop();
}

Generate_game();



$('.BTN1').on('click', function ()
{ 
    console.log(num_clicked_button);
        if (button_flash[num_clicked_button] != 1)
        {
            Notify_Gameover();
            
        }
        else{
            num_clicked_button = num_clicked_button + 1;
            if (num_clicked_button == lvl)
            { 
                Notify_Gamewon();
               
            } 
        }
})
$('.BTN2').on('click', function ()
{
    console.log(num_clicked_button);
        if (button_flash[num_clicked_button] != 2)
        {
            Notify_Gameover();
            
        }
        else{
            num_clicked_button = num_clicked_button + 1;
            if (num_clicked_button == lvl)
            {
                Notify_Gamewon();
                
            } 
        }
})
$('.BTN3').on('click', function ()
{
    console.log(num_clicked_button);

        if (button_flash[num_clicked_button] != 3)
        {
            Notify_Gameover();
            
        }
        else{
            num_clicked_button = num_clicked_button + 1;
            if (num_clicked_button == lvl)
            {
                Notify_Gamewon();
                
            } 
        }
})
$('.BTN4').on('click', function ()
{
    console.log(num_clicked_button);

        if (button_flash[num_clicked_button] != 4)
     {
            Notify_Gameover();
           
        }
        else{
            num_clicked_button = num_clicked_button + 1;
            if (num_clicked_button == lvl)
            {
                Notify_Gamewon();
                
            } 
        }

        
})
var want = true

function Flash_BTN(btn)
{
    $(btn).addClass('flash');
    setTimeout(function()
    {
        $(btn).removeClass('flash');
    },1000);

}
function Notify_Gameover()
{
    game_end = true;
    $('#notifier').html('<h1>Game over!</h1>');
}
function Notify_Gamewon()
{
    $('#notifier').html('<h1>Congratulations!</h1>');
    $('#notifier').after('<div style = \'background-color:rgb(152, 82, 217);\'><button class =\'game_continuer btn btn-outline-dark btn-lg\' style = >Continue</button></div>');
    $('.game_continuer').on('click', function (){
    $('.game_continuer').remove();
    $('#notifier').html('<h1>Welcome to the simon game!</h1>');
    Generate_game();
})

}
