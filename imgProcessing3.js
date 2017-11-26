		function Neighbours62(F)
        {
			DATA();
			F = mathFun[F];
			var g = [ [ 0, 1, 0 ], [ 1, 4, 1 ], [ 0, 1, 0 ] ];			
			var matrixSize = 3;
            var filterOffset = (matrixSize - 1) / 2;
            var calcOffset = 0;

            var byteOffset = 0;
			var Stride = w * 4;
            var r, g, b;
            var r1 = 0, g1 = 0, b1 = 0;
            var rMax = 0, gMax = 0, bMax = 0;

			var t = 128;
			var tR = t;//colAvg(1); //otsuThreshold(1, data3.length / 4);
			var tG = t;//colAvg(2); //otsuThreshold(2, data3.length / 4);
			var tB = t;//colAvg(3); //otsuThreshold(3, data3.length / 4);
			
			var lR, lG, lB;
			var lRMax, lGMax, lBMax;
			
            for (var offsetY = filterOffset; offsetY <
                h - filterOffset; offsetY++)
            {
                for (var offsetX = filterOffset; offsetX <
                    w - filterOffset; offsetX++)
                {
                    byteOffset = offsetY *
                                 Stride +
                                 offsetX * 4;

                    r1 = data3[byteOffset + 0]; g1 = data3[byteOffset + 1]; b1 = data3[byteOffset + 2];
                    //r = 0; g = 0; b = 0;
					//lRMax = 0; lGMax = 0; lBMax = 0;
					rMax = 0; bMax = 0; gMax = 0; 
                    for (var filterY = -filterOffset;
                        filterY <= filterOffset; filterY++)
                    {
						if (offsetY + filterY < 0) continue;
                        for (var filterX = -filterOffset;
                            filterX <= filterOffset; filterX++)
                        {
							if (offsetX + filterX < 0) continue;
							/*if ((Manhattan(offsetX, offsetX + filterX, offsetY, offsetY + filterY) != Math.abs(d)) && (Math.abs(d) <= 2)) continue;*/

							if (mathFun.Manhattan(offsetX, offsetX + filterX, offsetY, offsetY + filterY) != 1) continue;
                            calcOffset = byteOffset +
                                         (filterX * 4) +
                                         (filterY * Stride);

							//if (calcOffset == byteOffset) continue;
							
							/*r = Math.min(r, data3[calcOffset + 0]);
							g = Math.min(g, data3[calcOffset + 1]);
							b = Math.min(b, data3[calcOffset + 2]);
							
							r = Math.max(r, data3[calcOffset + 0]);
							g = Math.max(g, data3[calcOffset + 1]);
							b = Math.max(b, data3[calcOffset + 2]);*/
							
							r = data3[calcOffset + 0];
							g = data3[calcOffset + 1];
							b = data3[calcOffset + 2];

							/*lR = Math.abs(r1 - r);
							if (lR > lRMax) {
								lRMax = lR
								rMax = r;
							}
							
							lG = Math.abs(g1 - g);
							if (lG > lGMax) {
								lGMax = lG
								gMax = g;
							}
							
							lB = Math.abs(b1 - b);
							if (lB > lBMax) {
								lBMax = lB
								bMax = b;
							}*/
							
							/*rMax = Math.max ((r - r1), rMax, r1);
							gMax = Math.max ((g - g1), gMax, g1);
							bMax = Math.max ((b - b1), bMax, b1);*/

							/*rMax = Math.max (Math.abs(r - r1), rMax, r1);
							gMax = Math.max (Math.abs(g - g1), gMax, g1);
							bMax = Math.max (Math.abs(b - b1), bMax, b1);*/

							rMax = Math.max (rMax, r);
							gMax = Math.max (gMax, g);
							bMax = Math.max (bMax, b);

                        }
                    }

                    /*rMax = Math.max(rMax, r1)
                    gMax = Math.max(gMax, g1)
                    bMax = Math.max(bMax, b1)*/
					
					/*((data2[byteOffset + 0] = (rMax > tR) ? rMax : 0;
                    data2[byteOffset + 1] = (gMax > tG) ? gMax : 0;
                    data2[byteOffset + 2] = (bMax > tB) ? bMax : 0;*/
					
					/*if (r >= tR) data2[byteOffset + 0] = r;
					if (g >= tG) data2[byteOffset + 1] = g;
					if (b >= tB) data2[byteOffset + 2] = b;*/

					/*if (rMax >= tR) data2[byteOffset + 0] = rMax;
					if (gMax >= tG) data2[byteOffset + 1] = gMax;
					if (bMax >= tB) data2[byteOffset + 2] = bMax;*/

					if (rMax > tR && rMax > r1) data2[byteOffset + 0] = Math.max (rMax, r1);
					if (gMax > tG && gMax > g1) data2[byteOffset + 1] = Math.max (gMax, g1);
					if (bMax > tB && bMax > b1) data2[byteOffset + 2] = Math.max (bMax, b1);

					
					/*data2[byteOffset + 0] = (rMax >= tR) ? rMax : r;
                    data2[byteOffset + 1] = (gMax >= tG) ? gMax : g;
                    data2[byteOffset + 2] = (bMax >= tB) ? bMax : b;*/
					
                }
            }
			ctx.putImageData(imageData2, 0, 0);        
		}

		

	function FF123 (F) {    
		DATA ();
		F = mathFun[F];
		var r = [], g = [], b = [];
		var r1 = 0, g1 = 0, b1 = 0;
		for (y = 1; y < h - 1; y++) {
			for (x = 1; x < w - 1; x++) {
				i = (x + y * w) * 4;
				r1 = data3[i + 0]; g1 = data3[i + 1]; b1 = data3[i + 2];
				for (y1 = y - 1; y1 <= y + 1; y1++) {
					if (y1 < 0) continue;
					for (x1 = x - 1; x1 <= x + 1; x1++) {
						if (x1 < 0) continue;
						i1 = (x1 + y1 * w) * 4;
						if ((mathFun.Manhattan(x, x1, y, y1) == 0) && (d < 0)) continue;
						if ((mathFun.Manhattan(x, x1, y, y1) != Math.abs(d)) && (Math.abs(d) <= 2)) continue; 
						
						r.push(Math.max(data3[i1 + 0] , r1));
						g.push(Math.max(data3[i1 + 1] , g1));
						b.push(Math.max(data3[i1 + 2] , b1));
					}
				}

				data2[i + 0] = Byte1(F(r)); // red
				data2[i + 1] = Byte1(F(g)); // green
				data2[i + 2] = Byte1(F(b)); // blue
				
				var r = [], g = [], b = [];

			}
		}
		ctx.putImageData(imageData2, 0, 0);
	}

	
		function Neighbours62(F)
        {
			DATA();
			F = mathFun[F];
			var g = [ [ 0, 1, 0 ], [ 1, 4, 1 ], [ 0, 1, 0 ] ];			
			var matrixSize = 3;
            var filterOffset = (matrixSize - 1) / 2;
            var calcOffset = 0;

            var byteOffset = 0;
			var Stride = w * 4;
            var r, g, b;
            var r1 = 0, g1 = 0, b1 = 0;
            var rMax = 0, gMax = 0, bMax = 0;

			var t = 128;
			var tR = t;//colAvg(1); //otsuThreshold(1, data3.length / 4);
			var tG = t;//colAvg(2); //otsuThreshold(2, data3.length / 4);
			var tB = t;//colAvg(3); //otsuThreshold(3, data3.length / 4);
			
			var lR, lG, lB;
			var lRMax, lGMax, lBMax;
			
            for (var offsetY = filterOffset; offsetY <
                h - filterOffset; offsetY++)
            {
                for (var offsetX = filterOffset; offsetX <
                    w - filterOffset; offsetX++)
                {
                    byteOffset = offsetY *
                                 Stride +
                                 offsetX * 4;

                    r1 = data3[byteOffset + 0]; g1 = data3[byteOffset + 1]; b1 = data3[byteOffset + 2];
                    //r = 0; g = 0; b = 0;
					//lRMax = 0; lGMax = 0; lBMax = 0;
					rMax = 0; bMax = 0; gMax = 0; 
                    for (var filterY = -filterOffset;
                        filterY <= filterOffset; filterY++)
                    {
						if (offsetY + filterY < 0) continue;
                        for (var filterX = -filterOffset;
                            filterX <= filterOffset; filterX++)
                        {
							if (offsetX + filterX < 0) continue;
							/*if ((Manhattan(offsetX, offsetX + filterX, offsetY, offsetY + filterY) != Math.abs(d)) && (Math.abs(d) <= 2)) continue;*/

							if (mathFun.Manhattan(offsetX, offsetX + filterX, offsetY, offsetY + filterY) != 1) continue;
                            calcOffset = byteOffset +
                                         (filterX * 4) +
                                         (filterY * Stride);

							//if (calcOffset == byteOffset) continue;
							
							/*r = Math.min(r, data3[calcOffset + 0]);
							g = Math.min(g, data3[calcOffset + 1]);
							b = Math.min(b, data3[calcOffset + 2]);
							
							r = Math.max(r, data3[calcOffset + 0]);
							g = Math.max(g, data3[calcOffset + 1]);
							b = Math.max(b, data3[calcOffset + 2]);*/
							
							r = data3[calcOffset + 0];
							g = data3[calcOffset + 1];
							b = data3[calcOffset + 2];

							/*lR = Math.abs(r1 - r);
							if (lR > lRMax) {
								lRMax = lR
								rMax = r;
							}
							
							lG = Math.abs(g1 - g);
							if (lG > lGMax) {
								lGMax = lG
								gMax = g;
							}
							
							lB = Math.abs(b1 - b);
							if (lB > lBMax) {
								lBMax = lB
								bMax = b;
							}*/
							
							/*rMax = Math.max ((r - r1), rMax, r1);
							gMax = Math.max ((g - g1), gMax, g1);
							bMax = Math.max ((b - b1), bMax, b1);*/

							/*rMax = Math.max (Math.abs(r - r1), rMax, r1);
							gMax = Math.max (Math.abs(g - g1), gMax, g1);
							bMax = Math.max (Math.abs(b - b1), bMax, b1);*/

							rMax = Math.max (rMax, r);
							gMax = Math.max (gMax, g);
							bMax = Math.max (bMax, b);

                        }
                    }

                    /*rMax = Math.max(rMax, r1)
                    gMax = Math.max(gMax, g1)
                    bMax = Math.max(bMax, b1)*/
					
					/*((data2[byteOffset + 0] = (rMax > tR) ? rMax : 0;
                    data2[byteOffset + 1] = (gMax > tG) ? gMax : 0;
                    data2[byteOffset + 2] = (bMax > tB) ? bMax : 0;*/
					
					/*if (r >= tR) data2[byteOffset + 0] = r;
					if (g >= tG) data2[byteOffset + 1] = g;
					if (b >= tB) data2[byteOffset + 2] = b;*/

					/*if (rMax >= tR) data2[byteOffset + 0] = rMax;
					if (gMax >= tG) data2[byteOffset + 1] = gMax;
					if (bMax >= tB) data2[byteOffset + 2] = bMax;*/

					if (rMax > tR && rMax > r1) data2[byteOffset + 0] = Math.max (rMax, r1);
					if (gMax > tG && gMax > g1) data2[byteOffset + 1] = Math.max (gMax, g1);
					if (bMax > tB && bMax > b1) data2[byteOffset + 2] = Math.max (bMax, b1);

					
					/*data2[byteOffset + 0] = (rMax >= tR) ? rMax : r;
                    data2[byteOffset + 1] = (gMax >= tG) ? gMax : g;
                    data2[byteOffset + 2] = (bMax >= tB) ? bMax : b;*/
					
                }
            }
			ctx.putImageData(imageData2, 0, 0);        
		}

