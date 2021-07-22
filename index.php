<?php
    $path = "./";
	$page = "Honor Flights of Rochester :: Veteran List";
	include $path."assets/inc/header.php";
?>

<style>

</style>

<div class='midbar'>
    <div class=tab>
        <button class="tablinks" onclick="openDrinkEvent(event, 'event'); getEvents(); reset(1);">Events</button>
        <button class="tablinks" onclick="openDrinkEvent(event, 'drink'); getDrinks(); reset(2);">Drinks</button>
    </div>
</div>
<div class='contents'></div>
    <div class='tablinks'>
        <div id='drink' class="tabcontent active">
        </div>
        <div id='event' class='tabcontent'>
        </div>
    </div>
</div>



<?php
    $path = "./";
	$page = "Honor Flights of Rochester :: Veteran List";
	include $path."assets/inc/footer.php";
?>