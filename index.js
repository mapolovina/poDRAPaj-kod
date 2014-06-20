//user_name function -> get informations about user
function user_name() {
	new Messi('Geoinformatics engineer with experience in programming web, mobile and desktop applications. I work on some student projects with my colleagues, faculty projects with professors and teaching assistants, and private projects with Adapta Studio Association (I’m co-founder). As web developer I use node.js technology and Sails.js web framework. On desktop my first choice is Java language (Linux operating system), although I started with Python. Java is also technology that I use in mobile development (Android developer). As a geo-programmer I often work on spatial problems, satellite images processing and different analysis. I use a lot of softwares for spatial analysis, such as QGIS, GrassGIS, SAGA, Idrisi, etc. I’m a member of the team that deals with GPS and Galileo research, and also a member of the open source community.', 
		{
			title: 'Marko Polovina',
			center:true,
			closeButton:true,
			height:'auto',
			width:'300px'
		});
}

//form function -> get all codes
function form() {
	vex.defaultOptions.className = 'vex-theme-top';
	vex.dialog.confirm({message:"Find your codes: CD5453, CD8384, CD1561, CD2864, CD4098 and send to posao@drap.hr!"});
	return false;
}

//body function -> company image on mouse over mail text
function body(){
$("#job_mail").mouseover(function(){
	new Messi.img("http://website.informer.com/thumbnails/280x202/d/drap.hr.png",
		{
			title:'Drap.hr',
			center: true
		});
});
}