Pixastic['FF1234'] = function (F, F1) { //F = Max == Dilate, F = Min == Erode   
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

			data2[i + 0] = F(r, F1); // red
			data2[i + 1] = F(g, F1); // green
			data2[i + 2] = F(b, F1); // blue
			
			var r = [], g = [], b = [];

		}
	}
	return data2;
}

	/*function FF1234 (F) {    
		DATA ();
		var r = 0, g = 0, b = 0, n;
		for (y = 1; y < h - 1; y++) {
			for (x = 1; x < w - 1; x++) {
				i = (x + y * w) * 4;
				r = n * data3[i + 0]; g = n * data3[i + 1]; b = n * data3[i + 2];
				for (y1 = y - 1; y1 <= y + 1; y1++) {
					if (y1 < 0) continue;
					for (x1 = x - 1; x1 <= x + 1; x1++) {
						if (x1 < 0) continue;
						i1 = (x1 + y1 * w) * 4;
						//if (mathFun.Manhattan(x, x1, y, y1) == 0) 1; 
						if (mathFun.Manhattan(x, x1, y, y1) == 1) n = -1; 
						if (mathFun.Manhattan(x, x1, y, y1) == 2) n = 1; 
						
						r += n * data3[i1 + 0];
						g += n * data3[i1 + 1];
						b += n * data3[i1 + 2];
					}
				}

				data2[i + 0] = Byte1(r); // red
				data2[i + 1] = Byte1(g); // green
				data2[i + 2] = Byte1(b); // blue
			}
		}
		ctx.putImageData(imageData2, 0, 0);
	}*/
