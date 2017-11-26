		function DerivativeEdgeDetector() {
			DATA();
			T = 0;
			var i0 = Math.abs(d) - 1;
			for (var x = 1; x < w; x++) {
				for (var y = 1; y < h; y++) {

					/*var i1 = (x + 1 + y * w) * 4; var cr = data3[i1 + i0];
					var i2 = (x - 1 + y * w) * 4; var cl = data3[i2 + i0];
					var i3 = (x + (y - 1) * w) * 4; var cu = data3[i3 + i0];
					var i4 = (x + (y + 1) * w) * 4; var cd = data3[i4 + i0];*/

					var i1 = (x + 1 + y * w) * 4; var cr = RGB(data3[i1 + 0], data3[i1 + 1], data3[i1 + 2]);
					var i2 = (x - 1 + y * w) * 4; var cl = RGB(data3[i2 + 0], data3[i2 + 1], data3[i2 + 2]);
					var i3 = (x + (y - 1) * w) * 4; var cu = RGB(data3[i3 + 0], data3[i3 + 1], data3[i3 + 2]);
					var i4 = (x + (y + 1) * w) * 4; var cd = RGB(data3[i4 + 0], data3[i4 + 1], data3[i4 + 2]);
					
					
					
					var dx = cr - cl;
					var dy = cd - cu;
					//var power = Math.sqrt(dx * dx / 4 + dy * dy / 4);
					//var power = Math.sqrt(dx * dx / 2 + dy * dy / 2);
					var power = Math.sqrt(dx * dx + dy * dy); //FilterProcessImage
					//var power = Math.abs(dx) + Math.abs(dy);
					//var power = Math.max (cr, cl, cu, cd);
					//var power = Math.min (cr, cl, cu, cd);
					
					i = (x + y * w) * 4;
					if (power > 128) {
						/*data2[i] = data3[i + 0]; // red
						data2[i + 1] = data3[i + 1]; // green
						data2[i + 2] = data3[i + 2]; // blue*/

						data2[i] = T; // red
						data2[i + 1] = T; // green
						data2[i + 2] = T; // blue

					}

					else {
						//var avg = (data3[i] + data3[i + 1] + data3[i + 2]) / 3;
						/*data2[i + 0] = T; // red
						data2[i + 1] = T; // green
						data2[i + 2] = T; // blue*/
						
						data2[i + 0] = data3[i + 0]; // red
						data2[i + 1] = data3[i + 1]; // green
						data2[i + 2] = data3[i + 2]; // blue
						
						/*data2[i] = 255 - data3[i]; // red
						data2[i + 1] = 255 - data3[i + 1]; // green
						data2[i + 2] = 255 - data3[i + 2]; // blue*/
					}
					
				}
			}
			ctx.putImageData(imageData2, 0, 0);
		}

		function F9() {
			DATA();
			var T = 255, n = 0;
			var i0 = Math.abs(d) - 1;
			for (var x = 0; x < w; x++) {
				for (var y = 0; y < h; y++) {

					/*var i1 = (x + 1 + y * w) * 4; var cr = data3[i1 + i0];
					var i2 = (x - 1 + y * w) * 4; var cl = data3[i2 + i0];
					var i3 = (x + (y - 1) * w) * 4; var cu = data3[i3 + i0];
					var i4 = (x + (y + 1) * w) * 4; var cd = data3[i4 + i0];

					var i5 = (x - 1 + (y + 1) * w) * 4; var cld = data3[i5 + i0];
					var i6 = (x - 1 + (y - 1) * w) * 4; var clu = data3[i6 + i0];
					var i7 = (x + 1 + (y + 1) * w) * 4; var crd = data3[i7 + i0];
					var i8 = (x + 1 + (y - 1) * w) * 4; var cru = data3[i8 + i0];*/
					
					
					var i1 = (x + 1 + y * w) * 4; var cr = Col1(data3, i1, n);
					var i2 = (x - 1 + y * w) * 4; var cl = Col1(data3, i2, n);
					var i3 = (x + (y - 1) * w) * 4; var cu = Col1(data3, i3, n);
					var i4 = (x + (y + 1) * w) * 4; var cd = Col1(data3, i4, n);

					var i5 = (x - 1 + (y + 1) * w) * 4; var cld = Col1(data3, i5, n);
					var i6 = (x - 1 + (y - 1) * w) * 4; var clu = Col1(data3, i6, n);
					var i7 = (x + 1 + (y + 1) * w) * 4; var crd = Col1(data3, i7, n);
					var i8 = (x + 1 + (y - 1) * w) * 4; var cru = Col1(data3, i8, n);
					
					var i0 = (x + y * w) * 4; var c = Col1(data3, i0, n);


					//var dx = cld + 2 * cd + crd - (clu + 2 * cu + cru); //Sobel
					//var dy = crd + 2 * cr + cru - (cld + 2 * cl + clu); 
					
					//var dx = 3 * (clu - cru + cld - crd) + 10 * (cl - cr); //Scharr
					//var dy = 3 * (clu + cru - cld - crd) + 10 * (cu - cd);
					
					//var dx = (clu - crd); //Roberts
					//var dy = (cru - cld); 
					
					//var dx = (clu + cl + cld) - (cru + cr + crd); //Prewitt
					//var dy = (clu + cu + cru) - (cld + cd + crd);
					
					var dx = (cr + cl + cu + cd + cld + clu + crd + cru) - 8 * c;
					var dy = dx;
					
					//var power = Math.sqrt(dx * dx / 4 + dy * dy / 4);
					//var power = Math.sqrt(dx * dx / 2 + dy * dy / 2);
					var power = Math.sqrt(dx * dx + dy * dy);
					//var power = Math.abs(dx) + Math.abs(dy);
					//var power = Math.max (cr, cl, cu, cd);
					
					i = (x + y * w) * 4;
					//avg = (data3[i] + data3[i + 1] + data3[i + 2]) / 3;
					
					if (power < 128) {
						data2[i] = T; // red
						data2[i + 1] = T; // green
						data2[i + 2] = T; // blue
					}

					else {
						//var avg = (data3[i] + data3[i + 1] + data3[i + 2]) / 3;

						data2[i] = data3[i]; // red
						data2[i + 1] = data3[i + 1]; // green
						data2[i + 2] = data3[i + 2]; // blue
						
						/*data2[i] = 255 - data3[i]; // red
						data2[i + 1] = 255 - data3[i + 1]; // green
						data2[i + 2] = 255 - data3[i + 2]; // blue*/
					}
					
				}
			}
			ctx.putImageData(imageData2, 0, 0);
		}

		function Roberts() {
			DATA();
			var T = 0;
			var i0 = Math.abs(d) - 1;
			for (var x = 0; x < w; x++) {
				for (var y = 0; y < h; y++) {
					i = (x + y * w) * 4;
					/*var i1 = (x + 1 + y * w) * 4; var cr = data3[i1 + i0];
					var i2 = (x - 1 + y * w) * 4; var cl = data3[i2 + i0];
					var i3 = (x + (y - 1) * w) * 4; var cu = data3[i3 + i0];
					var i4 = (x + (y + 1) * w) * 4; var cd = data3[i4 + i0];*/
					
					var i1 = (x - 1 + (y - 1) * w) * 4; var c1 = data3[i1 + i0];
					var i2 = (x + 1 + (y - 1) * w) * 4; var c2 = data3[i2 + i0];
					var i3 = (x - 1 + (y + 1) * w) * 4; var c3 = data3[i3 + i0];
					var i4 = (x + 1 + (y + 1) * w) * 4; var c4 = data3[i4 + i0];

					/*var i1 = (x + y * w) * 4; var c1 = data3[i1 + i0];
					var i2 = (x + (y + 1) * w) * 4; var c2 = data3[i2 + i0];
					var i3 = (x + (y + 1) * w) * 4; var c3 = data3[i3 + i0];
					var i4 = (x + 1 + (y + 1) * w) * 4; var c4 = data3[i4 + i0];*/
					
					
					var dx = c1 - c4;
					var dy = c2 - c3;
					//var power = Math.sqrt(dx * dx / 4 + dy * dy / 4);
					//var power = Math.sqrt(dx * dx / 2 + dy * dy / 2);
					
					var power = Math.abs(dx) + Math.abs(dy);
					
					//var power = Math.max (cr, cl, cu, cd);
					//var power = Math.min (cr, cl, cu, cd);
					
					i = (x + y * w) * 4;
					//avg = (data3[i] + data3[i + 1] + data3[i + 2]) / 3;
					if (power < 80) {
						data2[i] = data3[i]; // red
						data2[i + 1] = data3[i + 1]; // green
						data2[i + 2] = data3[i + 2]; // blue

					}

					else {
						data2[i] = T; // red
						data2[i + 1] = T; // green
						data2[i + 2] = T; // blue
						
						/*data2[i] = 255 - data3[i]; // red
						data2[i + 1] = 255 - data3[i + 1]; // green
						data2[i + 2] = 255 - data3[i + 2]; // blue*/

						/*var avg = (data3[i] + data3[i + 1] + data3[i + 2]) / 3;
						data2[i] = avg; // red
						data2[i + 1] = avg; // green
						data2[i + 2] = avg; // blue*/
					}
					
				}
			}
			ctx.putImageData(imageData2, 0, 0);
		}

		function black_white() {
			DATA();
			var T = 128, c = 255;
			
			var r = 0, g = 0, b = 0, c;
			for (var x = 0; x < w; x++) {
				for (var y = 0; y < h; y++) {
					var i = (x + y * w) * 4;
					r = data3[i + 0];
					g = data3[i + 1];
					b = data3[i + 2];
					
					if ((r > T && g > T) || (r > T && b > T) || (b > T && g > T)) {
					//if ((A > T) || (B > T) || (C > T)) {
					//if ((A , T) || (B < T) || (C < T)) {

					}

					else {
						/*data2[i] = c; // red
						data2[i + 1] = c; // green
						data2[i + 2] = c; // blue*/
						
						data2[i] = 255 - r; // red
						data2[i + 1] = 255 - g; // green
						data2[i + 2] = 255 - b; // blue

						/*var avg = (r + g + b) / 3;
						data2[i] = avg; // red
						data2[i + 1] = avg; // green
						data2[i + 2] = avg; // blue*/

					}
					
				}
			}
			ctx.putImageData(imageData2, 0, 0);
		}
		
