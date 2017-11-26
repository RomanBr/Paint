Pixastic['Neighbours'] = function (F) { //F = Max == Dilate, F = Min == Erode   
	var r = [], g = [], b = [];
	F = mathFun[F];
	for (y = 1; y < h - 1; y++) {
		for (x = 1; x < w - 1; x++) {
			i = (x + y * w) * 4;

			for (y1 = y - 1; y1 <= y + 1; y1++) {
				if ((y1 < 0) && (y1 > h)) continue;
				for (x1 = x - 1; x1 <= x + 1; x1++) {
					if ((x1 < 0) && (x1 > w)) continue;
					i1 = (x1 + y1 * w) * 4;
					if ((i1 > data2.length) || (i1 < 0 )) continue;
					
					
					if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					r.push(data3[i1 + 0]);
					g.push(data3[i1 + 1]);
					b.push(data3[i1 + 2]);
				}
			}

			data2[i + 0] = F(r); // red
			data2[i + 1] = F(g); // green
			data2[i + 2] = F(b); // blue
			
			var r = [], g = [], b = [];

		}
	}
	return data2;
}

Pixastic['Neighbours1'] = function (F) {
	var r = 0, g = 0, b = 0;
	F = mathFun[F];	
	for (y = 1; y < h - 1; y++) {
		for (x = 1; x < w - 1; x++) {
			i = (x + y * w) * 4;
			r = 0; g = 0; b = 0;
			for (y1 = y - 1; y1 <= y + 1; y1++) {
				if ((y1 < 0) && (y1 > h)) continue;
				for (x1 = x - 1; x1 <= x + 1; x1++) {
					if ((x1 < 0) && (x1 > w)) continue;
					i1 = (x1 + y1 * w) * 4;
					if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					r = F(r, data3[i1 + 0]);
					g = F(g, data3[i1 + 1]);
					b = F(b, data3[i1 + 2]);
				}
			}

			data2[i + 0] = r; // red
			data2[i + 1] = g; // green
			data2[i + 2] = b; // blue
			
			r = 0; g = 0; b = 0;

		}
	}
	return data2;
}


Pixastic['Neighbours2'] = function (F) {
	
	var r = 0, g = 0, b = 0;
	var L, L1 = 0, L2 = 0, L3 = 0, r1 = 0, g1 = 0, b1 = 0;
	F = mathFun[F];	
	for (var x = 1; x < w; x++) {
		for (var y = 1; y < h; y++) {

			i1 = (x + y * w) * 4;

			L1 = 0; L2 = 0; L3 = 0;
			r1 = 0; g1 = 0; b1 = 0;
			
			r =  data3[i1 + 0];
			g =  data3[i1 + 1];
			b =  data3[i1 + 2];
			
			for (x1 = x - 1; x1 < x + 2; x1++) {
				if ((x1 < 0) && (x1 > w)) continue;
				for (y1 = y - 1; y1 < y + 2; y1++) {
					if (y1 < 0)  continue;
					if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					i = (x1 + y1 * w) * 4;
					
					var F2 = F(r, data3[i]);
					if (F2 > L1) {
						r1 = data3[i];
						L1 = F2;
					}

					var F2 = F(g, data3[i + 1]);
					if (F2 > L2) {
						g1 = data3[i + 1];
						L2 = F2;
					}
							
					var F2 = F(b, data3[i + 2]);
					if (F2 > L3) {
						b1 = data3[i + 2];
						L3 = F2;
					}
				}
			}

			data2[i1] = r1; // red
			data2[i1 + 1] = g1; // green
			data2[i1 + 2] = b1; // blue

		}
	}
	return data2;
}

		
Pixastic['Neighbours3'] = function (F) { //Neighbours6
	
    var r = 0, g = 0, b = 0;
    var r1 = 0, g1 = 0, b1 = 0;
	var L = 0, lMax = 0;
	F = mathFun[F];	
	for (var x = 1; x < w; x++) {
		for (var y = 1; y < h; y++) {
	
			i = (x + y * w) * 4;
			lMax = 0;
			for (x1 = x - 1; x1 < x + 2; x1++) {
				if ((x1 < 0) && (x1 > w)) continue;
				for (y1 = y - 1; y1 < y + 2; y1++) {
					if (y1 < 0)  continue;
					if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					i1 = (x1 + y1 * w) * 4;
					
					r = data3[i1 + 0];
					g = data3[i1 + 1];
					b = data3[i1 + 2];
					//L = RGB(r, g, b); 
					//L = F([r, g, b]);
					L = Math.min(r, g, b); 
					L = Math.sin(L);

					//L = Math.min(Math.sin(r), Math.sin(g), Math.sin(b)); 
					if (L >= lMax) {
						lMax = L;
						r1 = r;
						g1 = g;
						b1 = b;
					}
				}
			}

			data2[i + 0] = r1; // red
			data2[i + 1] = g1; // green
			data2[i + 2] = b1; // blue

		}
	}
	return data2;
}

