<?php
// Identifica erros

  //ini_set('display_errors', 'on');
  //error_reporting(E_ALL);

  $nome = array('jumbotron', 'menu', 'servicos', 'portfolio', 'frases', 'equipe', 'contato', 'footer');

  // Monta o arquivo styles.css

  $clear = fopen('styles.css', 'w+');
  fwrite($clear, "");
  fclose($clear);

  $global_css = file_get_contents('assets/global/global.css', 'a+');
  $add_global_css = fopen('styles.css', 'a+');
  fwrite($add_global_css, $global_css);
  fclose($add_global_css);

  for ($i=0; $i < count($nome); $i++) {

    $style = file_get_contents('modules/'.$nome[$i].'/style.css');

    $styles = fopen('styles.css', 'a+');
    fwrite($styles, "");
    fwrite($styles, $style);
    fclose($styles);
  }


  // Monta o arquivo scripts.css

  $clear = fopen('scripts.js', 'w+');
  fwrite($clear, "");
  fclose($clear);

  for ($i=0; $i < count($nome); $i++) {

    $script = file_get_contents('modules/'.$nome[$i].'/script.js');

    $scripts = fopen('scripts.js', 'a+');
    fwrite($scripts, "");
    fwrite($scripts, $script);
    fclose($scripts);
  }

?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Epicentro Tecnologia</title>
  <link rel="icon" type="image/png" href="assets/img/Favicon/favicon.png" />
  <link rel="stylesheet" href="styles.css" charset="utf-8">
  <script src="scripts.js"></script>
</head>
<body>
  <?php include 'modules/jumbotron/index.php' ?>
  <main>
    <?php include 'modules/servicos/index.html' ?>
    <?php include 'modules/portfolio/index.html' ?>
    <?php include 'modules/frases/index.html' ?>
    <?php include 'modules/equipe/index.html' ?>
    <?php include 'modules/contato/index.php' ?>
    <?php include 'modules/footer/index.html' ?>
  </main>
</body>
<script src="assets/js/jquery-1.11.3.min.js"></script>
<script src="assets/js/scroll.js"></script>
<script src="assets/js/unslider.min.js"></script>
<script src="scripts.js"></script>
</html>
