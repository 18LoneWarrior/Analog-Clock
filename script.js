// setInterval(() => {
// 	date = new Date();
// 	hour = date.getHours();
// 	minute = date.getMinutes();
// 	sec = date.getSeconds();
// 	rotation_h = 30 * hour + minute / 2;
// 	rotation_m = 6 * minute;
// 	rotation_s = 6 * sec;

// 	hour.style.transform = `rotate(${rotation_h}deg)`;
// 	minute.style.transform = `rotate(${rotation_m}deg)`;
// 	second.style.transform = `rotate(${rotation_s}deg)`;
// }, 1000);

setInterval(() => {
	d = new Date();
	htime = d.getHours();
	mtime = d.getMinutes();
	stime = d.getSeconds();
	hrotation = 30 * htime + mtime / 2;
	mrotation = 6 * mtime;
	srotation = 6 * stime;

	hour.style.transform = `rotate(${hrotation}deg)`;
	minute.style.transform = `rotate(${mrotation}deg)`;
	second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
