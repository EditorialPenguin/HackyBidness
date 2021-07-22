<?php
    $path = "../";
	$page = "Honor Flights of Rochester :: Veteran List";
	include $path."assets/inc/header.php";
?>

<style>

</style>

<div class='midbar'>
    <div class=tab>
        <button class="tablinks" onclick="openDrinkEvent(event, 'event')">Events</button>
        <button class="tablinks" onclick="openDrinkEvent(event, 'drink')">Drinks</button>
    </div>
</div>
<div class='contents'></div>
    <div class='tablinks'>
        <div id='drink' class="tabcontent active">
            <div class=drinkpost>
                <div class='drinkinfo'>
                    <div class='parent'>
                        <img class='drink base' src="img/testdrink.jpg" alt="">
                        <img class='person ontop' src="img/face.jpg" alt="">
                    </div>
                    <p>Appletini</p>
                    <h6>By <span class='redtext'>Maria Chantel</spam></h6>
                    <p>Tried this last night. Pretty straightforward recipe. All I had to use was...</p>
                    <div class='interact'>
                        <div class=tab>
                            <button class="tablinks"><img class='white' src="../assets/img/like.png" alt=""></button>
                            <button class="tablinks"><img class='white' src="../assets/img/comments.png" alt=""></button>        
                            <button class="tablinks"><img class='white' src="../assets/img/share.png" alt=""></button>
                            <button class="tablinks"><img class='white' src="../assets/img/save.png" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='event' class='tabcontent'>
            <div class=eventpost>
            <div class='drinkinfo'>
                    <div class='parent'>
                        <img class='drink base' src="img/testdrink.jpg" alt="">
                        <img class='person ontop' src="img/face.jpg" alt="">
                    </div>
                    <p>Pregame At Katy's</p>
                    <h6>Organized by<span class='redtext'>Maria Chantel</spam></h6>
                    <p>Tried this last night. Pretty straightforward recipe. All I had to use was...</p>
                    <div class='interact'>
                        <div class=tab>
                            <button class="tablinks"><img class='white' src="../assets/img/like.png" alt=""></button>
                            <button class="tablinks"><img class='white' src="../assets/img/comments.png" alt=""></button>        
                            <button class="tablinks"><img class='white' src="../assets/img/share.png" alt=""></button>
                            <button class="tablinks"><img class='white' src="../assets/img/rsvp.png" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<?php
    $path = "../";
	$page = "Honor Flights of Rochester :: Veteran List";
	include $path."assets/inc/footer.php";
?>