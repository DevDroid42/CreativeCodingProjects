// casey conchinha - @kcconch ( https://github.com/kcconch )
// louise lessel - @louiselessel ( https://github.com/louiselessel )
// more p5.js + shader examples: https://itp-xstory.github.io/p5js-shaders/

precision mediump float;

// grab texcoords from vert shader
varying vec2 vTexCoord;
uniform float time;

// our texture coming from p5
uniform sampler2D tex0;

/**
 * Returns accurate MOD when arguments are approximate integers.
 */
float modI(float a,float b) {
    float m=a-floor((a+0.5)/b)*b;
    return floor(m+0.5);
}

void main() {
    vec2 model_uv = vTexCoord;
    // the texture is loaded upside down and backwards by default so lets flip it
    model_uv.y = 1.0 - model_uv.y;

    //we will chop up the image into segments
    float segmentCount = sin(time/3000.0) + 2.0 * 4.0 + sin(time/6123.0 + 2.0);
    float segmentAngle = (3.1415926538 * 2.0) / segmentCount;
    vec2 transformedUV = (model_uv - 0.5) * 2.0;
    transformedUV *= 1.0;
    float theta = atan(transformedUV.y, transformedUV.x) + sin(time/10000.0) * 3.14;
    float radius = distance(vec2(0,0), transformedUV);
    //this will give us the segment this coordinate is in
    float currentSegment = floor(theta/segmentAngle);
    //only ever sample inside the first segment. 
    theta = theta - currentSegment * segmentAngle;
    //this will mirror half the segment. when the theta becomes over half the segment size it will flip
    theta = min(theta, segmentAngle - theta);
    //transform back to cartesian space
    transformedUV = vec2(cos(theta), sin(theta)) * radius + 0.5;
    //zoom in and out of the frame
    transformedUV *= vec2(sin(time/4000.0) * 0.7 + 1.0, cos(time/4000.0) * 0.7 + 1.0);
    transformedUV.x = transformedUV.x - floor(transformedUV.x);
    transformedUV.y = transformedUV.y - floor(transformedUV.y);
    // Color
    vec4 color = texture2D(tex0, model_uv);
    
    for(int i = 0; i < 3; i++){
        color[i] *= (sin(float(modI(float(int(currentSegment) + i), 3.0)) / 3.1415926538) + 1.0) / 2.0;
        color[i] = pow(color[i], 1.5);
        color[i] *= 3.0;
    }
    gl_FragColor = color;
}
