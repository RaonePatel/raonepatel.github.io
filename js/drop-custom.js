$(document).ready(function(){
	var IntroDrop, ExperienceDrop, ProjectsDrop, CertificationsDrop, HonorsDrop, NewsDrop, HomeDrop;
	IntroDrop = new Drop({
	    target: document.querySelector('.Intro-ico'),
	    content: 'Intro',
	    position: 'top center',
	    openOn: 'hover'
	  });
	ExperienceDrop = new Drop({
	    target: document.querySelector('.Experience-ico'),
	    content: 'Experience',
	    position: 'top center',
	    openOn: 'hover'
	  });
	ProjectsDrop = new Drop({
	    target: document.querySelector('.Projects-ico'),
	    content: 'Projects',
	    position: 'top center',
	    openOn: 'hover'
	  });
	CertificationsDrop = new Drop({
	    target: document.querySelector('.Certifications-ico'),
	    content: 'Certifications',
	    position: 'top center',
	    openOn: 'hover'
	  });
	HonorsDrop = new Drop({
		    target: document.querySelector('.Honors-ico'),
		    content: 'Honors',
		    position: 'top center',
		    openOn: 'hover'
		  });
	NewsDrop = new Drop({
	    target: document.querySelector('.News-ico'),
	    content: 'News',
	    position: 'top center',
	    openOn: 'hover'
	  });
	HomeDrop = new Drop({
		target: document.querySelector('.dummyActionButton'),
		content: 'Home',
		position: 'top center',
		openOn: 'hover'
	});
});
