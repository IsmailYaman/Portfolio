<html lang="en">
<!doctype html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet"
          href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
          integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/index.css">
    <title>Akropolis Naaldwijk | Home</title>
</head>
<body>
<?php require_once '../includes/navbar_user.php' ?>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="carousel-caption d-md-block">
    <h1 class="text-center my-3 welcome">Welkom bij Akropolis Naaldwijk</h1>
  </div>
      <img class="d-block w-100" src="../img/food3.png" alt="First slide">
    </div>
  </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-4">
                <div class="card text-center" style="width: 18rem;">
                    <img class="card-img-top" src="../img/food1.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Menu</h5>
                        <p class="card-text">Bekijk ons volledige menu en de wijnkaart. Voor de bezorging hebben we een op maat gemaakte menu kaart. Wij hebben maandelijks (naast het a la carte gedeelte) een aparte kaart met nieuwe gerechten.</p>
                        <a href="#" class="btn btn-primary">Bekijk het menu</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4">
                <div class="card text-center" style="width: 18rem;">
                    <img class="card-img-top" src="../img/feestzaal.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Feestzaal</h5>
                        <p class="card-text">Wij zijn de laatste jaren zeer sterk gegroeid in het organiseren van alle (bedrijf) feesten, recepties, borrels en trouwpartijen. Sinds 2014 zijn wij een officiële trouwlocatie.</p>
                        <a href="#" class="btn btn-primary">Meer informatie</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-lg-4">
                <div class="card text-center" style="width: 18rem;">
                    <img class="card-img-top" src="../img/over-ons.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Over ons</h5>
                        <p class="card-text">Het geheime recept voor de befaamde stifado van Grieks restaurant Plaka in Naaldwijk blijft onveranderd, maar de specialiteit wordt sinds kort in een nieuw onderkomen geserveerd.</p>
                        <a href="#" class="btn btn-primary">Meer informatie</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
</div>


<?php require_once '../includes/footer.php' ?>
<?php require_once '../includes/bootstrap_script.php' ?>
<script src="../js/main.js"></script>
</body>
</html>
