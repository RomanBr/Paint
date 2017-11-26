Pixastic['Color_threshold'] = function  (F, T) {
		for (var i = 0; i < data2.length; i++) {
			
			if ((i + 1) % 4 == 0) continue;		
			data2[i] = (F(data3[i] >= T) ? 255 : 0);
		}
		return data2;
	}


Pixastic['LowPFilter'] = function  (F, T) {
		for (var i = 0; i < data2.length; i++) {
			if ((i + 1) % 4 == 0) continue;		
            if (F(data3[i]) >= T) data2[i] = 255;
		}
		return data2;
	}

Pixastic['HighPFilter'] = function (F, T) {
		for (var i = 0; i < data2.length; i++) {
			if ((i + 1) % 4 == 0) continue;		
            if (F(data3[i]) <= T) data2[i] = 0;
		}
		return data2;
	}

Pixastic['Color_threshold1'] = function () {
		var c;
		for (var i = 0; i < data2.length; i+=4) {
			var c = (data3[i+0] + data3[i+1] + data3[i+2]) / 3;
			for (j = 0; j < 3; j++) {
				data2[i + j] = ((data3[i + j] >= c) ? 255 : 0);
			}
		}
		return data2;
	}

Pixastic['LowPFilter1'] = function () {
		var c;
		for (var i = 0; i < data2.length; i+=4) {
			var c = (data3[i+0] + data3[i+1] + data3[i+2]) / 3;
			for (j = 0; j < 3; j++) {
				if (data3[i + j] >= c) data2[i + j] = 255;
			}
		}
		return data2;
	}

Pixastic['HighPFilter1'] = function () {
		var c;
		for (var i = 0; i < data2.length; i+=4) {
			var c = (data3[i+0] + data3[i+1] + data3[i+2]) / 3;
			for (j = 0; j < 3; j++) {
				if (data3[i + j] <= c) data2[i + j] = 0;
			}
		}
		return data2;
	}


Pixastic['Color_threshold2'] = function () {
		var c = mathFun.avgCol(data3);
		var r = c.r, g = c.g, b = c.b;
		for (var i = 0; i < data2.length; i+=4) {
			data2[i + 0] = ((data3[i + 0] >= r) ? 255 : 0);
			data2[i + 1] = ((data3[i + 1] >= g) ? 255 : 0);
			data2[i + 2] = ((data3[i + 2] >= b) ? 255 : 0);
		}
		return data2;
	}

Pixastic['Color_threshold3'] = function () {
		var c = mathFun.avgCol(data3).c;
		for (var i = 0; i < data2.length; i+=4) {
			data2[i + 0] = ((data3[i + 0] >= c) ? 255 : 0);
			data2[i + 1] = ((data3[i + 1] >= c) ? 255 : 0);
			data2[i + 2] = ((data3[i + 2] >= c) ? 255 : 0);
		}
		return data2;
	}

Pixastic['LowPFilter2'] = function  () {
		var c = mathFun.avgCol(data3);
		var r = c.r, g = c.g, b = c.b;
		for (var i = 0; i < data2.length; i+=4) {
			if (data3[i + 0] >= r) data2[i + 0] = 255;
			if (data3[i + 1] >= g) data2[i + 1] = 255;
			if (data3[i + 2] >= b) data2[i + 2] = 255;
		}
		return data2;
	}

Pixastic['LowPFilter3'] = function  () {
		var c = mathFun.avgCol(data3).c;
		for (var i = 0; i < data2.length; i+=4) {
			if (data3[i + 0] >= c) data2[i + 0] = 255;
			if (data3[i + 1] >= c) data2[i + 1] = 255;
			if (data3[i + 2] >= c) data2[i + 2] = 255;
		}
		return data2;
	}

Pixastic['HighPFilter2'] = function  () {
		var c = mathFun.avgCol(data3);
		var r = c.r, g = c.g, b = c.b;
		for (var i = 0; i < data2.length; i+=4) {
			if (data3[i + 0] <= r) data2[i + 0] = 0;
			if (data3[i + 1] <= g) data2[i + 1] = 0;
			if (data3[i + 2] <= b) data2[i + 2] = 0;
		}
		return data2;
	}

Pixastic['HighPFilter3'] = function  () {
		var c = mathFun.avgCol(data3).c;
		for (var i = 0; i < data2.length; i+=4) {
			if (data3[i + 0] <= c) data2[i + 0] = 0;
			if (data3[i + 1] <= c) data2[i + 1] = 0;
			if (data3[i + 2] <= c) data2[i + 2] = 0;
		}
		return data2;
	}

Pixastic['imgFunc'] = function (F) {
		F = mathFun[F];
		for (var i = 0; i < data2.length; i++) {
			if ((i + 1) % 4 == 0) continue;		
			data2[i] = F(data3[i]);
		}
		return data2;
	}
