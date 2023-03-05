// const vshader = `
// void main(){
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform vec3 color;
// uniform vec2 move;
// uniform vec2 resolution;
// void main(){
//   vec2 uv=gl_FragCoord.xy/resolution;
//   vec3 colors = mix(vec3(1.0, 0.5, 0.0),vec3(0.1, 0.0, 1.0),uv.x);
//   gl_FragColor = vec4(colors,1.0);
// }
// `


// const vshader = `
// varying vec2 v_uv;
// void main(){
//   v_uv=uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform vec3 color;
// uniform vec2 move;
// uniform vec2 resolution;
// varying vec2 v_uv;
// void main(){
//   vec3 colors = vec3(v_uv.x,v_uv.y,0.0);
//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform vec3 color;
// uniform vec2 move;
// uniform vec2 resolution;
// varying vec3 v_position;
// void main(){
//   vec3 colors = vec3(v_position.x,v_position.y,0.0);
//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// varying vec3 v_position;
// void main(){
//   vec3 colors = vec3(0.0);
//    colors.r = step(-0.2,v_position.x);
//    colors.g = step(0.3,v_position.y);
//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// varying vec3 v_position;
// void main(){
//   vec3 colors = vec3(0.0);
//    colors.r = smoothstep(0.3,0.1,v_position.x);
//    colors.g = smoothstep(-0.4,-0.1,v_position.y);
//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// varying vec3 v_position;
// void main(){
//     float inCircle =1.0 - step(0.5,length(v_position.xy));
//     vec3 colors = vec3(0.5,0.5,0.0)*inCircle;

//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// varying vec3 v_position;
// float rect(vec2 pt,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.5;
//     float horz=step(-halfsize.x,p.x)-step(halfsize.x,p.x);
//     float vert=step(-halfsize.y,p.y)-step(halfsize.y,p.y);
//     return horz*vert;
// }
// void main(){
//     float inCircle =rect(v_position.xy,vec2(0.6),vec2(0.0));
//     vec3 colors = vec3(1.0,1.0,0.0)*inCircle;

//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// varying vec3 v_position;
// float rect(vec2 pt,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.75;
//     float horz=step(-halfsize.x,p.x)-step(halfsize.x,p.x);
//     float vert=step(-halfsize.y,p.y)-step(halfsize.y,p.y);
//     //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
//     return horz*vert;
// }
// void main(){
//     float inCircle =rect(v_position.xy,vec2(1.0),vec2(0.8));
//     vec3 colors = vec3(1.0,1.0,1.0)*inCircle;

//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// varying vec3 v_position;
// float rect(vec2 pt,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.75;
//     float horz=step(-halfsize.x,p.x)-step(halfsize.x,p.x);
//     float vert=step(-halfsize.y,p.y)-step(halfsize.y,p.y);
//     //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
//     return horz*vert;
// }
// void main(){
//     float inCircle1 =rect(v_position.xy,vec2(1.5),vec2(-0.75,0.8));
  
    
//     float  inCircle2 =rect(v_position.xy,vec2(1.5),vec2(0.75,0.8));
      
//        vec3 colors = vec3(1.0,0.0,1.0) * inCircle1 + vec3(0.0,1.0,1.0) * inCircle2;

//   gl_FragColor = vec4(colors,1.0);
// }
// `

// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform float time;
// varying vec3 v_position;
// float rect(vec2 pt,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.75;
//     float horz=step(-halfsize.x,p.x)-step(halfsize.x,p.x);
//     float vert=step(-halfsize.y,p.y)-step(halfsize.y,p.y);
//     //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
//     return horz*vert;
// }
// void main(){

//     float radius=1.0;
//     float t2=time*10.0;
//     vec2 center=vec2(cos(t2)*radius,sin(t2)*radius);
//     float inCircle1 =rect(v_position.xy,vec2(0.1),center);      
//        vec3 colors = vec3(1.0,1.0,0.0) * inCircle1;

//   gl_FragColor = vec4(colors,1.0);
// }
// `

// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform float time;
// varying vec3 v_position;
// float rect(vec2 pt,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.75;
//     float horz=step(-halfsize.x,p.x)-step(halfsize.x,p.x);
//     float vert=step(-halfsize.y,p.y)-step(halfsize.y,p.y);
//     //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
//     return horz*vert;
// }
// mat2 getRotationMatrix(float theta){
//   float s=sin(theta);
//   float c=cos(theta);
//   return mat2(c,-s,s,c);
// }
// void main(){

//     float radius=1.0;
//     float t2=time*5.0;
//     mat2 mat = getRotationMatrix(t2);
//     vec2 pt = mat * v_position.xy;
//     vec2 center=vec2(cos(time)*radius,sin(time)*radius);
//     float inCircle1 =rect(pt,vec2(0.5),center);      
//        vec3 colors = vec3(1.0,1.0,0.0) * inCircle1;

