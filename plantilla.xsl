<?xml version='1.0' ?> 
<xsl:stylesheet version="1.1" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  <xsl:template match="/"> 
  <!-- main del documento el match -->
  <HTML> 
    <head>
      <link rel="stylesheet" type="text/css" href="st.css"/>
      <link rel="stylesheet" type="text/css" href="index.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </head>

      <body>
        <div class="header">
          <a>Libreria EVE</a>
        </div>
        <div class="navegador">
          <ul class="nav-bar">
            <li class="nav-item">
              <a href="inicio.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a>Libros</a>
            </li>
            <li class="nav-item">
              <a href="index.html">Mas vendidos</a>
            </li>
            <li class="nav-item">
              <a>Reserva</a>
            </li>
            <li class="nav-item">
              <a href="info.html">¿Quiénes somos?</a>
            </li>
            <div class="search-container">
              <input type="text" placeholder="Buscar..." name="titulo"/>
              <button type="submit"><i class="fa fa-search"></i></button>
            </div>
          </ul>
        </div>

        <h1>Más vendidos del mes</h1>
        <table>
        <tr>
          <th>Título</th>
          <th>Autor</th>
          <th>Precio</th>
          <th>Unidades vendidas</th>
        </tr>
        <xsl:for-each select="GLOBAL/GENERO/SUBG/LIBRO">
          <xsl:sort data-type="number" order="descending" select="UN_V"/>
          <tr>
            <xsl:if test="UN_V &gt; 2000">
              <td><xsl:value-of select="TITULO"/></td>
              <td><xsl:value-of select="AUTOR"/></td>
              <td><xsl:value-of select="PRECIO"/></td>
              <td><xsl:value-of select="UN_V"/></td>
            </xsl:if>
          </tr>
        </xsl:for-each>
        </table>
        <br/>
        <xsl:for-each select="GLOBAL/GENERO">
          <xsl:for-each select="SUBG">
            <ul>
              <li>
                <a>Género: </a>
                <xsl:value-of select="SG"/>
                <a> se han vendido: </a>
                <xsl:for-each select="LIBRO">
                <xsl:variable name="t" select="UN_V"/>
                  <xsl:value-of select="sum($t)"/>
                </xsl:for-each>
              </li>
            </ul>
          </xsl:for-each>
        </xsl:for-each>
      </body> 
    </HTML> 
  </xsl:template> 
</xsl:stylesheet> 