Number.round = function(value) {
    return (value + (value>0?0.5:-0.5)) << 0;
};

function HSL2RGB(h=0, s=0, l=0)  {
    h = parseInt(h); h=~~h; if (h>=360) h=359;
    s = parseInt(s); s=~~s; if (s>100) s=100; s/=100;
    l = parseInt(l); l=~~l; if (l>100) l=100; l/=100;
      
    C = (1-Math.abs(2*l-1))*s;
    hh = h/60;
    X = C*(1-Math.abs(hh%2-1));
    
    r = g = b = 0;
    
    if (hh>=0 && hh<1) { r = C; g = X; } else if (hh>=1 && hh<2) { r = X; g = C; } else if (hh>=2 && hh<3) { g = C; b = X; } else if (hh>=3 && hh<4) { g = X; b = C; } else if (hh>=4 && hh<5) { r = X; b = C; } else { r = C; b = X; }
    
    m = l-C/2;
    
    r += m; g += m; b += m;
    r *= 255.0; g *= 255.0; b *= 255.0;
    r = Number.round(r); g = Number.round(g); b = Number.round(b);
    
    hex = r*(2**16)+g*(2**8)+b;
    hex = hex.toString(16,6); // I was thinking about it... I still am... ( surely 16 is a power of something ;) ) Ma brains a wido XD
    len = hex.length;
    if (len<6) { for (i=0; i<6-len; i++) { hex = '0' + hex; } } // do padding for hex
    hex = hex.toUpperCase();
    return colors = { RGB: { r, g, b }, HEX: { hex } };
}