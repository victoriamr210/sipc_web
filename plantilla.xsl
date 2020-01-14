<?xml version='1.0' ?> 
<xsl:stylesheet version="1.1" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  <xsl:template match="/"> 
  <!-- main del documento el match -->
  <HTML> 
    <head>
      <title>Librería EVE</title>
  <link rel = "icon" type = "image/png" href = "Imagenes/bokk1.png"/>


      <link rel="stylesheet" type="text/css" href="css/mv.css"/>
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="css/business-frontpage.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </head>

      <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <!-- <a class="navbar-brand" href="#">Start Bootstrap</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="libros.html">Libros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Más vendidos
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="info.html">¿Quienes somos?</a>
                </li>
                <div class="search-container">
                  <input type="text" placeholder="Buscar..." name="titulo"/>
                  <button type="submit"><i class="fa fa-search"></i></button>
                </div>
                <li class="nav-item">
                  <a class="nav-link" onclick="checkif()" href="#">Mi Perfil</a>
                </li>
               <li class="nav-item">
                <a class="nav-link" onclick="checkif()" href="#">Log In</a>
              </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-10 col-xs-12">
              <h1>Más vendidos del mes</h1>
            </div>
          </div>
          <!-- <div class="row"> -->
            <div class="col-lg-12 col-md-4 col-xs-3">
              <table>
              <!-- <div class="row"> -->
              <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Precio</th>
                <th>Unidades vendidas</th>
                <th>Género/Subgénero</th>
              </tr>
              <!-- </div> -->
              <xsl:for-each select="GLOBAL/GENERO">
                <xsl:variable name="g" select="NOMBRE"/>
                <xsl:for-each select="SUBG">
                  <xsl:variable name="sg" select="SG"/>
                  <xsl:for-each select="LIBRO">
                    <xsl:sort data-type="number" order="descending" select="UN_V"/>
                    <tr>
                      <xsl:if test="UN_V &gt; 2000">
                        <td><xsl:value-of select="TITULO"/></td>
                        <td><xsl:value-of select="AUTOR"/></td>
                        <td><xsl:value-of select="PRECIO"/></td>
                        <td><xsl:value-of select="UN_V"/></td>
                        <td><xsl:value-of select="concat($g,' - ',$sg)"/></td>
                      </xsl:if>
                    </tr>
                  </xsl:for-each>
                </xsl:for-each>
              </xsl:for-each>
              </table>
            </div>
          <!-- </div> -->
          <br/>
          <div class="row">
            <div class="col-lg-12 col-md-10 col-xs-7">
              <h1>TOP por subgénero</h1>
            </div>
          </div>
            <div class="col-lg-12 col-md-10 col-xs-12">
          <table>
          <xsl:for-each select="GLOBAL/GENERO">
            <tr>
              <th> Posición </th>
              <th> <xsl:value-of select="NOMBRE"/> </th>
              <th> Unidades vendidas </th>
            </tr>
            <xsl:for-each select="SUBG">
              <tr>
                <td> <xsl:number value = "position()" format="1. "/></td>
                  <td><xsl:value-of select="SG"/></td>
                  <td>
                    <!-- <xsl:for-each select="LIBRO"> -->
                      <xsl:value-of select="sum(LIBRO/UN_V)"/>
                    <!-- </xsl:for-each> -->
                  </td> 
              </tr>
            </xsl:for-each>

          </xsl:for-each>
          </table>
          </div>
      
        </div>
        
        <!-- <script src="js/index.js"></script> -->
        <!-- Bootstrap core JavaScript -->
        <!-- <script src="vendor/jquery/jquery.min.js"></script> -->
        <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->

        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Copyright © Librería EVE 2019</p>
          </div>
          <!-- /.container -->
        </footer>
        <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase-firestore.js"></script>
  <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase-auth.js"></script>
  <!-- <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase-analytics.js"></script -->
  <!-- <script defer src="/__/firebase/7.1.0/firebase-analytics.js"></script> -->
  <script src="/__/firebase/7.6.2/firebase-analytics.js"></script>
  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDt-4nQ34xJ6DDy9KVXaoSj7S164dfHQmQ",
      authDomain: "sipc-web-ab169.firebaseapp.com",
      databaseURL: "https://sipc-web-ab169.firebaseio.com",
      projectId: "sipc-web-ab169",
      storageBucket: "sipc-web-ab169.appspot.com",
      messagingSenderId: "561462445785",
      appId: "1:561462445785:web:df7fb8fe481519395ea0c8",
      measurementId: "G-DE51LX7E49"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  </script>
  <!-- Bootstrap core JavaScript -->
  <script src="js/index.js"></script>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        
      </body> 
    </HTML> 
  </xsl:template> 
</xsl:stylesheet> 