<?xml version='1.0' ?> 
<xsl:stylesheet version="1.1" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
  <xsl:template match="/"> 
  <!-- main del documento el match -->
   <HTML> 
    <BODY> 
     <B> Mas vendidos </B> 
     <BR/> 
     <BR/> 
     <TABLE> 
      <xsl:for-each select="GLOBAL/GENERO"> 
        <TH><xsl:value-of select="NOMBRE"/></TH>
        <TABLE>
        <xsl:for-each select="SUBG">
        <TH><xsl:value-of select="SG"/></TH>
          <xsl:for-each select="LIBRO">
            <T><xsl:value-of select="TITULO"/></T>  
          </xsl:for-each>
        </xsl:for-each>
        </TABLE>
      </xsl:for-each> 
     </TABLE> 
    </BODY> 
   </HTML> 
  </xsl:template> 

  <!-- <xsl:template match="GLOBAL">
    <TABLE>
      <xsl:for-each select="GLOBAL/GENERO">
        <TR>
          <TD>
            <xsl:value-of select="NOMBRE"/>
          </TD>
        </TR>   
      </xsl:for-each>
    </TABLE> -->
      <!-- <xsl:for-each select="SUBG"> -->
      <!-- <TR> -->
        <!-- <TH> -->
          <!-- <xsl:value-of select="APELLIDOS"/> -->
          <!-- <xsl:value-of select="NOMBRE"/></TD> -->
        <!-- <TH> -->
          <!-- <B> -->
            <!-- <xsl:value-of select="NOTA"/> -->
          <!-- </B> -->
        <!-- </TD> -->
        <!-- <BR></BR> -->
      <!-- <xsl:sort order="descending" select="APELLIDOS"> -->



      <!-- </TR>  -->
    <!-- </xsl:if> -->
  <!-- </xsl:template> -->
 </xsl:stylesheet> 