Pixastic['Neighbours4'] = function (F) { //Neighbours7
	var r = 0, g = 0, b = 0;
	var r1 = 0, g1 = 0, b1 = 0;
	var r2 = 0, g2 = 0, b2 = 0;
	var L1 = -Infinity, L2 = 0;
	F = mathFun[F];	
	for (var x = 1; x < w; x++) {
		for (var y = 1; y < h; y++) {
	
			i = (x + y * w) * 4;
			L2 = 0;
			//r1 = 0; g1 = 0; b1 = 0;
			r1 = data3[i + 0];
			g1 = data3[i + 1];
			b1 = data3[i + 2];
			for (x1 = x - 1; x1 < x + 2; x1++) {
				if ((x1 < 0) && (x1 > w)) continue;
				for (y1 = y - 1; y1 < y + 2; y1++) {
					if (y1 < 0)  continue;
					if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
					if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
					
					i1 = (x1 + y1 * w) * 4;
					r = data3[i1 + 0];
					g = data3[i1 + 1];
					b = data3[i1 + 2];
					L1 = F (r, r1, g, g1, b, b1);
					if (L1 > L2) {
						L2 = L1;
						r2 = r;
						g2 = g;
						b2 = b;
					}
					r1 = r; g1 = g; b1 = b;
				}
			}

			data2[i + 0] = r2; // red
			data2[i + 1] = g2; // green
			data2[i + 2] = b2; // blue
			
			c = [];
		}
	}
	return data2;
}
		
Pixastic['Morph_Grad'] = function () {
            var calcOffset, byteOffset;
            var minBlue, minGreen, minRed;
            var maxBlue, maxGreen, maxRed;
			var avgBlue, avgGreen, avgRed;
			var r1, g1, b1;
            for (var y = 1; y < h - 1; y++)
            {
                for (var x = 1; x < w - 1; x++)
                {
                    byteOffset = (x + y * w) * 4;
                    minBlue = 255; minGreen = 255; minRed = 255;
                    maxBlue = 0; maxGreen = 0; maxRed = 0;
					avgBlue = 0; avgGreen = 0; avgRed = 0;        
					r1 = data3[byteOffset + 0]; 
					g1 = data3[byteOffset + 1]; 
					b1 = data3[byteOffset + 2];
					for (var y1 = -1; y1 <= 1; y1++)
                    {
                        for (var x1 = -1; x1 <= 1; x1++)
                        {
                            var calcOffset = byteOffset + (x1 + y1 * w) * 4;

                            minRed = Math.min(data3[calcOffset + 0], minRed);
                            maxRed = Math.max(data3[calcOffset + 0], maxRed);
							
							minGreen = Math.min(data3[calcOffset + 1], minGreen);
                            maxGreen = Math.max(data3[calcOffset + 1], maxGreen);
							
							minBlue = Math.min(data3[calcOffset + 2], minBlue);
                            maxBlue = Math.max(data3[calcOffset + 2], maxBlue);
                       }
                    }

			//Dilate 
			/*data2[byteOffset + 0] = maxRed; // red 
			data2[byteOffset + 1] = maxGreen; // green 
			data2[byteOffset + 2] = maxBlue; // blue*/
			 
			 //Erode
			/*data2[byteOffset + 0] = minRed; // red 
			data2[byteOffset + 1] = minGreen; // green 
			data2[byteOffset + 2] = minBlue; // blue*/

			 //Morphological Gradient
			 data2[byteOffset + 0] = maxRed - minRed; // red 
			 data2[byteOffset + 1] = maxGreen - minGreen; // green 
			 data2[byteOffset + 2] = maxBlue - minBlue; // blue
			 
			 /*data2[byteOffset + 0] = (maxRed - r1); // red 
			 data2[byteOffset + 1] = (maxGreen - g1); // green 
			 data2[byteOffset + 2] = (maxBlue - b1); // blue*/
			
			 /*data2[byteOffset + 0] = r1 - minRed; // red 
			 data2[byteOffset + 1] = g1 - minGreen; // green 
			 data2[byteOffset + 2] = b1 - minBlue; // blue*/
		
			//2

			
		}
	}
	return data2;
}

