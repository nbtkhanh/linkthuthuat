﻿function adtechltt(width,height) {
var nowt = new Date();
var thang = nowt.getMonth();
var nam = nowt.getFullYear();
var thangName = new Array ("01","02","03","04","05","06","07","08","09","10","11","12");
document.write("<iframe id='ads_linkthuthuat' name='ads_linkthuthuat' width='" + width + "' height='"+ height +"' frameborder='0' src='https://adtech.ltt.doubleclick.linkthuthuat.com/" + nam + "/"+ thangName[thang] +"/" + idpub + ".html?w="+ width +"&h=" + height + "' marginwidth='0' marginheight='0' vspace='0' hspace='0' allowtransparency='true' scrolling='no' allowfullscreen='true'></iframe>")
}
