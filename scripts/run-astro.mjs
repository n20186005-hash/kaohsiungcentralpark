import {rename,rm,access} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
const config=new URL('../wrangler.jsonc',import.meta.url),hidden=new URL('../.wrangler.jsonc.build-disabled',import.meta.url);
const exists=async u=>{try{await access(u);return true;}catch{return false;}};
if(await exists(hidden)){if(await exists(config))throw Error('Both live and hidden config exist; inspect before building');await rename(hidden,config);}
await rm(new URL('../.wrangler/deploy/config.json',import.meta.url),{force:true});
await rename(config,hidden);
let status=1;
try{const command=process.argv[2];if(!['build','check','dev'].includes(command))throw Error('Unknown Astro command');const child=spawnSync(process.execPath,['node_modules/astro/bin/astro.mjs',command,...process.argv.slice(3)],{stdio:'inherit',env:{...process.env,...(command==='build'?{ASTRO_ADAPTER:'cloudflare'}:{})}});status=child.status??1;}
finally{await rename(hidden,config);await rm(new URL('../.wrangler/deploy/config.json',import.meta.url),{force:true});await rm(new URL('../dist/server/wrangler.json',import.meta.url),{force:true});}
process.exitCode=status;
