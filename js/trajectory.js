/*
 * 五点三次平滑
 * 作者：younggis
 */
/*
 * 第一次函数拟合平滑
 */
function firstlinearSmooth5(path) {
	var i;
	var N = path.length;
	if(N >= 5) {
		path[0][0] = (3.0 * path[0][0] + 2.0 * path[1][0] + path[2][0] - path[4][0]) / 5.0;
		path[1][0] = (4.0 * path[0][0] + 3.0 * path[1][0] + 2 * path[2][0] + path[3][0]) / 10.0;
		for(i = 2; i <= N - 3; i++) {
			path[i][0] = (path[i - 2][0] + path[i - 1][0] + path[i][0] + path[i + 1][0] + path[i + 2][0]) / 5.0;
		}
		path[N - 2][0] = (4.0 * path[N - 1][0] + 3.0 * path[N - 2][0] + 2 * path[N - 3][0] + path[N - 4][0]) / 10.0;
		path[N - 1][0] = (3.0 * path[N - 1][0] + 2.0 * path[N - 2][0] + path[N - 3][0] - path[N - 4][0]) / 5.0;

		path[0][1] = (3.0 * path[0][1] + 2.0 * path[1][1] + path[2][1] - path[4][1]) / 5.0;
		path[1][1] = (4.0 * path[0][1] + 3.0 * path[1][1] + 2 * path[2][1] + path[3][1]) / 10.0;
		for(i = 2; i <= N - 3; i++) {
			path[i][1] = (path[i - 2][1] + path[i - 1][1] + path[i][1] + path[i + 1][1] + path[i + 2][1]) / 5.0;
		}
		path[N - 2][1] = (4.0 * path[N - 1][1] + 3.0 * path[N - 2][1] + 2 * path[N - 3][1] + path[N - 4][1]) / 10.0;
		path[N - 1][1] = (3.0 * path[N - 1][1] + 2.0 * path[N - 2][1] + path[N - 3][1] - path[N - 4][1]) / 5.0;
	}
	return path;
}
/*
 * 第二次函数拟合平滑
 */
function secondlinearSmooth5(path) {
	var i;
	var N = path.length;
	if(N >= 5) {
		path[0][0] = (31.0 * path[0][0] + 9.0 * path[1][0] - 3.0 * path[2][0] - 5.0 * path[3][0] + 3.0 * path[4][0]) / 35.0;
		path[1][0] = (9.0 * path[0][0] + 13.0 * path[1][0] + 12 * path[2][0] + 6.0 * path[3][0] - 5.0 * path[4][0]) / 35.0;
		for(i = 2; i <= N - 3; i++) {
			path[i][0] = (-3.0 * ( path[i-2][0] + path[i+2][0]) +12.0 * ( path[i-1][0] + path[i+1][0]) + 17 * path[i][0]) / 35.0;
		}
		path[N - 2][0] = (9.0 * path[N-1][0] + 13.0 * path[N-2][0] + 12.0 * path[N-3][0] + 6.0 * path[N-4][0] - 5.0 * path[N-5][0]) / 35.0;
		path[N - 1][0] = (31.0 * path[N-1][0] + 9.0 * path[N-2][0] - 3.0 * path[N-3][0] - 5.0 * path[N-4][0] + 3.0 * path[N-5][0]) / 35.0;
		
		path[0][1] = (31.0 * path[0][1] + 9.0 * path[1][1] - 3.0 * path[2][1] - 5.0 * path[3][1] + 3.0 * path[4][1]) / 35.0;
		path[1][1] = (9.0 * path[0][1] + 13.0 * path[1][1] + 12 * path[2][1] + 6.0 * path[3][1] - 5.0 * path[4][1]) / 35.0;
		for(i = 2; i <= N - 3; i++) {
			path[i][1] = (-3.0 * ( path[i-2][1] + path[i+2][1]) +12.0 * ( path[i-1][1] + path[i+1][1]) + 17 * path[i][1]) / 35.0;
		}
		path[N - 2][1] = (9.0 * path[N-1][1] + 13.0 * path[N-2][1] + 12.0 * path[N-3][1] + 6.0 * path[N-4][1] - 5.0 * path[N-5][1]) / 35.0;
		path[N - 1][1] = (31.0 * path[N-1][1] + 9.0 * path[N-2][1] - 3.0 * path[N-3][1] - 5.0 * path[N-4][1] + 3.0 * path[N-5][1]) / 35.0;
	}
	return path;
}
/*
 * 第三次函数拟合平滑
 */
function thirdlinearSmooth5(path) {
	var i;
	var N = path.length;
	if(N >= 5) {
		path[0][0] = (69.0 * path[0][0] + 4.0 * path[1][0] - 6.0 * path[2][0] + 4.0 * path[3][0] - path[4][0]) / 70.0;
		path[0][0] = (2.0 * path[0][0] + 27.0 * path[1][0] + 12.0 * path[2][0] - 8.0 * path[3][0] + 2.0 * path[4][0]) / 35.0;
		for(i = 2; i <= N - 3; i++) {
			path[i][0] = (-3.0 * ( path[i-2][0] + path[i+2][0]) + 12.0 * ( path[i-1][0] + path[i+1][0]) + 17.0 * path[i][0]) / 35.0;
		}
		path[N-2][0] = (2.0 * path[N-5][0] - 8.0 * path[N-4][0] + 12.0 * path[N-3][0] + 27.0 * path[N-2][0] + 2.0 * path[N-1][0]) / 35.0;
		path[N-1][0] = (- path[N-5][0] + 4.0 * path[N-4][0] - 6.0 * path[N-3][0] + 4.0 * path[N-2][0] + 69.0 * path[N-1][0]) / 70.0;
		
		path[0][1] = (69.0 * path[0][1] + 4.0 * path[1][1] - 6.0 * path[2][1] + 4.0 * path[3][1] - path[4][1]) / 70.0;
		path[0][1] = (2.0 * path[0][1] + 27.0 * path[1][1] + 12.0 * path[2][1] - 8.0 * path[3][1] + 2.0 * path[4][1]) / 35.0;
		for(i = 2; i <= N - 3; i++) {
			path[i][1] = (-3.0 * ( path[i-2][1] + path[i+2][1]) + 12.0 * ( path[i-1][1] + path[i+1][1]) + 17.0 * path[i][1]) / 35.0;
		}
		path[N-2][1] = (2.0 * path[N-5][1] - 8.0 * path[N-4][1] + 12.0 * path[N-3][1] + 27.0 * path[N-2][1] + 2.0 * path[N-1][1]) / 35.0;
		path[N-1][1] = (- path[N-5][1] + 4.0 * path[N-4][1] - 6.0 * path[N-3][1] + 4.0 * path[N-2][1] + 69.0 * path[N-1][1]) / 70.0;
	}
	return path;
}