//   gl_FragColor = vec4(colors,1.0);
// }
// `
// const vshader = `
// varying vec3 v_position;
// void main(){
//   v_position=position;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform float time;
// varying vec3 v_position;
// float rect(vec2 pt,vec2 anchor,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.75;
//     float horz=step(-halfsize.x-anchor.x,p.x)-step(halfsize.x-anchor.x,p.x);
//     float vert=step(-halfsize.y-anchor.y,p.y)-step(halfsize.y-anchor.y,p.y);
//     //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
//     return horz*vert;
// }
// mat2 getRotationMatrix(float theta){
//   float s=sin(theta);
//   float c=cos(theta);
//   return mat2(c,-s,s,c);
// }
// mat2 getScaleMatrix(float scale){
//   return mat2(scale,-0,0,scale);
// }
// void main(){
//   vec2 center=vec2(1.0,0.0);
//     float radius=1.0;
//     float t2=time*5.0;
//     mat2 mat = getRotationMatrix(t2);
//     mat2 matscale=getScaleMatrix((sin(t2)+1.0)/3.0 +0.5);
//     vec2 pt = (mat * matscale * (v_position.xy-center))+center;
    
//     float inCircle1 =rect(pt,vec2(0.25),vec2(0.5),center);      
//        vec3 colors = vec3(1.0,1.0,0.0) * inCircle1;

//   gl_FragColor = vec4(colors,1.0);
// }
// `

// const vshader = `
// varying vec3 v_position;
// varying vec2 v_uv;
// void main(){
//   v_position=position;
//   v_uv=uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
// }
// `
// const fshader = `
// uniform float time;
// varying vec3 v_position;
// varying vec2 v_uv;
// float rect(vec2 pt,vec2 anchor,vec2 size,vec2 center){
//     vec2 p= pt-center;
//     vec2 halfsize=size*0.75;
//     float horz=step(-halfsize.x-anchor.x,p.x)-step(halfsize.x-anchor.x,p.x);
//     float vert=step(-halfsize.y-anchor.y,p.y)-step(halfsize.y-anchor.y,p.y);
//     //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
//     return horz*vert;
// }
// mat2 getRotationMatrix(float theta){
//   float s=sin(theta);
//   float c=cos(theta);
//   return mat2(c,-s,s,c);
// }
// mat2 getScaleMatrix(float scale){
//   return mat2(scale,0,0,scale);
// }
// void main(){
//   float tilecont=6.0;
//   vec2 center=vec2(0.5,0.5);
//     float radius=1.0;
//     float t2=time*5.0;
//     mat2 mat = getRotationMatrix(0.0);
//     mat2 matscale=getScaleMatrix((sin(t2)+1.0)/3.0+0.8);
//     vec2 p=fract(v_uv*tilecont);
//     vec2 pt = (mat * matscale * (p.xy-center))+center;
    
//     float inCircle1 =rect(pt,vec2(0.0),vec2(0.5),center);      
//        vec3 colors = vec3(1.0,1.0,0.0) * inCircle1;

//   gl_FragColor = vec4(colors,1.0);
// }
// `
const vshader = `
varying vec3 v_position;
varying vec2 v_uv;
void main(){
  v_position=position;
  v_uv=uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position,1.0);
}
`
const fshader = `
uniform float time;
varying vec3 v_position;
varying vec2 v_uv;
float rect(vec2 pt,vec2 anchor,vec2 size,vec2 center){
    vec2 p= pt-center;
    vec2 halfsize=size*0.75;
    float horz=step(-halfsize.x-anchor.x,p.x)-step(halfsize.x-anchor.x,p.x);
    float vert=step(-halfsize.y-anchor.y,p.y)-step(halfsize.y-anchor.y,p.y);
    //float vertz=step(-halfsize.z,p.z)-step(halfsize.z,p.z);
    return horz*vert;
}
mat2 getRotationMatrix(float theta){
  float s=sin(theta);
  float c=cos(theta);
  return mat2(c,-s,s,c);
}
mat2 getScaleMatrix(float scale){
  return mat2(scale,0,0,scale);
}
float circle(vec2 pt, vec2 center, float radius){
  vec2 p=pt-center;
  return 1.0 - step(radius , length(p));
}
float circle(vec2 pt, vec2 center, float radius, bool soften){
  vec2 p=pt-center;
  float edge=(soften)?radius-0.05:0.0;
  return 1.0 - smoothstep(radius-edge , radius+edge , length(p));
}
float circle(vec2 pt, vec2 center, float radius,float line_width){
  vec2 p=pt-center;

  float len=length(p);
  float half_line_width=line_width/2.0;
  return step(radius-half_line_width,len)-step(radius+half_line_width,len);
}
void main(){
  float tilecont=6.0;
  vec2 center=vec2(0.0,0.0);
  vec2 p=fract(v_uv*tilecont);
  vec2 pt = (p.xy-center)+center;
       vec3 colors = vec3(1.0,1.0,0.0) * circle(pt.xy, vec2(0.5 ),0.3,0.1);

  gl_FragColor = vec4(colors,1.0);
}
`
export {vshader,fshader}