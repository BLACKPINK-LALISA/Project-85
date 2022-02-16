//Create a reference for canvas 
var canvas = document.getElementById("myCanvas");
var d = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;

function add() {
	//upload car, and background images on the canvas.
		background_imgTag = new Image();
		background_imgTag.onload = uploadBackground;
		background_imgTag.src = background_image;
		
		greencar_imgTag = new Image();
		greencar_imgTag.onload = uploadgreencar;
		greencar_imgTag.src = greencar_image;
		}

function uploadBackground() {
	//Define function ‘uploadBackground’
	function upload_background() {
		d.drawImage(background_imgTag , 0 , 0 , canvas.width , canvas.height);
		}
	}
function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	function upload_greencar() {
		d.drawImage(greencar_imgTag , greencar_x , greencar_y , greencar_width , greencar_height);
		}
		
		window.addEventListener("keydown" , key_down);


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up() {
if(greencar_y >= 0)
        {
            greencar_y = v_y - 10;
            console.log("When up arrow pressed, x = " + greencar_x +" y = " + greencar_y);
            upload_background();
            upload_greencar();
        }
}
        function down() {
            if(greencar_y <= 500)
            {
                greencar_y = greencar_y + 10;
                console.log("When down arrow pressed, x = " + greencar_x +" y = " + greencar_y);
                upload_background();
                upload_greencar();
            }
        }

            function left() {
                if(greencar_x >= 0)
                {
                    greencar_x = greencar_x - 10;
                    console.log("When left arrow pressed, x = " + greencar_x +" y = " + greencar_y);
                    upload_background();
                    upload_v();
                }
            }

                function right() {
                    if(greencar_x <= 700)
                    {
                        greencar_x = greencar_x + 10;
                        console.log("When right arrow pressed, x = " + greencar_x +" y = " + greencar_y);
                        upload_background();
                        upload_greencar();
					}