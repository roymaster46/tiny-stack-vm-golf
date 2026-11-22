import{readFileSync as f,readdirSync as l,mkdirSync as m,writeFileSync as w}from'fs';
const S="!2b%'+,0~~~~~~~~*******&***&***~***~~~~~~~~~~~~~AEEA!~~~~~~~~~~~&)~~~~~~~~~~~~~~%%\"%",A=Int32Array;
function R(p,q){
let D=new A(256),C=[],M=new A(256),s=0,c=0,d=0,t=0,o='',i=0,a,g,e,k,u,v,n=p.length;
try{for(;;){
if(t==1e6)throw 10;
if(d<0|d>=n)throw 9;
let b=p[d],v=S.charCodeAt(b)-33;
if(v!=v||v>79)throw 5;
let m=v>>4,y=v>>2&3,z=v&3;
if(d+m>=n)throw 9;
t++;
if(s<y)throw 2;
if(s-y+z>256)throw 3;
d+=1+m;
switch(b){
case 0:case 83:throw b?D[--s]&255:0;
case 1:case 2:D[s++]=m<2?p[d-1]<<24>>24:p[d-4]|p[d-3]<<8|p[d-2]<<16|p[d-1]<<24;break;
case 3:case 4:case 6:if(b>3)D[s]=D[s-y];s+=b>3?1:-1;break;
case 5:case 7:{e=D[s-y];for(k=0;k<y-1;k++)D[s-y+k]=D[s-y+k+1];D[s-1]=e;break;}
case 23:case 27:D[s-1]=-D[s-1]-(b>25);break;
case 48:case 49:case 50:case 51:{g=p[d-2]|p[d-1]<<8;if(b<51){if(b==48||!D[--s]==(b==49))d+=g<<16>>16;}else{if(c==64)throw 7;C[c++]=d;d=g;}break;}
case 52:if(!c)throw 8;d=C[--c];break;
case 64:case 65:{e=D[s-1];if(e>>>0>255)throw 6;b<65?D[s-1]=M[e]:(M[e]=D[s-2],s-=2);break;}
case 80:case 81:{e=b>80?String.fromCharCode(D[s-1]&255):String(D[s-1]);if(o.length+e.length>65536)throw 11;s--;o+=e;break;}
case 82:D[s++]=q[i++]??-1;break;
default:{a=D[s-2],g=D[s-1],u=a>>>0,v=g>>>0;if(b>18&&b<23&&!g)throw 4;D[s-2]=[a+g,a-g,Math.imul(a,g),a/g,a%g,u/v,u%v,a&g,a|g,a^g,a<<g,a>>g,a>>>g,+(a==g),+(a<g),+(u<v)][b<23?b-16:b<27?b-17:b<31?b-18:b-19];s--;}
}}}catch(e){return[o,e]}
}
const{MAKEFUN_INPUT_DIR:I='/input',MAKEFUN_OUTPUT_DIR:O='/output'}=process.env;
l(I).forEach(x=>{let P=I+'/'+x,Q=O+'/'+x,[o,e]=R(f(P+'/program.bin'),f(P+'/input.bin'));m(Q,{recursive:!0});w(Q+'/stdout.bin',o,'latin1');w(Q+'/exit.txt',e+'\n');});
