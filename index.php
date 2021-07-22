<?php
    $path = "./";
	$page = "Honor Flights of Rochester :: Veteran List";
	include $path."assets/inc/header.php";
?>

<?php
if (isset($_GET['loggedIn'])) {
  $_SESSION['loggedIn'] = True;
  $_SESSION['role'] = $_GET['role'];
  header("Location: assets/mission.php");
}
?>

<style>
  .navbar-menu, .navbar-burger {
    display: none;
  }
  label{
      color: white !important;
  }
</style>

<div class="columns is-mobile">
  <div class="column is-full-mobile is-full-tablet is-full-desktop is-one-half-widescreen is-one-half-fullhd">
    <section class="hero is-danger is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-6-tablet is-6-desktop is-6-widescreen">
              <form id="login_form" name="login_form" action="" method="POST" class="box has-background-black">
                <div class="field">
                  <label for="" class="label">Username</label>
                  <div class="control">
                    <input name="username" type="text" placeholder="e.g. John Doe" class="input" required>
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control">
                    <input name="password" type="password" placeholder="*******" class="input" required>
                  </div>
                  <span id="incorrect" style="display: none; color: red;"> Incorrect Username or Password</span>
                </div>
                <div class="field has-text-centered">
                  <button class="button is-light" href='/assets/home.php'>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</body>