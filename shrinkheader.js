/**
* This JavaScript function shrinks the header (including the avatar logo and the my-name h1) to a smaller size when the page is scrolled.
* To make that look right, the top and bottom padding of the header are reduced, the margins of the h1 (my-name) are reduced,
* and the tagline gradually is made to shrink and fade to invisibility. The tagline has a z-index value of 0 so that it doesn't take up space.
* This soluion for hiding the tagline was better than setting display to "none" because then it still took up space.
*/

function shrinkHeader() {
	var content = document.getElementById("page-content");
	var scrollStatus = content.scrollTop;
	var headerHeight = Math.max((121 - scrollStatus), 51);
	var headerPadding = Math.max(5,(10 - (0.1 * scrollStatus)));
	var nameSize = Math.max(1.5,(2.05 - (0.009 * scrollStatus)));
	var nameBottomMargin = Math.max(10 - (0.35 * scrollStatus),0);
	var nameTopMargin = Math.min(10,(0.45 * scrollStatus));
	var taglineSize = Math.max(0.7 - (0.008 * scrollStatus),0.15);
	var taglineOpacity = 1.0 - (0.02 * scrollStatus);
	document.getElementById("shrinking-header").style.height = headerHeight + "px";
	document.getElementById("shrinking-header").style.paddingTop = headerPadding + "px";
	document.getElementById("shrinking-header").style.paddingBottom = headerPadding + "px";
	document.getElementById("avatar").style.maxWidth = headerHeight + "px";
	document.getElementById("page-content").style.paddingTop = 115 + (2 * headerPadding) + "px";
	document.getElementById("my-name").style.fontSize = nameSize + "em";
	document.getElementById("my-name").style.marginBottom = nameBottomMargin + "px";
	document.getElementById("my-name").style.marginTop = nameTopMargin + "px";
	document.getElementById("tagline").style.fontSize = taglineSize + "em";
	document.getElementById("tagline").style.opacity = taglineOpacity;
}