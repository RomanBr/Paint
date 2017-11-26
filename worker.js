	importScripts('fun.js');                         
	importScripts('imgProcessing0.js');                         
	importScripts('imgProcessing1.js');                         
	importScripts('imgProcessing2.js');                         

	var data2, data3, d, w, h, f;
	onconnect = function(e) {
		let port = e.ports[0];
		port.start();
		//postMessage ([grayScale1(e.data[0])]);
		//let fn = eval(e.data[0]);
		//postMessage ([fn(e.data[1], e.data[2], e.data[3], e.data[4], e.data[5], e.data[6], e.data[7])]);
		/*data2 = e.data[1];
		data3 = e.data[2];
		d = e.data[4];
		w = e.data[5];
		h = e.data[6]; 
		f = e.data[7];
		this.postMessage ([Neighbours(Max)]);*/
		port.onmessage = function (e) {
		d = e.data[0];
		w = e.data[1];
		h = e.data[2]; 
		f = e.data[3];
		data2 = e.data[4];
		data3 = e.data[5];
		//this.postMessage (Neighbours(Max), "OK"]);
		//this.postMessage ([Pixastic[e.data[6]](Max)]);
		this.postMessage ([Pixastic[e.data[6]](e.data[7])]);
	  };
	}

/*Pixastic['Neighbours123'] = function (F) { //F = Max == Dilate, F = Min == Erode   
	var r = [], g = [], b = [];
	
	var buf = new ArrayBuffer(data2.length);
	var buf8 = new Uint8ClampedArray(buf);
	var data = new Uint32Array(buf);

	for (y = 1; y < h - 1; y++) {
		for (x = 1; x < w - 1; x++) {
			i = (x + y * w) * 4;

			for (y1 = y - 1; y1 <= y + 1; y1++) {
				if (y1 < 0) continue;
				for (x1 = x - 1; x1 <= x + 1; x1++) {
					if (x1 < 0) continue;
					i1 = (x1 + y1 * w) * 4;
					if ((Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					r.push(data3[i1 + 0]);
					g.push(data3[i1 + 1]);
					b.push(data3[i1 + 2]);
				}
			}

			data[y * w + x] =
            (255   << 24) |    // alpha
            (Byte1(F(b)) << 16) |    // blue
            (Byte1(F(g)) <<  8) |    // green
             Byte1(F(r));    			
			var r = [], g = [], b = [];

		}
	}
	return buf8;
}*/

Pixastic['Neighbours123'] = function (F) { //F = Max == Dilate, F = Min == Erode   
	var c = [];
	for (y = 1; y < h - 1; y++) {
		for (x = 1; x < w - 1; x++) {
			i = (x + y * w) * 4;

			for (y1 = y - 1; y1 <= y + 1; y1++) {
				if (y1 < 0) continue;
				for (x1 = x - 1; x1 <= x + 1; x1++) {
					if (x1 < 0) continue;
					i1 = (x1 + y1 * w) * 4;
					if ((Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					c.push(RGB(data3[i1 + 0], data3[i1 + 1], data3[i1 + 2]));
				}
			}

			var c1 = F(c);
			var r = RGB2(c1).r;
			var g = RGB2(c1).g;
			var b = RGB2(c1).b;
		
			data2[i + 0] = r; // red
			data2[i + 1] = g; // green
			data2[i + 2] = b; // blue*/
			
			var c = [];

		}
	}
	return data2;
}
